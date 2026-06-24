'use client'

import { LockIcon } from '@phosphor-icons/react'

import { Input } from '@/shared/components'
import { usePasswordStrength } from '../hooks/usePasswordStrength'
import type { PasswordStrengthProps } from '../types/password.types'

export function PasswordStrength(props: PasswordStrengthProps) {
    const { validateStrength } = usePasswordStrength()

    console.log(validateStrength(props.password))

    return (
        <div>
            <Input.Password
                label='Password'
                name='password'
                placeholder={<><LockIcon size={28}/> <p>**********</p></>}
                onChange={() => {}}
                value=''
                showForgot
            />

            <div>
                <div className='flex justify-between gap-1 mt-1'>
                    <div className='h-1 w-full bg-red-500' />
                    <div className='h-1 w-full bg-amber-500' />
                    <div className='h-1 w-full bg-green-500' />
                </div>

                <div className='flex justify-between items-center'>
                    <p>Strength: ---</p>

                    <p>Min. 8 characters</p>
                </div>

                <small>Include numbers and symbols for better security.</small>
            </div>
        </div>
    )
}