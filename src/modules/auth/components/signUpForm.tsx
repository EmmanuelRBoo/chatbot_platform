"use client";

import { EnvelopeIcon, ArrowRightIcon, UserIcon } from "@phosphor-icons/react";

import { Input, Button } from "@/shared/components";
import { useAuth } from "../hooks/useAuth";

import { PasswordStrength } from "./passwordStrength";

export function SignUpForm() {
  const { handleSignUp, signUp, loading, fetchSignUp } = useAuth();

  return (
    <>
      <h2 className="text-5xl">Start creating</h2>
      <h3 className="text-xl mt-4 mb-8">Join the smart automation revolution.</h3>

      <form onSubmit={fetchSignUp} className="flex flex-col gap-6">
        <Input.Text
          label="Full Name"
          name="name"
          placeholder={
            <>
              <UserIcon size={28} /> <p>Ex: John Doe</p>
            </>
          }
          value={signUp.name}
          onChange={(name) => handleSignUp({ name })}
          full
        />

        <Input.Text
          label="Work Email"
          name="email"
          type="email"
          placeholder={
            <>
              <EnvelopeIcon size={28} /> <p>name@company.com</p>
            </>
          }
          value={signUp.email}
          onChange={(email) => handleSignUp({ email })}
          full
        />

        <PasswordStrength
          password={signUp.password}
          setPassword={(password) => handleSignUp({ password })}
        />

        <Button type="submit" shadow loading={loading}>
          <p>Create Free Account</p>
          <ArrowRightIcon weight="bold" size={28} />
        </Button>
      </form>
    </>
  );
}
