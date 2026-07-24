import type { ListBotStatusProps } from "../types/listBot";
import { useListBotStore } from "../stores/listBot";
import { listBotService, updateStatusService } from "../services";

export function useListBot() {
  const {
    bots,
    setBots,
    loading,
    setLoading,
    listMeta,
    setListMeta,
    showFilters,
    setShowFilters,
    filter,
    setFilters,
    clearFilters,
  } = useListBotStore();

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

    const response = await listBotService(filter, listMeta);

    setBots(response.data);
    setListMeta(response.meta);

    setLoading(false);
  };

  const fetchFilters = async () => {
    setShowFilters(false);

    fetchListBots();
  };

  const fetchClearFilters = () => {
    clearFilters();
    setShowFilters(false);

    fetchListBots();
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

    showFilters,
    setShowFilters,

    filter,
    setFilters,

    fetchChangeStatus,
    fetchListBots,
    fetchFilters,
    fetchClearFilters,

    changePagination,
  };
}
