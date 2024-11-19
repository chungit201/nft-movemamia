import { ENV, envNane, FULL_NODE_URL, INDEXER_URL } from '@/common/consts'
import { Aptos, AptosConfig, Network } from '@aptos-labs/ts-sdk'
import {
  AptosAccount,
  AptosClient,
  CoinClient,
  FaucetClient,
  FungibleAssetClient,
  IndexerClient,
  Provider,
} from 'aptos'
import { TESTNET_FAUCET_URL, TESTNET_NODE_URL } from '@/configs/aptosConstants'
import { config } from '@/common/consts'

const useClient = () => {
  const aptosClient = ENV === envNane.TESTNET ? new AptosClient(FULL_NODE_URL) : new AptosClient(INDEXER_URL)

  const provider = new Provider({
    fullnodeUrl: FULL_NODE_URL,
    indexerUrl: INDEXER_URL,
  })
  const coinClient = new CoinClient(provider)
  const fungibleAsset = new FungibleAssetClient(provider)
  const faucetClient = new FaucetClient(TESTNET_NODE_URL, TESTNET_FAUCET_URL)
  const indexerClient = new IndexerClient(INDEXER_URL)

  const aptosConfig = new AptosConfig({
    network: config.NETWORK as Network,
    fullnode: FULL_NODE_URL,
    // clientConfig,
  })

  const aptos = new Aptos(aptosConfig)
  const aptosAccount = new AptosAccount()
  return {
    aptosClient,
    provider,
    coinClient,
    fungibleAsset,
    indexerClient,
    aptosAccount,
    aptos,
    faucetClient,
  }
}

export default useClient
