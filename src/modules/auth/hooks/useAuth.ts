import { useRouter } from 'next/navigation'

import { useUserStore } from '@/shared/stores/user'

import { useAuthStore } from '../stores/auth'
import type { SignInProps, SignUpProps } from '../types/store'

export function useAuth() {
    const { signIn, setSignIn, signUp, setSignUp, loading, setLoading, recoverEmail, setRecoverEmail } = useAuthStore()
    const { setUser } = useUserStore()

    const router = useRouter()

    const handleSignIn = (payload: SignInProps) => setSignIn(payload)
    
    const handleSignUp = (payload: SignUpProps) => setSignUp(payload)

    const handleRecoverEmail = (payload: string) => setRecoverEmail(payload)

    const fetchSignIn = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()

        setLoading(true)

        try {
           //
            await new Promise(resolve => setTimeout(resolve, 3000))

            setUser({
                id: 'asd',
                email: 'aeqwe',
                username: 'asdsd'
            })

            router.push('/dashboard')
        } catch(err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    const fetchSignUp = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()

        setLoading(true)

        try {
           //
            await new Promise(resolve => setTimeout(resolve, 3000))

            setUser({
                id: 'asd',
                email: 'aeqwe',
                username: 'asdsd'
            })

            router.push('/dashboard')
        } catch(err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    const fetchRecoverPassword = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()

        setLoading(true)

        try {
           //
            await new Promise(resolve => setTimeout(resolve, 3000))
            
           console.log(recoverEmail)
        } catch(err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    return {
        handleSignIn,
        signIn,

        handleSignUp,
        signUp,

        handleRecoverEmail,
        recoverEmail,

        loading,

        fetchSignIn,
        fetchSignUp,
        fetchRecoverPassword,
    }
}