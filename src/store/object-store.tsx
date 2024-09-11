import { ObjectSะore } from '@/types/ObjectStoreType'
import { create } from 'zustand'

const useStore = create<ObjectSะore>((set) => ({
    arr2: [
        { id: 1, title: 'work1' },
        { id: 2, title: 'work2' }
    ],
    addArr2: (newValue) => set((state) => ({
        arr2: [...state.arr2, {
            id: Date.now(),
            title: newValue
        }]
    })),
    delArr2: (id) => set((state) => ({
        arr2: state.arr2.filter((item) => item.id !== id)
    }))
}))

export default useStore