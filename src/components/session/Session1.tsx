'use client'

import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import useStore from '@/store/string-store'

type Props = {}

export default function Session1({}: Props) {

  const [text, setText] = useState<string>('')

  // Step 2 Use the store
  const fname = useStore((state) => state.fname)
  const lname = useStore((state) => state.lname)
  const setName = useStore((state) => state.setName)

  function handleSetName() {
    setName(text)
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value)
  }

  return (
    <div className='flex flex-col gap-4 px-2'>
      <h1>Session1</h1>
      <p>Hello {fname} {lname}</p>
      <Input onChange={handleChange} className='border border-black' type='text' />
      <Button onClick={handleSetName}>Set Name</Button>
    </div>
  )
}