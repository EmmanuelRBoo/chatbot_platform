import { Suspense } from "react";

import { ResetPasswordForm } from "../components";

export default function ResetPasswordScreen() {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <ResetPasswordForm />
    </Suspense>
  );
}
