import React from 'react'
import { Card, Col, Divider } from 'antd'
import CountdownIno from '@/common/components/CountDown'
import { INO_START } from '@/common/consts'

export const CardMintTime: React.FunctionComponent = () => {
  return (
    <Col xs={24} lg={10} xl={10}>
      <div className={'pl-0 lg:pl-10'}>
        <Card bordered={false} className={'bg-[#292929] max-w-[472px] rounded-[16px]'}>
          <div className={'text-[#F1CB22] text-center'}>Mint Time</div>
          <Divider className={'border-[#FFF] my-3'} />
          <CountdownIno endAt={INO_START} onMomentChange={() => {}} />
          <Divider className={'border-[#FFF] my-3'} />
          <p className={'text-[#7C7C7C]'}>
            Loremipsum Loremipsum Loremipsum Lorem Loremipsum Loremipsum Loremipsum Loremipsum{' '}
          </p>
        </Card>
      </div>
    </Col>
  )
}
