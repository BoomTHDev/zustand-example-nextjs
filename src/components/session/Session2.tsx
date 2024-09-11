'use client'

import useStore from '@/store/number-store'
import React from 'react'
import { Button } from '../ui/button'

type Props = {}

export default function Session2({}: Props) {
  
  const { value, incNum, decNum } = useStore((state) => ({
    value: state.value,
    incNum: state.incNum,
    decNum: state.decNum
  }))

  function handleIncNum() {
    incNum()
  }

  function handleDecNum() {
    decNum()
  }

  return (
    <div className='flex flex-col gap-4 px-2'>
      <h1>Session2</h1>
      <p>Value: {value}</p>
      <Button onClick={handleIncNum}>Add Number</Button>
      <Button variant={'outline'} onClick={handleDecNum}>Del Num</Button>
    </div>
  )
}