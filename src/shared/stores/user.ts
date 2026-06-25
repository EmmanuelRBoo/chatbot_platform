import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import type { UserStoreProps } from '../types/user'

export const useUserStore = create<UserStoreProps>()(
    persist(
        (set) => ({
            user: null,
            setUser: (user) => set({ user })
        }),
        { name: 'user-storage'}
    )
)