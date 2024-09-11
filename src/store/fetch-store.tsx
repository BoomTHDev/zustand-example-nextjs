import { FetchStore } from '@/types/FetchStoreType'
import { create } from 'zustand'

const useStore = create<FetchStore>((set) => ({
    data: [],
    isLoading: true,
    error: false,
    errorMsg: '',
    getData: async () => {
        try {
            set({ isLoading: true, error: false })
            const response = await fetch('https://fakestoreapi.com/products', {
                method: 'GET',
            })
            const data = await response.json()
            set({ isLoading: false, data: data })
        } catch (error: any) {
            set({ error: true, errorMsg: error.message, isLoading: false })
        }
    }
}))

export default useStore