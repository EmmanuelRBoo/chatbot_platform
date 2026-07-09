import { api } from "@/lib/axios";

import { SignUpProps, SignUpDto } from "../types/store";

export async function signUpService(payload: SignUpProps): Promise<SignUpDto> {
  const { data } = await api.post("/auth/sign-up", payload);

  return data.result;
}
