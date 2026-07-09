import { api } from "@/lib/axios";

import { SignInProps, SignInDto } from "../types/store";

export async function signInService(payload: SignInProps): Promise<SignInDto> {
  const { data } = await api.post("/auth/sign-in", payload);

  return data.result;
}
