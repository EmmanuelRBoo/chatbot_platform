import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { WorkflowStore } from "../types/workflow";

export const useWorkflowStore = create<WorkflowStore>()(
  persist(
    (set) => ({
      workflows: [],
      setWorkflows: (workflows) => set({ workflows }),

      selectedWorkflow: null,
      setSelectedWorkflow: (selectedWorkflow) => set({ selectedWorkflow }),
    }),
    { name: "workflow-storage" },
  ),
);
