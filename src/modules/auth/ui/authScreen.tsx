'use client'

import { RobotIcon } from '@phosphor-icons/react/ssr'

import { Button, Divider } from '@/shared/components'
import { SignInForm, SignUpForm, ForgotPasswordForm } from '../components'
import { useAuthStore } from '../stores/auth'

export default function AuthScreen() {
    const { page, setPage } = useAuthStore()

    const renderPage = () => {
        switch(page) {
            case 'SIGNIN': return <SignInForm />
            case 'SIGNUP': return <SignUpForm />
            case 'FORGOT': return <ForgotPasswordForm />
            default: return <SignInForm />
        }
    }

    return (
        <section className='w-1/2 p-16 pb-0'>
            <header className='flex items-center gap-4 mb-10'>
                <RobotIcon
                    size={50}
                    className='bg-primary-500 rounded-sm ring-secondary-300 p-2'
                />

                 <h1 className='text-3xl font-semibold'>BotCraft</h1>
            </header>
           
            {renderPage()}   

            {
                page != 'FORGOT' && (
                    <footer className='flex flex-col gap-8 mt-8'>
                        <Divider>OR CONTINUE WITH</Divider>
                    
                        <Button
                            variant='secondary'
                        >
                            <img width={34} src="/assets/google.png" alt="google logo" />
                                        
                            <p>Continue with Google</p>
                        </Button>
                    
                        <p 
                            onClick={() => setPage(page == 'SIGNUP' ? 'SIGNIN' : 'SIGNUP')}
                            className='text-center text-xl text-primary-100 cursor-pointer hover:underline'
                        >
                            {
                                page == 'SIGNIN'
                                    ? <>Don't have an account? <b>Create as Account</b></>
                                    : <>Already have an account? <b>Sign In here</b></>
                            }
                        </p>
                    </footer>
                )
            }
        </section>
    )
}