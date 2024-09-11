'use client'

import useStore from '@/store/array-store'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

type Props = {}

export default function Session3({ }: Props) {

    const [text, setText] = useState<string>('')

    const { arr1, addArr1, delArr1 } = useStore((state) => ({
        arr1: state.arr1,
        addArr1: state.addArr1,
        delArr1: state.delArr1
    }))

    function handleAddArr1() {
        addArr1(text)
        setText('')
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setText(event.target.value)
    }

    function handleDelArr1(idx: number) {
        delArr1(idx)
    }

    return (
        <div className='flex flex-col gap-4 px-2'>
            <h1>Session3</h1>
            <div>Array : {arr1.map((item, index) => (
                <li key={index}>{item} <Button onClick={() => handleDelArr1(index)} className='w-6 h-6'>Del</Button></li>
            ))}</div>
            <p>Length in Array : {arr1.length}</p>
            <Input value={text} onChange={handleChange} className='border border-black' type='text' />
            <Button onClick={handleAddArr1}>Add</Button>
        </div>
    )
}