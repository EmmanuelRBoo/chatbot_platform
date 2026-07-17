import { api } from "@/lib/axios";

import type { ListBotResponse } from "../types/listBot";
import type { PaginationProps } from "@/shared/types/pagination";

export async function listBotService(meta: PaginationProps): Promise<ListBotResponse> {
  const { data } = await api.get("/bot/list", { params: { meta } });

  return data.result;
}
