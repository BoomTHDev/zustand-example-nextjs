import { ArrayStore } from '@/types/ArrayStoreType'
import { create } from 'zustand'

const useStore = create<ArrayStore>((set) => ({
    arr1: ['work1', 'work2'],
    addArr1: (newValue) => set((state) => ({
        arr1: [...state.arr1, newValue] // ['work1', 'work2', newValue]
    })),
    delArr1: (idx) => set((state) => ({
        arr1: state.arr1.filter((item, index) => index !== idx)
    }))
}))

export default useStore