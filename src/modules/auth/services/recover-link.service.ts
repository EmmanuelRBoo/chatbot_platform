import { api } from "@/lib/axios";

export async function recoverLinkService(email: string) {
  await api.post(`/auth/recover-link/${email}`);
}
