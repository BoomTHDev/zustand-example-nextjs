// Step 1 Create a store
import { create } from 'zustand'
import { StringStore } from '@/types/StringStoreType'

const useStore = create<StringStore>((set) => ({
  fname: 'boomth',
  lname: 'dev',
  setName: (newValue) => set({ fname: newValue })
}))

export default useStore