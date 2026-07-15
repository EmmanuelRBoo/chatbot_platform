import type { ListBotStatusProps } from "../types/listBot";

import { useListBotStore } from "../stores/listBot";

export function useListBot() {
  const { bots, setBots, loading, setLoading } = useListBotStore();

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

  return {
    bots,

    loading,

    fetchChangeStatus,
  };
}
