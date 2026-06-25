import { create } from 'zustand'

import type { CreateBotStoreProps } from '../types/createBot'

export const useCreateBotStore = create<CreateBotStoreProps>((set) => ({
   stage: 1,
   setStage: (stage) => set({ stage })
}))