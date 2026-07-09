'use client'

import { LockIcon } from '@phosphor-icons/react'

import { Input } from '@/shared/components'
import { usePasswordStrength } from '../hooks/usePasswordStrength'
import type { PasswordStrengthProps } from '../types/password'

export function PasswordStrength(props: PasswordStrengthProps) {
  const { validateStrength, getPasswordStatus } = usePasswordStrength()

  const passStrength = validateStrength(props.password ?? '')

  return (
    <div>
      <Input.Password
        label='Password'
        name='password'
        placeholder={<><LockIcon size={28} /> <p>**********</p></>}
        onChange={props.setPassword}
        value={props.password}
      />

      <div>
        <div className='flex justify-between gap-1 mt-1'>
          <div className={`h-1 w-full rounded-s-full ${(passStrength >= 0 && passStrength > -1) ? 'bg-red-500' : ''}`} />
          <div className={`h-1 w-full ${passStrength >= 1 ? 'bg-amber-500' : ''}`} />
          <div className={`h-1 w-full rounded-e-full ${passStrength >= 2 ? 'bg-green-500' : ''}`} />
        </div>

        <div className='flex justify-between items-center'>
          <p>Strength: {getPasswordStatus(validateStrength(props.password ?? ''))}</p>

          <p>Min. 8 characters</p>
        </div>

        <small>Include numbers and symbols for better security.</small>
      </div>
    </div>
  )
}