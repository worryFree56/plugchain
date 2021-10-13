package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/oracleNetworkProtocol/plugchain/x/nft/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GetCollection(ctx sdk.Context, denomID string) (types.Collection, error) {
	denom, ok := k.GetDenomByID(ctx, denomID)
	if !ok {
		return types.Collection{}, sdkerrors.Wrapf(types.ErrInvalidDenom, "denomID (%s) not existed", denomID)
	}
	nfts := k.GetNFTs(ctx, denomID)
	return types.NewCollection(denom, nfts), nil
}

func (k Keeper) GetPaginateCollection(ctx sdk.Context, req *types.QueryCollectionRequest, denomID string) (types.Collection, *query.PageResponse, error) {
	denom, found := k.GetDenomByID(ctx, denomID)
	if !found {
		return types.Collection{}, nil, sdkerrors.Wrapf(types.ErrInvalidDenom, "denomID %s not existed", denomID)
	}
	var nfts []types.NFTI
	store := ctx.KVStore(k.storeKey)
	nftStore := prefix.NewStore(store, types.GetKeyNFT(denomID, ""))
	pageRes, err := query.Paginate(nftStore, req.Pagination, func(key, value []byte) error {
		var nft types.NFT
		k.cdc.MustUnmarshalBinaryBare(value, &nft)
		nfts = append(nfts, nft)
		return nil
	})
	if err != nil {
		return types.Collection{}, nil, status.Errorf(codes.InvalidArgument, "paginate:%v", err)
	}
	return types.NewCollection(denom, nfts), pageRes, nil
}

func (k Keeper) GetTotalSupplyByOwner(ctx sdk.Context, owner sdk.AccAddress, denomID string) (supply uint64) {
	store := ctx.KVStore(k.storeKey)
	iterator := sdk.KVStorePrefixIterator(store, types.KeyOwner(owner, denomID, ""))
	defer iterator.Close()
	for ; iterator.Valid(); iterator.Next() {
		supply++
	}
	return supply
}

// get denom count
func (k Keeper) GetTotalSupply(ctx sdk.Context, denomID string) uint64 {
	store := ctx.KVStore(k.storeKey)
	bz := store.Get(types.KeyCollectionByDenomID(denomID))
	if len(bz) == 0 {
		return 0
	}
	return types.MustUnMarshalSupply(k.cdc, bz)

}

// supply++
func (k Keeper) increaseSupply(ctx sdk.Context, denomID string) {
	supply := k.GetTotalSupply(ctx, denomID)
	supply++
	store := ctx.KVStore(k.storeKey)
	bz := types.MustMarshalSupply(k.cdc, supply)
	store.Set(types.KeyCollectionByDenomID(denomID), bz)
}

// supply--
func (k Keeper) decreaseSupply(ctx sdk.Context, denomID string) {
	supply := k.GetTotalSupply(ctx, denomID)
	supply--
	store := ctx.KVStore(k.storeKey)

	if supply == 0 {
		store.Delete(types.KeyCollectionByDenomID(denomID))
		return
	}

	bz := types.MustMarshalSupply(k.cdc, supply)
	store.Set(types.KeyCollectionByDenomID(denomID), bz)
}
