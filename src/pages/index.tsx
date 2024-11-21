import { Button, Row } from 'antd'
import Marquee from 'react-fast-marquee'
import { CardMintTime } from '@/common/components/views/home/CardMintTime'
import { InoInfo } from '@/common/components/views/home/InoInfo'
import { InoTimeline } from '@/common/components/views/home/InoTimeline'
import { CollectionDetails } from '@/common/components/views/home/CollectionDetails'

export default function Home() {
  return (
    <div className="container max-w-[1280px] h-full pt-8 sm:pt-20 mx-auto pb-20 px-3 md:px-0">
      <div className={'flex justify-end gap-2 pb-3'}>
        <Button className={'bg-transparent border-[#7C7C7C] w-[28px] p-0 h-[28px] text-[#fff] rounded-full'}>X</Button>
        <Button className={'bg-transparent border-[#7C7C7C]  w-[40px] p-0 h-[28px] text-[#fff] rounded-full'}>
          TL
        </Button>
      </div>
      <div>
        <div className={'w-full h-[2px] relative bg-[#fff] '}>
          <div className={'absolute max-w-full md:max-w-[472px] bg-[#fff] right-0 px-2 top-[2px]'}>
            <Marquee className={' text-[#111110]'}>
              <p>Stellar Panthera NFTs Collection NFTs is an OG NFTs collection on Movement</p>
              <p>Stellar Panthera NFTs Collection NFTs is an OG NFTs collection on Movement</p>
              <p>Stellar Panthera NFTs Collection NFTs is an OG NFTs collection on Movement</p>
            </Marquee>
          </div>
        </div>
        <div className={'pt-10 sm:pt-20 py-20 banner-ido border-b'}>
          <Row gutter={[36, 36]} className={''}>
            <InoInfo />
            <CardMintTime />
          </Row>
          <InoTimeline />
          <div className={'mt-20 text-[18px] sm:text-[48px] md:text-[78px] lg:text-[96px] tracking-[4.8px]'}>
            STELLARPANTHERA.XYZ
          </div>
        </div>
        <CollectionDetails />
      </div>
    </div>
  )
}
