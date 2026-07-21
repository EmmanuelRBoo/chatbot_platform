"use client";

import { useRouter } from "next/navigation";

import { useUserStore } from "@/shared/stores/user";
import {
  signInService,
  signUpService,
  resetPasswordService,
  recoverLinkService,
} from "../services";
import { useAuthStore } from "../stores/auth";
import { setCookie } from "cookies-next";
import type { SignInProps, SignUpProps } from "../types/store";

export function useAuth() {
  const {
    signIn,
    setSignIn,
    signUp,
    setSignUp,
    loading,
    setLoading,
    recoverEmail,
    setRecoverEmail,
    resetPassword,
    setResetPassword,
  } = useAuthStore();
  const { setUser } = useUserStore();

  const router = useRouter();

  const handleSignIn = async (payload: SignInProps) => setSignIn(payload);

  const handleSignUp = (payload: SignUpProps) => setSignUp(payload);

  const handleRecoverEmail = (payload: string) => setRecoverEmail(payload);

  const fetchSignIn = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);

    try {
      const res = await signInService(signIn);

      setCookie("token", res.token);

      await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ token: res.token }),
      });

      setUser(res);

      router.push("/dashboard");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchSignUp = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);

    try {
      const res = await signUpService(signUp);

      setCookie("token", res.token);

      await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ token: res.token }),
      });

      setUser(res);

      router.push("/dashboard");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchRecoverPassword = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);

    try {
      await recoverLinkService(recoverEmail);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchResetPassword = async (token: string) => {
    setLoading(true);

    try {
      await resetPasswordService({ token, password: resetPassword });

      router.push("/");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleSignIn,
    signIn,

    handleSignUp,
    signUp,

    resetPassword,
    setResetPassword,

    handleRecoverEmail,
    recoverEmail,

    loading,

    fetchSignIn,
    fetchSignUp,
    fetchRecoverPassword,
    fetchResetPassword,
  };
}
