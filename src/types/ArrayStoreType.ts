export interface ArrayStore {
    arr1: string[]
    addArr1: (newValue: string) => void
    delArr1: (idx: number) => void
}