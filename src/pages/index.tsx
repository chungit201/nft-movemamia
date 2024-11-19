import { Button, Col, Row } from 'antd'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container max-w-[1280px] h-full pt-20 mx-auto">
      <div className={'flex justify-end gap-2 pb-3'}>
        <Button className={'bg-transparent border-[#7C7C7C] w-[28px] p-0 h-[28px] text-[#fff] rounded-full'}>X</Button>
        <Button className={'bg-transparent border-[#7C7C7C]  w-[40px] p-0 h-[28px] text-[#fff] rounded-full'}>
          TL
        </Button>
      </div>
      <div>
        <div className={'w-full h-[2px] bg-[#fff]'}></div>
        <div>
          <Row className={''}>
            <Col span={16}>
              <div>
                <Image src={require('@/common/assets/images/NFTs Thumbnail.png')} alt={''} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}
