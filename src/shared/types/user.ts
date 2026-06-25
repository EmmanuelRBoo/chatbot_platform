export type User = {
    id: string
    username: string
    email: string
}

export type UserStoreProps = {
    user: User | null
    setUser: (user: User | null) => void
}