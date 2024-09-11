'use client'

import useStore from '@/store/object-store'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

type Props = {}

export default function Session4({ }: Props) {

    const [text, setText] = useState<string>('')

    const { arr2, addArr2, delArr2 } = useStore((state) => ({
        arr2: state.arr2,
        addArr2: state.addArr2,
        delArr2: state.delArr2
    }))

    function handleAddArr2() {
        addArr2(text)
        setText('')
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setText(event.target.value)
    }

    function handleDelArr2(id: number) {
        delArr2(id)
    }

    return (
        <div className='flex flex-col gap-4 px-2'>
            <h1>Session4</h1>
            <div>Array Object : {arr2.map((item, index) => (
                <div key={index}>
                    <p>ID : {item.id}</p>
                    <p>Title : {item.title}</p>
                    <Button onClick={() => handleDelArr2(item.id)} className='w-6 h-6'>Del</Button>
                </div>
            ))}
                <p>Length in Array Object : {arr2.length}</p>
                <Input value={text} onChange={handleChange} className='border border-black' type='text' />
                <Button onClick={handleAddArr2}>Add</Button>
            </div>
        </div>
    )
}