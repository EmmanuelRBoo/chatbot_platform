import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import type { AuthStoreProps } from '../types/store.types'

export const useAuthStore = create<AuthStoreProps>()(
    persist(
        (set) => ({
            page: 'SIGNIN',
            setPage: (page) => set({ page })
        }),
        { name: 'auth-storage'}
    )
)