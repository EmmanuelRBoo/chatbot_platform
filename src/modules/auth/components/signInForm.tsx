'use client'

import { useState } from 'react'
import { EnvelopeIcon, LockIcon, ArrowRightIcon } from '@phosphor-icons/react'

import { Input, Button, Divider } from '@/shared/components'
import { useAuthStore } from '../stores/auth.store'

export function SignInForm() {
    const [v, s] = useState<string>('')
    const { setPage } = useAuthStore()

    return (
        <>
            <h2 className='text-5xl'>Welcome</h2>
            <h3 className='text-xl mt-4 mb-12'>Orchestrate your intelligence, seamlessly.</h3>

            <form className='flex flex-col gap-6'>
                <Input.Text
                    label='Work Email'
                    name='email'
                    type='email'
                    placeholder={<><EnvelopeIcon size={28}/> <p>name@company.com</p></>}
                    value={v}
                    onChange={s}
                />

                <Input.Password
                    label='Password'
                    name='password'
                    placeholder={<><LockIcon size={28}/> <p>**********</p></>}
                    onChange={() => {}}
                    value=''
                    showForgot
                />

                <Button
                    shadow
                >
                    <p>Sign In</p>
                    <ArrowRightIcon weight='bold' size={28}/>
                </Button>
            </form>
        </>
    )
}