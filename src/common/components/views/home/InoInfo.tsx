import React from 'react'
import Image from 'next/image'
import { Col } from 'antd'

export const InoInfo: React.FunctionComponent = () => {
  return (
    <Col span={15}>
      <div className={'flex gap-8'}>
        <div>
          <div className={'w-[250px]'}>
            <Image className={'w-[250px]'} src={require('@/common/assets/images/NFTs Thumbnail.png')} alt={''} />
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
            <p>
              Crafted to represent unique strength and personality, the collection contributes to the development and
              growth of the Movement ecosystem.
            </p>
          </div>
          <div className={'text-[#F1CB22]'}>800/1000 NFTs minted</div>
          <div className={'mt-3'}>
            <Image src={require('@/common/assets/images/line-italic.png')} alt={''} />
          </div>
        </div>
      </div>
    </Col>
  )
}
