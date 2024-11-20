import React from 'react'
import { Button, Divider, Modal, notification } from 'antd'
import { useWallet, Wallet } from '@aptos-labs/wallet-adapter-react'
import { isMobile } from 'react-device-detect'
import { deepLinkMobile } from '@/utils'

interface Props {
  isModalOpen: boolean
  handleClose: () => void
}

export const ModalConnectWallet: React.FunctionComponent<Props> = ({ isModalOpen, handleClose }) => {
  const { wallets, connect } = useWallet()

  const handleConnect = async (wallet: Wallet) => {
    try {
      if (wallet.readyState === 'Installed') {
        await connect(wallet.name)
        handleClose()
      } else {
        if (!isMobile) {
          window.open(wallet.url, '_blank')
        } else {
          deepLinkMobile(wallet)
        }
      }
    } catch (e: any) {
      notification.error({
        message: <h3 className={'text-[#1A2A3B] dark:text-white'}>Transaction failed!</h3>,
        description: (
          <div>
            <div className={'text-red-400'}>{e.name || e.message}</div>
            <div className={'text-xs opacity-50 mt-1 text-[#1A2A3B] dark:text-white'}>a few seconds ago</div>
          </div>
        ),
        placement: 'bottomRight',
      })
      console.log(e)
    }
  }

  return (
    <Modal centered visible={isModalOpen} footer={false} title={''} onCancel={handleClose} width={453} closable={true}>
      <React.Fragment>
        <div className={'p-4 overflow-auto sm:overflow-hidden'}>
          <h1 className={'text-start text-[#191D21] text-xl font-medium'}>Login or Connect</h1>
          <p className={'mb-5 text-start text-[#191D21] text-opacity-70 dark:text-white mt-2'}>
            Please connect your wallet to start the journey.
          </p>
          <Divider>Or</Divider>
          <div className={'walletLists max-h-[500px] overflow-y-auto px-3 sm:px-0 '}>
            <div className={'space-y-3'}>
              {wallets?.map((item: any, index: number) => {
                return (
                  <Button
                    onClick={() => handleConnect(item as Wallet)}
                    key={index}
                    className={
                      'walletItem bg-[#F3F5F8] border-0 h-16 rounded-[12px] w-full hover:bg-[#F3F5F8] flex items-center text-start text-xl '
                    }
                  >
                    <div className={'w-full'}>
                      <div className={'text-[#1A2A3B] dark:text-[#fff]'}>
                        <div className={'flex justify-between'}>
                          <div className={'flex justify-start items-center gap-4'}>
                            <div className={'flex justify-center relative w-[40px] h-[40px] '}>
                              <img className={'h-[40px] w-[40px] rounded-full'} src={item?.icon} alt="" />
                            </div>
                            <div>
                              <div className={'text-[12px] leading-none text-lg text-[#1A2A3B] font-semibold'}>
                                {item?.name}
                              </div>
                              <span className={'text-sm text-[#BFBFBF]'}>
                                {item?.readyState === 'Installed' ? 'Installed' : 'NotDetected'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Button>
                )
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    </Modal>
  )
}
