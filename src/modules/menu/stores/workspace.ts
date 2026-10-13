import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { WorkspaceStore } from "../types/workspace";

export const useWorkspaceStore = create<WorkspaceStore>()(
  persist(
    (set) => ({
      workspaces: [],
      setWorkspaces: (workspaces) => set({ workspaces }),

      selectedWorkspace: null,
      setSelectedWorkspace: (selectedWorkspace) => set({ selectedWorkspace }),

      openMenu: false,
      setOpenMenu: (openMenu) => set({ openMenu }),
    }),
    {
      name: "workspace-storage",
    },
  ),
);
