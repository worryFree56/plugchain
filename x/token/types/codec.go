package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"

	// this line is used by starport scaffolding # 1
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

var (
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterInterface((*TokenI)(nil), nil)
	cdc.RegisterConcrete(&Token{}, "x/token/token", nil)
	cdc.RegisterConcrete(&MsgIssueToken{}, "x/token/MsgIssueToken", nil)
	cdc.RegisterConcrete(&MsgMintToken{}, "x/token/MsgMintToken", nil)
	cdc.RegisterConcrete(&MsgEditToken{}, "x/token/MsgEditToken", nil)
	cdc.RegisterConcrete(&MsgBurnToken{}, "x/token/MsgBurnToken", nil)
	cdc.RegisterConcrete(&MsgTransferOwnerToken{}, "x/token/MsgTransferOwnerToken", nil)
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {

	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgIssueToken{},
		&MsgMintToken{},
		&MsgEditToken{},
		&MsgBurnToken{},
		&MsgTransferOwnerToken{},
	)

	registry.RegisterInterface(
		"plugchain.token.TokenI",
		(*TokenI)(nil),
		&Token{},
	)
	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)

}
