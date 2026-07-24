"use client";

import { EnvelopeIcon, LockIcon, ArrowRightIcon } from "@phosphor-icons/react";

import { Input, Button } from "@/shared/components";

import { useAuthStore } from "../stores/auth";
import { useAuth } from "../hooks/useAuth";

export function SignInForm() {
  const { setPage } = useAuthStore();
  const { handleSignIn, signIn, loading, fetchSignIn } = useAuth();

  return (
    <>
      <h2 className="text-5xl">Welcome</h2>
      <h3 className="text-xl mt-4 mb-12">Orchestrate your intelligence, seamlessly.</h3>

      <form onSubmit={fetchSignIn} className="flex flex-col gap-6">
        <Input.Text
          label="Work Email"
          name="email"
          type="email"
          placeholder={
            <>
              <EnvelopeIcon size={28} /> <p>name@company.com</p>
            </>
          }
          value={signIn.email}
          onChange={(email) => handleSignIn({ email })}
          full
        />

        <Input.Password
          label="Password"
          name="password"
          placeholder={
            <>
              <LockIcon size={28} /> <p>**********</p>
            </>
          }
          value={signIn.password}
          onChange={(password) => handleSignIn({ password })}
          showForgot={() => setPage("FORGOT")}
        />

        <Button type="submit" loading={loading} shadow>
          <p>Sign In</p>
          <ArrowRightIcon weight="bold" size={28} />
        </Button>
      </form>
    </>
  );
}
