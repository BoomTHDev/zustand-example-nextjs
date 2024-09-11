'use client'

import useStore from '@/store/fetch-store'
import React, { useEffect } from 'react'
import { Button } from '../ui/button'

type Props = {}

export default function Session5({ }: Props) {

    const { data, isLoading, error, errorMsg, getData } = useStore((state) => ({
        data: state.data,
        isLoading: state.isLoading,
        error: state.error,
        errorMsg: state.errorMsg,
        getData: state.getData
    }))

    function fetchData() {
        getData()
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='flex flex-col gap-4 px-2'>
            <h1>Session4</h1>
            <div>
                {isLoading ? <h1>Loading...</h1> : error ? <p>{errorMsg}</p> : (
                    data.map((item, index) => (
                        <li key={index}>{item.title}</li>
                    ))
                )}
                
            </div>
        </div>
    )
}