import moment from 'moment'
import React, { useEffect, useState } from 'react'

export interface Time {
  days: string
  hours: string
  minutes: string
  seconds: string
}

interface CountdownProps {
  endAt: any
  onMomentChange: () => void
  width?: number
  height?: number
}

const default_time: Time = {
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
}

const CountdownIno: React.FunctionComponent<CountdownProps> = (props) => {
  const { endAt: end_at, onMomentChange, width, height } = props
  const [time_left, setTimeLeft] = useState<Time>(default_time)

  const calculateTimeLeft = (): Time => {
    const now = moment.utc().valueOf()
    const count_down_end_at = new Date(end_at * 1000).getTime()
    const distance = count_down_end_at - now
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    let time_left = default_time
    if (distance > 0) {
      time_left = {
        days: formatTimeLessThanTen(days),
        hours: formatTimeLessThanTen(hours),
        minutes: formatTimeLessThanTen(minutes),
        seconds: formatTimeLessThanTen(seconds),
      }
    } else {
      onMomentChange()

      time_left = {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
      }
    }

    return time_left
  }

  const formatTimeLessThanTen = (time: number): string => (time >= 10 ? time.toString() : `0${time}`)

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <div className={'flex items-center justify-between text-white gap-2'}>
      <div>
        <div
          className={'BoxCountDown  rounded-[16px] flex items-center justify-center'}
          style={{ width: width ?? 70, height: height ?? 70 }}
        >
          <div className={'text-center'}>
            <div className={'font-bold text-3xl text-[#fff] dark:text-white'}>{time_left.days}</div>
            <div className={'text-[#7C7C7C] dark:text-[#8E929B] text-xs mt-1'}>DAYS</div>
          </div>
        </div>
      </div>
      <span className={'font-semibold dark:text-[#8E929B]'}>:</span>
      <div>
        <div
          className={'BoxCountDown  rounded-[16px] flex items-center justify-center'}
          style={{ width: width ?? 70, height: height ?? 70 }}
        >
          <div className={'text-center'}>
            <div className={'font-bold text-3xl text-[#fff] dark:text-white'}>{time_left.hours}</div>
            <div className={'text-[#7C7C7C] dark:text-[#8E929B] text-xs mt-1'}>HRS</div>
          </div>
        </div>
      </div>
      <span className={'font-semibold dark:text-[#8E929B]'}>:</span>
      <div>
        <div
          className={'BoxCountDown rounded-[16px] flex items-center justify-center'}
          style={{ width: width ?? 70, height: height ?? 70 }}
        >
          <div className={'text-center'}>
            <div className={'font-bold text-3xl text-[#fff] dark:text-white'}>{time_left.minutes}</div>
            <div className={'text-[#7C7C7C] dark:text-[#8E929B] text-xs mt-1'}>MIN </div>
          </div>
        </div>
      </div>
      <span className={'font-semibold dark:text-[#8E929B]'}>:</span>
      <div>
        <div
          className={'BoxCountDown  rounded-[16px] flex items-center justify-center'}
          style={{ width: width ?? 70, height: height ?? 70 }}
        >
          <div className={'text-center'}>
            <div className={'font-bold text-3xl text-[#fff] dark:text-white'}>{time_left.seconds}</div>
            <div className={'text-[#7C7C7C] dark:text-[#8E929B] text-xs mt-1'}>SEC</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CountdownIno
