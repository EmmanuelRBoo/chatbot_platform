import { api } from "@/lib/axios";
import type { UpdateStatusResponse } from "../types/listBot";

export async function updateStatusService(
  botId: string,
  status: string,
): Promise<UpdateStatusResponse> {
  const { data } = await api.put(`bot/${botId}`, { status });

  return data.result;
}
