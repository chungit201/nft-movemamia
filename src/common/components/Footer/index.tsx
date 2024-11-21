import React from 'react'
import Link from 'next/link'

export const Footer: React.FunctionComponent = () => {
  return (
    <div className="container max-w-[1280px] h-full pt-20 mx-auto pb-20 px-3">
      <div className={'w-full h-[2px] bg-[#fff]'}></div>
      <div className={'flex uppercase justify-between mt-3'}>
        <div>movemania@2024</div>
        <Link className={'uppercase'} href={''}>
          privacy policy
        </Link>
      </div>
    </div>
  )
}
