import { create } from "zustand";

import type { ListBotStoreProps } from "../types/listBot";

export const useListBotStore = create<ListBotStoreProps>((set) => ({
  bots: [
    {
      id: "BOT-12G23F-XASD",
      botName: "Bot test",
      createdAt: "27/02/2001",
      status: "draft",
      actions: "",
    },
    {
      id: "BOT-69ASF1-GYAS",
      botName: "Bot test 2",
      createdAt: "27/02/2001",
      status: "stopped",
      actions: "",
    },
    {
      id: "BOT-91GR12-LK3S",
      botName: "Bot test 3",
      createdAt: "27/02/2001",
      status: "live",
      actions: "",
    },
  ],
  setBots: (bots) => set({ bots }),

  loading: false,
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
