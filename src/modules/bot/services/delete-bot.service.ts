import { api } from "@/lib/axios";

import type { DeleteBotResponse } from "../types/listBot";

export async function deleteBotService(botId: string): Promise<DeleteBotResponse> {
  const { data } = await api.delete(`/bot/${botId}`);

  return data.result;
}
