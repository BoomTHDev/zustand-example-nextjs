import { NumberStore } from '@/types/NumberStoreType'
import { create } from 'zustand'

const useStore = create<NumberStore>((set) => ({
    value: 0,
    incNum: () => set((state) => ({ value: state.value + 1 })),
    decNum: () => set((state) => ({ value: state.value - 1 }))
}))

export default useStore