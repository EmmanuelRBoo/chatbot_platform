import { create } from 'zustand'

import type { AuthStoreProps } from '../types/store'

export const useAuthStore = create<AuthStoreProps>((set) => ({
    page: 'SIGNIN',
    setPage: (page) => set({ page }),

    loading: false,
    setLoading: (loading) => set({ loading }),

    signIn: { email: '', password: '' },
    setSignIn: (signIn) => set((prev) => { return { signIn: { ...prev.signIn, ...signIn } } }),
            
    signUp: { email: '', password: '', username: '' },
    setSignUp: (signUp) => set((prev) => { return { signUp: { ...prev.setSignUp, ...signUp } } }),

    recoverEmail: '',
    setRecoverEmail: (recoverEmail) => set({ recoverEmail })
}))