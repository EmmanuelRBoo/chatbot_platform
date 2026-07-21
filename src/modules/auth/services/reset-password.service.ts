import { api } from "@/lib/axios";

import { ResetPasswordDto } from "../types/store";

export async function resetPasswordService(payload: ResetPasswordDto) {
  await api.put("/auth/reset-password", payload);
}
