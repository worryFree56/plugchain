#!/bin/bash

KEY="val"
CHAINID="plugchain_1024-1"
MONIKER="localtestnet"
KEYRING="test"
KEYALGO="eth_secp256k1"
LOGLEVEL="info"
NODEDIR=node/node1
# to trace evm
#TRACE="--trace"
TRACE=""

# validate dependencies are installed
command -v jq > /dev/null 2>&1 || { echo >&2 "jq not installed. More info: https://stedolan.github.io/jq/download/"; exit 1; }

# remove existing daemon
rm -rf $NODEDIR

plugchaind config keyring-backend $KEYRING --home $NODEDIR
plugchaind config chain-id $CHAINID --home $NODEDIR

# if $KEY exists it should be deleted
plugchaind keys add $KEY --keyring-backend $KEYRING --algo $KEYALGO --home $NODEDIR

# Set moniker and chain-id for Evmos (Moniker can be anything, chain-id must be an integer)
plugchaind init $MONIKER --chain-id $CHAINID --home $NODEDIR

# Change parameter token denominations to uplugcn
cat $NODEDIR/config/genesis.json | jq '.app_state["staking"]["params"]["bond_denom"]="uplugcn"' > $NODEDIR/config/tmp_genesis.json && mv $NODEDIR/config/tmp_genesis.json $NODEDIR/config/genesis.json
cat $NODEDIR/config/genesis.json | jq '.app_state["crisis"]["constant_fee"]["denom"]="uplugcn"' > $NODEDIR/config/tmp_genesis.json && mv $NODEDIR/config/tmp_genesis.json $NODEDIR/config/genesis.json
cat $NODEDIR/config/genesis.json | jq '.app_state["gov"]["deposit_params"]["min_deposit"][0]["denom"]="uplugcn"' > $NODEDIR/config/tmp_genesis.json && mv $NODEDIR/config/tmp_genesis.json $NODEDIR/config/genesis.json
cat $NODEDIR/config/genesis.json | jq '.app_state["mint"]["params"]["mint_denom"]="uplugcn"' > $NODEDIR/config/tmp_genesis.json && mv $NODEDIR/config/tmp_genesis.json $NODEDIR/config/genesis.json
cat $NODEDIR/config/genesis.json | jq '.app_state["evm"]["params"]["evm_denom"]="uplugcn"' > $NODEDIR/config/tmp_genesis.json && mv $NODEDIR/config/tmp_genesis.json $NODEDIR/config/genesis.json
cat $NODEDIR/config/genesis.json | jq '.app_state["liquidity"]["params"]["pool_creation_fee"][0]["denom"]="uplugcn"' > $NODEDIR/config/tmp_genesis.json && mv $NODEDIR/config/tmp_genesis.json $NODEDIR/config/genesis.json

# increase block time (?)
cat $NODEDIR/config/genesis.json | jq '.consensus_params["block"]["time_iota_ms"]="30000"' > $NODEDIR/config/tmp_genesis.json && mv $NODEDIR/config/tmp_genesis.json $NODEDIR/config/genesis.json

# Set gas limit in genesis
cat $NODEDIR/config/genesis.json | jq '.consensus_params["block"]["max_gas"]="10000000"' > $NODEDIR/config/tmp_genesis.json && mv $NODEDIR/config/tmp_genesis.json $NODEDIR/config/genesis.json

# disable produce empty block
if [[ "$OSTYPE" == "darwin"* ]]; then
    sed -i '' 's/create_empty_blocks = true/create_empty_blocks = false/g' $NODEDIR/config/config.toml
  else
    sed -i 's/create_empty_blocks = true/create_empty_blocks = false/g' $NODEDIR/config/config.toml
fi

if [[ $1 == "pending" ]]; then
  if [[ "$OSTYPE" == "darwin"* ]]; then
      sed -i '' 's/create_empty_blocks_interval = "0s"/create_empty_blocks_interval = "30s"/g' $NODEDIR/config/config.toml
      sed -i '' 's/timeout_propose = "3s"/timeout_propose = "30s"/g' $NODEDIR/config/config.toml
      sed -i '' 's/timeout_propose_delta = "500ms"/timeout_propose_delta = "5s"/g' $NODEDIR/config/config.toml
      sed -i '' 's/timeout_prevote = "1s"/timeout_prevote = "10s"/g' $NODEDIR/config/config.toml
      sed -i '' 's/timeout_prevote_delta = "500ms"/timeout_prevote_delta = "5s"/g' $NODEDIR/config/config.toml
      sed -i '' 's/timeout_precommit = "1s"/timeout_precommit = "10s"/g' $NODEDIR/config/config.toml
      sed -i '' 's/timeout_precommit_delta = "500ms"/timeout_precommit_delta = "5s"/g' $NODEDIR/config/config.toml
      sed -i '' 's/timeout_commit = "5s"/timeout_commit = "150s"/g' $NODEDIR/config/config.toml
      sed -i '' 's/timeout_broadcast_tx_commit = "10s"/timeout_broadcast_tx_commit = "150s"/g' $NODEDIR/config/config.toml
  else
      sed -i 's/create_empty_blocks_interval = "0s"/create_empty_blocks_interval = "30s"/g' $NODEDIR/config/config.toml
      sed -i 's/timeout_propose = "3s"/timeout_propose = "30s"/g' $NODEDIR/config/config.toml
      sed -i 's/timeout_propose_delta = "500ms"/timeout_propose_delta = "5s"/g' $NODEDIR/config/config.toml
      sed -i 's/timeout_prevote = "1s"/timeout_prevote = "10s"/g' $NODEDIR/config/config.toml
      sed -i 's/timeout_prevote_delta = "500ms"/timeout_prevote_delta = "5s"/g' $NODEDIR/config/config.toml
      sed -i 's/timeout_precommit = "1s"/timeout_precommit = "10s"/g' $NODEDIR/config/config.toml
      sed -i 's/timeout_precommit_delta = "500ms"/timeout_precommit_delta = "5s"/g' $NODEDIR/config/config.toml
      sed -i 's/timeout_commit = "5s"/timeout_commit = "150s"/g' $NODEDIR/config/config.toml
      sed -i 's/timeout_broadcast_tx_commit = "10s"/timeout_broadcast_tx_commit = "150s"/g' $NODEDIR/config/config.toml
  fi
fi

# Allocate genesis accounts (cosmos formatted addresses)
plugchaind add-genesis-account $KEY 100000000000000000000000000uplugcn --keyring-backend $KEYRING --home $NODEDIR

# Sign genesis transaction
plugchaind gentx $KEY 1000000000000000000000uplugcn --keyring-backend $KEYRING --chain-id $CHAINID --home $NODEDIR

# Collect genesis tx
plugchaind collect-gentxs --home $NODEDIR

# Run this to ensure everything worked and that the genesis file is setup correctly
plugchaind validate-genesis --home $NODEDIR

if [[ $1 == "pending" ]]; then
  echo "pending mode is on, please wait for the first block committed."
fi

# Start the node (remove the --pruning=nothing flag if historical queries are not needed)
plugchaind start --pruning=nothing $TRACE --log_level $LOGLEVEL --minimum-gas-prices=0.0001uplugcn --json-rpc.api eth,txpool,personal,net,debug,web3 --home $NODEDIR
