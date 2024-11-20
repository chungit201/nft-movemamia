import { Network } from '@aptos-labs/ts-sdk'
import { MAINNET_INDEXER_URL, MAINNET_NODE_URL, TESTNET_INDEXER_URL, TESTNET_NODE_URL } from '@/configs/aptosConstants'
import moment from 'moment'

export const enum envNane {
  MAINNET = 'mainnet',
  TESTNET = 'testnet',
}

// export const ENV: envNane = process.env.CURRENT_NETWORK as any
export const ENV: envNane = 'mainnet' as any

export const FULL_NODE_URL = ENV === envNane.TESTNET ? TESTNET_NODE_URL : MAINNET_NODE_URL
export const INDEXER_URL = ENV === envNane.TESTNET ? TESTNET_INDEXER_URL : MAINNET_INDEXER_URL
export const INO_START = Number(moment('2024-12-18T12:00:00.000Z').format('X'))

const mainnetConfig = {
  API_ENDPOINT_URL: 'https://api.meso.finance',
  APTOS_SCAN_URL: 'https://aptscan.ai',
  NETWORK: Network.CUSTOM,
  MSAFE: 'https://app.m-safe.io/aptos/v2',
}

// Production - testnet branch - aptos testnet
const testnetConfig = {
  API_ENDPOINT_URL: 'https://api-testnet.meso.finance',
  APTOS_SCAN_URL: 'https://aptscan.ai',
  NETWORK: Network.CUSTOM,
  MSAFE: 'https://testnet.m-safe.io/aptos/v2',
}

export const config = ENV === envNane.MAINNET ? mainnetConfig : testnetConfig
