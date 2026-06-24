export type AuthPage = 'SIGNIN' | 'SIGNUP'

export type AuthStoreProps = {
    page: AuthPage
    setPage: (page: AuthPage) => void
}