import { Button, Row } from 'antd'

import { CardMintTime } from '@/common/components/views/home/CardMintTime'
import { InoInfo } from '@/common/components/views/home/InoInfo'
import { InoTimeline } from '@/common/components/views/home/InoTimeline'
import { CollectionDetails } from '@/common/components/views/home/CollectionDetails'

export default function Home() {
  return (
    <div className="container max-w-[1280px] h-full pt-20 mx-auto pb-20">
      <div className={'flex justify-end gap-2 pb-3'}>
        <Button className={'bg-transparent border-[#7C7C7C] w-[28px] p-0 h-[28px] text-[#fff] rounded-full'}>X</Button>
        <Button className={'bg-transparent border-[#7C7C7C]  w-[40px] p-0 h-[28px] text-[#fff] rounded-full'}>
          TL
        </Button>
      </div>
      <div>
        <div className={'w-full h-[2px] bg-[#fff]'}></div>
        <div className={'pt-20 py-20 banner-ido border-b'}>
          <Row gutter={[36, 36]} className={''}>
            <InoInfo />
            <CardMintTime />
          </Row>
          <InoTimeline />
          <div className={'mt-20 text-[96px] tracking-[4.8px]'}>STELLARPANTHERA.XYZ</div>
        </div>
        <CollectionDetails />
      </div>
    </div>
  )
}
