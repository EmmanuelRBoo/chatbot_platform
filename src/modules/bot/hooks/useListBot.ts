import type { ListBotStatusProps } from "../types/listBot";

import { useListBotStore } from "../stores/listBot";
import { listBotService } from "../services";

export function useListBot() {
  const { bots, setBots, loading, setLoading, listMeta, setListMeta } = useListBotStore();

  const fetchChangeStatus = (id: string, status: ListBotStatusProps) => {
    const newBots = bots.map((bot) => {
      if (bot.id === id) {
        return {
          ...bot,
          status,
        };
      }

      return bot;
    });

    setBots(newBots);
  };

  const fetchListBots = async () => {
    setLoading(true);

    const response = await listBotService(listMeta);

    setBots(response.data);
    setListMeta(response.meta);

    setLoading(false);
  };

  return {
    bots,

    loading,

    fetchChangeStatus,
    fetchListBots,
  };
}
