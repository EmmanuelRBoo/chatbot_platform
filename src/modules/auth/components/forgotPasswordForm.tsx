'use client'

import { ArrowRightIcon, ArrowLeftIcon, EnvelopeIcon } from '@phosphor-icons/react'

import { Input, Button } from '@/shared/components'
import { useAuthStore } from '../stores/auth'
import { useAuth } from '../hooks/useAuth'

export function ForgotPasswordForm() {
  const { fetchRecoverPassword, handleRecoverEmail, recoverEmail, loading } = useAuth()
  const { setPage } = useAuthStore()

  return (
    <div className='px-24 mt-50'>
      <h2 className='text-5xl'>Reset your password</h2>
      <h3 className='text-xl mt-4 mb-12'>Enter the work email address associated with your account and we'll send you a link to reset your password.</h3>

      <form onSubmit={fetchRecoverPassword} className='flex flex-col gap-6'>
        <Input.Text
          label='Work Email'
          name='email'
          onChange={handleRecoverEmail}
          placeholder={<><EnvelopeIcon size={28} /> <p>name@company.com</p></>}
          value={recoverEmail}
        />

        <Button
          type='submit'
          loading={loading}
          shadow
        >
          <p>Send Reset Link</p>
          <ArrowRightIcon weight='bold' size={28} />
        </Button>
      </form>

      <div
        onClick={() => setPage('SIGNIN')}
        className='flex items-center justify-center mt-14 cursor-pointer gap-4 text-primary-100 hover:scale-110 duration-75'
      >
        <ArrowLeftIcon weight='bold' size={28} />
        <p className='text-xl'>Back to Sign In</p>
      </div>

    </div>
  )
}