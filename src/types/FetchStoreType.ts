export interface FetchItem {
    id: number
    title: string
    price: string
    category: string
    description: string
    image: string
}

export interface FetchStore {
    data: FetchItem[]
    isLoading: boolean
    error: boolean
    errorMsg: string
    getData: () => void
}