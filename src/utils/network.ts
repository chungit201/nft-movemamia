import { ENV, envNane } from '@/common/consts'
import { Network } from '@aptos-labs/ts-sdk'

export const networkConfig = () => {
  const currentNetworkEnv: envNane = ENV as envNane
  let network: Network
  if (currentNetworkEnv === envNane.MAINNET) {
    // network = CONFIGS.mainnet;
    network = Network.CUSTOM
  } else {
    network = Network.CUSTOM
    //throw new Error('Invalid network env');
  }
  return network
}
