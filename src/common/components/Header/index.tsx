import React, { useState } from 'react'
import { Button, Divider, Layout, Menu, Popover, Tooltip } from 'antd'
import Link from 'next/link'

const { Header } = Layout
import styles from './Header.module.scss'
import { default as classNames, default as cx } from 'classnames'

import Image from 'next/image'
import { ModalConnectWallet } from '@/common/components/Modals/ModalConnectWallet'
import { useWallet } from '@aptos-labs/wallet-adapter-react'
import { avatarImage, copyToClipboard, ellipseAddress } from '@/utils'
import { removeData } from '@/common/hooks/useLocalStoragre'
import appActions from '@/modules/app/actions'
import { useDispatch, useSelector } from 'react-redux'
import useNetworkConfiguration from '@/common/hooks/useNetwork'

export const HeaderPage: React.FunctionComponent = () => {
  const [copyText, setCopyText] = useState('Copy')

  const { account, disconnect, wallet } = useWallet()
  const dispatch = useDispatch()
  const app = useSelector((state: any) => state.app)
  const { networkCfg } = useNetworkConfiguration()

  const handleDisconnect = async () => {
    try {
      await removeData('accessToken')
      dispatch(appActions.SET_IS_LOGIN(false))
      disconnect()
    } catch (e) {
      console.log(e)
    }
  }

  const handleSwitchAccount = () => {
    disconnect()
    dispatch(appActions.SET_SHOW_CONNECT(true))
  }

  const toggleModalConnect = () => {
    dispatch(appActions.SET_SHOW_CONNECT(!app.showConnect))
  }

  const handleCopy = (value: string) => {
    setCopyText('Copied!')
    setTimeout(() => {
      setCopyText('Copy')
    }, 1000)
    copyToClipboard(value)
  }

  const accountInfo = (
    <div className={'py-3'}>
      <div className={'flex gap-2 items-center px-3 '}>
        <div>
          <img className={'w-[30px] rounded-full'} src={avatarImage} alt={''} />
        </div>
        <div>{ellipseAddress(account?.address, 6)}</div>
      </div>
      <div className={'mt-3 flex gap-2 px-3'}>
        <Button onClick={handleSwitchAccount} className={'uppercase text-[10px] font-semibold'} size={'small'}>
          Switch Wallet
        </Button>
        <Button onClick={handleDisconnect} className={'uppercase text-[10px] font-semibold'} size={'small'}>
          Disconnect
        </Button>
      </div>
      <Divider className={'mt-3 mb-2'} />
      <div className={''}>
        <div className={'hover:bg-[#ccc] hover:bg-opacity-20 cursor-pointer font-medium  text-[#5D6B98]  px-3 py-2'}>
          <Tooltip title={copyText}>
            <div onClick={() => handleCopy(account?.address as string)} className={'flex gap-2  items-center'}>
              <div className={'w-[20px] flex'}>
                <i className="fa-regular fa-clone"></i>
              </div>
              Copy Address
            </div>
          </Tooltip>
        </div>
        <div className={'hover:bg-[#ccc] hover:bg-opacity-20 cursor-pointer font-medium  px-3 py-2'}>
          <Link
            target={'_blank'}
            className={'flex items-center gap-2 text-[#5D6B98]'}
            href={`https://explorer.aptoslabs.com/account/${account?.address}?network=${networkCfg}`}
          >
            <div className={'w-[20px] text-[#7F56D9] flex'}>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
            View on Explorer
          </Link>
        </div>
      </div>
    </div>
  )

  return (
    <Header className="z-20 w-full flex items-center pb-0 bg-transparent min-h-[90px] relative px-3">
      <div className="container max-w-[1280px] h-full mx-auto">
        <div className=" mx-auto h-full w-full top-0 left-0 flex items-center  justify-between relative">
          <div className={classNames('  flex items-center ')}>
            <Link href={'/'}>
              <div>
                <Image
                  className={'w-[148px] sm:w-[210px] h-auto'}
                  src={require('@/common/assets/images/logo 1.png')}
                  alt={''}
                />
              </div>
            </Link>
          </div>
          <div className="grow items-center justify-center  hidden md:block ml-10">
            <Menu
              theme="light"
              className={cx(
                styles.menu,
                ' justify-start max-w-[550px] items-start min-w-[200px] w-full h-full !bg-transparent hidden sm:flex',
              )}
            >
              <Menu.Item className={'h-full mb-0 mt-0'} key="1">
                <div className={'text-sm flex flex-col gap-2'}>
                  <div className={'flex text-[#7C7C7C]   gap-4'}>
                    <span className={'uppercase'}>Inventory</span>
                    <span>1,000 NFTs</span>
                  </div>
                  <div className={'flex text-[#7C7C7C] uppercase gap-4'}>
                    <span>currency</span>
                    <span>MOVE</span>
                  </div>
                </div>
              </Menu.Item>
              <Menu.Item className={'h-full flex items-start mb-0 mt-0'} key="2">
                <div className={'text-sm flex flex-col gap-2'}>
                  <div className={'flex text-[#7C7C7C]  gap-4'}>
                    <span className={'uppercase'}>network</span>
                    <span>Movement</span>
                  </div>
                </div>
              </Menu.Item>
            </Menu>
          </div>
          <div className=" h-full w-fit absolute right-0 bottom-[50%] translate-y-2/4 flex items-center gap-x-2">
            <div className={'flex items-center gap-2 sm:gap-4'}>
              {account ? (
                <Popover placement="bottomRight" content={accountInfo} trigger="click">
                  <Button
                    className={
                      'flex items-center justify-center gap-2 border-[#F1CB22] bg-transparent text-[#F1CB22]  font-semibold h-9 rounded-full'
                    }
                  >
                    <img className={'w-[14px] h-auto'} src={wallet?.icon} alt="" />
                    {ellipseAddress(account.address as string, 4)}
                  </Button>
                </Popover>
              ) : (
                <Button
                  onClick={() => {
                    dispatch(appActions.SET_SHOW_CONNECT(true))
                  }}
                  className={'border-0 bg-[#FFD52E] text-[#080708] font-medium h-10 rounded-[8px]'}
                >
                  Connect Wallet
                </Button>
              )}
            </div>
            {/*<div className={'block md:hidden'}>*/}
            {/*  <Hamburger color={'#fff'} size={24} toggled={isOpen} toggle={setOpen} />*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
      <ModalConnectWallet isModalOpen={app.showConnect} handleClose={toggleModalConnect} />
    </Header>
  )
}
