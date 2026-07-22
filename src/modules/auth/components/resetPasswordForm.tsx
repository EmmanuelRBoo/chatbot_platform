"use client";

import { useSearchParams } from "next/navigation";

import { Button } from "@/shared/components";
import { PasswordStrength } from "../components";
import { useAuth } from "../hooks/useAuth";

export function ResetPasswordForm() {
  const { resetPassword, setResetPassword, loading, fetchResetPassword } = useAuth();

  const params = useSearchParams();
  const token = params.get("token");

  if (!token) {
    return <h1>No email provided, close this tab.</h1>;
  }

  return (
    <form className="w-2/5 flex flex-col gap-8">
      <div>
        <h1 className="text-4xl">Hi!</h1>
        <p className="text-lg my-2">We have received a request to reset your account password.</p>
        <p className="text-lg">
          To continue, set a new password below. Choose a secure password that you haven't used
          before.
        </p>
      </div>

      <PasswordStrength setPassword={setResetPassword} password={resetPassword} />

      <Button onClick={() => fetchResetPassword(token)} loading={loading} shadow>
        <p>Recover Password</p>
      </Button>
    </form>
  );
}
