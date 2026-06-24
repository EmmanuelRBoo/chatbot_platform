'use client'

import { useState } from 'react'
import Link from 'next/link'
import { EyeIcon, EyeClosedIcon } from '@phosphor-icons/react'

import type { PasswordProps } from './types'

export default function Password(props: PasswordProps) {
    const [show, setShow] = useState<boolean>(false)
    
    return (
        <label 
            htmlFor={props.name}
            className='w-full text-xl font-semibold'
        >
            <p className='flex'>
                {props.label}

                {
                    props.showForgot && (
                        <Link 
                            href='/forgot-password' 
                            className='text-primary-200 ml-auto cursor-pointer hover:underline'
                        >
                            Forgot Password?
                        </Link>
                    )
                }
            </p>
            <div className='relative mt-2'>
                <input
                    id={props.name}
                    name={props.name}
                    type={show ? 'text' : 'password'}
                    className='w-full rounded-sm bg-gscale-400 py-4 px-8 focus:ring focus:ring-primary-200'
                    value={props.value}
                    onChange={({ target }) => props.onChange(target.value)}
                />

                {
                    props.value == '' 
                    ? (
                        <div className='absolute flex items-center gap-4 cursor-text -translate-y-1/2 top-1/2 left-8 opacity-40'>
                            {props.placeholder}
                        </div>
                    )
                    : null
                }

                <div 
                    className='absolute -translate-y-1/2 top-1/2 right-8 cursor-pointer'
                    onClick={() => setShow(s => !s)}
                >
                    {show ? <EyeClosedIcon size={24} /> : <EyeIcon size={24} />}
                </div>
            </div>
        </label>
    )
}