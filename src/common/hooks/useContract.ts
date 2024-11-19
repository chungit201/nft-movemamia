import useClient from '@/common/hooks/useClient'
import appActions from '@/modules/app/actions'
import { InputViewFunctionData } from '@aptos-labs/ts-sdk'
import { useWallet } from '@aptos-labs/wallet-adapter-react'
import { notification } from 'antd'
import { useDispatch } from 'react-redux'

const useContract = () => {
  const { signAndSubmitTransaction, connected, account, disconnect } = useWallet()
  const { aptos } = useClient()
  const dispatch = useDispatch()

  const run = async (payload: any): Promise<{ hash: string; result: any }> => {
    try {
      if (!connected || !account) {
        dispatch(appActions.SET_SHOW_CONNECT(true))
        throw { message: 'Authentication' }
      }
      const pendingTxn = await signAndSubmitTransaction({
        data: payload,
      })
      //NOT PUBLIC KEY WALLET
      const response = await aptos.waitForTransaction({
        transactionHash: pendingTxn.hash,
      })
      if (response && response?.success) {
        return { hash: pendingTxn?.hash, result: response }
      } else {
        throw { message: response.vm_status || 'Transaction error!' }
      }
    } catch (e: any) {
      console.log('e', e)
      if (e.code === 4100) {
        notification.error({ message: 'The account is not authorized!' })
        disconnect()
      }
      const message = e.message || e.name || e || 'Transaction error!'
      throw { message }
    }
  }

  const view = async (payload: InputViewFunctionData) => {
    return await aptos.view({
      payload,
    })
  }

  return { run, view }
}

export default useContract
