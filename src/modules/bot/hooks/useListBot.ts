import type { ListBotStatusProps } from "../types/listBot";
import { useListBotStore } from "../stores/listBot";
import { listBotService, updateStatusService } from "../services";

export function useListBot() {
  const { bots, setBots, loading, setLoading, listMeta, setListMeta } = useListBotStore();

  const fetchChangeStatus = async (id: string, status: ListBotStatusProps) => {
    try {
      const response = await updateStatusService(id, status);

      const newBots = bots.map((bot) => {
        if (bot.id === id) {
          return {
            ...bot,
            status,
            updatedAt: response.updatedAt,
          };
        }

        return bot;
      });

      setBots(newBots);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchListBots = async () => {
    setLoading(true);

    const response = await listBotService(listMeta);

    setBots(response.data);
    setListMeta(response.meta);

    setLoading(false);
  };

  const changePagination = (page: number) => {
    setListMeta({
      ...listMeta,
      page,
    });

    fetchListBots();
  };

  return {
    bots,
    listMeta,

    loading,

    fetchChangeStatus,
    fetchListBots,
    changePagination,
  };
}
