import Session1 from '@/components/session/Session1'
import Session2 from '@/components/session/Session2'
import Session3 from '@/components/session/Session3'
import Session4 from '@/components/session/Session4'
import Session5 from '@/components/session/Session5'
import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {}

export default function Home({}: Props) {
  return (
    <div className='max-w-7xl mx-auto'>
      {/* <Session1 /> */}
      {/* <Session2 /> */}
      {/* <Session3 /> */}
      {/* <Session4 /> */}
      <Session5 />
    </div>
  )
}