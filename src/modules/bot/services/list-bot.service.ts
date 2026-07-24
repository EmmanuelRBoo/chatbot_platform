import { api } from "@/lib/axios";

import type { ListBotResponse, ListBotFiltersProps } from "../types/listBot";
import type { PaginationProps } from "@/shared/types/pagination";

export async function listBotService(filters: ListBotFiltersProps, meta: PaginationProps): Promise<ListBotResponse> {
  const { data } = await api.get("/bot/list", {
    params: {
      meta: JSON.stringify(meta),
      filters: JSON.stringify(filters),
    },
  });

  return data.result;
}
