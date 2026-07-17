import { api } from "@/lib/axios";

import type { CreateBotDto } from "../types/createBot";

export async function createBotService(payload: CreateBotDto) {
  const { data } = await api.post("/bot", payload);

  return data.result;
}
