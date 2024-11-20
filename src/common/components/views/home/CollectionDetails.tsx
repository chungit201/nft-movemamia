import React from 'react'
import { Button, Card, Col, Divider, Progress, Row } from 'antd'
import Image from 'next/image'

export const CollectionDetails: React.FunctionComponent = () => {
  return (
    <div className={''}>
      <h2 className={'text-xl text-[#fff] font-semibold my-10'}>Collection Details</h2>
      <Row gutter={[32, 32]}>
        <Col span={14}>
          <Divider className={'border-[#fff] mt-0 mb-8'} />
          <div className={'mt-2'}>
            <h3 className={'text-[#7C7C7C] text-lg'}>VIP Round</h3>
            <div className={'flex flex-col gap-2 mt-4'}>
              <div className={'flex justify-between'}>
                <div>Price</div>
                <div>10 MOVE</div>
              </div>
              <div className={'flex justify-between'}>
                <div>Start time</div>
                <div>20:00 (UTC) - Nov 7th 2024</div>
              </div>
              <div className={'flex justify-between'}>
                <div>End time</div>
                <div>20:00 (UTC) - Nov 7th 2024</div>
              </div>
              <div className={'flex justify-between'}>
                <div>Max, Min/ Wallet</div>
                <div>1 NFT</div>
              </div>
            </div>
          </div>
          <div className={'mt-12'}>
            <h3 className={'text-[#7C7C7C] text-lg'}>Whitelist FCFS Round</h3>
            <div className={'flex flex-col gap-2 mt-4'}>
              <div className={'flex justify-between'}>
                <div>Price</div>
                <div>10 MOVE</div>
              </div>
              <div className={'flex justify-between'}>
                <div>Start time</div>
                <div>20:00 (UTC) - Nov 7th 2024</div>
              </div>
              <div className={'flex justify-between'}>
                <div>End time</div>
                <div>20:00 (UTC) - Nov 7th 2024</div>
              </div>
              <div className={'flex justify-between'}>
                <div>Max, Min/ Wallet</div>
                <div>1 NFT</div>
              </div>
            </div>
          </div>
          <div className={'mt-12'}>
            <h3 className={'text-[#7C7C7C] text-lg'}>FCFS Round</h3>
            <div className={'flex flex-col gap-2 mt-4'}>
              <div className={'flex justify-between'}>
                <div>Price</div>
                <div>10 MOVE</div>
              </div>
              <div className={'flex justify-between'}>
                <div>Start time</div>
                <div>20:00 (UTC) - Nov 7th 2024</div>
              </div>
              <div className={'flex justify-between'}>
                <div>End time</div>
                <div>20:00 (UTC) - Nov 7th 2024</div>
              </div>
              <div className={'flex justify-between'}>
                <div>Max, Min/ Wallet</div>
                <div>1 NFT</div>
              </div>
            </div>
          </div>
          <div className={'mt-12'}>
            <h3 className={'text-[#7C7C7C] text-lg'}>Distribution </h3>
            <div className={'flex flex-col gap-2 mt-4'}>
              <div className={'flex justify-between'}>
                <div>Distribution Network</div>
                <div>Movement</div>
              </div>
              <div className={'flex justify-between'}>
                <div>Method</div>
                <div>Direct Distribution</div>
              </div>
            </div>
          </div>
        </Col>
        <Col span={10}>
          <div className={'pl-10'}>
            <Card bordered={false}>
              <div>
                <div className={'text-xl text-center text-[#F1CB22]'}>Stellar Panthera NFTs Collection</div>
                <Divider className={'border-[#fff]'} />
                <div className={'text-[#fff]'}>Progress</div>
                <div className={'flex items-center gap-2 mt-2'}>
                  <Progress
                    percent={60}
                    trailColor={'#484848'}
                    showInfo={false}
                    status="active"
                    strokeColor={{
                      '0%': '#F1CB22',
                      '100%': '#FD2D4F',
                    }}
                    strokeWidth={16}
                  />
                  <div className={'text-[#fff]'}>
                    <span className={'text-[#F1CB22]'}>800</span>/1000
                  </div>
                </div>
                <Divider className={'border-[#fff]'} />
                <Image className={'w-full h-auto '} src={require('@/common/assets/images/nft-img.png')} alt={''} />
                <Button
                  className={'mt-6 w-full bg-[#FFD52E] border-0 font-medium text-[#080708] h-[44px] rounded-[8px]'}
                >
                  Mint Now
                </Button>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  )
}
