export interface ObjectItem {
    id: number
    title: string
}

export interface ObjectSะore {
    arr2: ObjectItem[]
    addArr2: (newValue: string) => void
    delArr2: (id: number) => void
}