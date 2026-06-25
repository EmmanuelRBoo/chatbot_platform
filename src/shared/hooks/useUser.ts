'use client'

import { useRouter } from 'next/navigation'

import { useUserStore } from '../stores/user'

export function useUser() {
    const { setUser } = useUserStore()
    
    const router = useRouter()

    const signOut = () => {
        setUser(null)
        // clear cookies
        router.push('/')
    }
    
    return {
        signOut
    }
}