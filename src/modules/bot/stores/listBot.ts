import { create } from "zustand";

import type { ListBotStoreProps } from "../types/listBot";

export const useListBotStore = create<ListBotStoreProps>((set) => ({
  bots: [],
  setBots: (bots) => set({ bots }),

  loading: true,
  setLoading: (loading) => set({ loading }),

  listMeta: {
    limit: 5,
    page: 1,
  },
  setListMeta: (meta) =>
    set((old) => {
      return { listMeta: { ...old.listMeta, ...meta } };
    }),
}));
