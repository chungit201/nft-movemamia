import React from 'react'
import { Card, Col, Row } from 'antd'
import { Round1Icon, Round2Icon, Round3Icon, Round4Icon } from '@/common/components/icons'

export const InoTimeline: React.FunctionComponent = () => {
  return (
    <Card bordered={false} className={'mt-10'}>
      <Row gutter={[16, 16]}>
        <Col xs={12} xl={6}>
          <div className={'flex flex-col'}>
            <Round1Icon />
            <div className={'text-[#fff] text-base mt-3'}>VIP Round</div>
            <div className={'text-[#7C7C7C]'}>20:00 (UTC) - Nov 7th 2024</div>
          </div>
        </Col>
        <Col xs={12} xl={6}>
          <div className={'flex flex-col'}>
            <Round2Icon />
            <div className={'text-[#fff] text-sm sm:text-base mt-3'}>Whitelist FCFS Round </div>
            <div className={'text-[#7C7C7C]'}>20:00 (UTC) - Nov 8th 2024</div>
          </div>
        </Col>
        <Col xs={12} xl={6}>
          <div className={'flex flex-col'}>
            <Round3Icon />
            <div className={'text-[#fff] text-base mt-3'}>FCFS Round</div>
            <div className={'text-[#7C7C7C]'}>20:00 (UTC) - Nov 9th 2024</div>
          </div>
        </Col>
        <Col xs={12} xl={6}>
          <div className={'flex flex-col'}>
            <Round4Icon />
            <div className={'text-base mt-3 text-[#FF967F]'}>End Time</div>
            <div className={'text-[#7C7C7C]'}>20:00 (UTC) - Nov 10th 2024</div>
          </div>
        </Col>
      </Row>
    </Card>
  )
}
