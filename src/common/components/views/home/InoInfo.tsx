import React from 'react'
import Image from 'next/image'
import { Col } from 'antd'

export const InoInfo: React.FunctionComponent = () => {
  return (
    <Col xs={24} lg={14} xl={14}>
      <div className={'flex flex-col sm:flex-row gap-8'}>
        <div>
          <div className={'w-full sm:w-[250px] h-auto'}>
            <Image
              className={'w-full sm:w-[250px] h-auto'}
              src={require('@/common/assets/images/NFTs Thumbnail.png')}
              alt={''}
            />
          </div>
        </div>
        <div className={'flex flex-col gap-3'}>
          <h1 className={'text-[#fff] text-2xl'}>Stellar Panthera NFTs Collection</h1>
          <div className={'text-[#7C7C7C]'}>
            <p>
              Stellar Panthera NFTs Collection is an exclusive NFT collection from Movemania, the leading entertainment
              gaming platform in the Movement ecosystem. This collection is inspired by the dangerous Panthera Stellar
              in the Movemania Universe.
            </p>
            <div className={'mt-4'}>
              <div className={'flex gap-2'}>
                <span className={'uppercase'}>Inventory</span>
                <span>2,222 NFTs</span>
              </div>
              <div className={'flex gap-2'}>
                <span className={'uppercase'}>network</span>
                <span>Movement</span>
              </div>
              <div className={'flex gap-2'}>
                <span className={'uppercase'}>currency</span>
                <span>MOVE</span>
              </div>
            </div>
          </div>
          <div className={'flex justify-between items-center'}>
            <div className={'text-[#F1CB22]'}>800/1000 NFTs minted</div>
            <div className={'mt-3'}>
              <Image src={require('@/common/assets/images/line-italic.png')} alt={''} />
            </div>
          </div>
        </div>
      </div>
    </Col>
  )
}
