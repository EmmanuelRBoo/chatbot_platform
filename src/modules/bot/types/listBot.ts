import type { PaginationProps } from "@/shared/types/pagination";

export type ListBotStatusProps = "draft" | "live" | "stopped";

export type ListBotProps = {
  id: string;
  botName: string;
  createdAt: string;
  status: ListBotStatusProps;
  actions: string;
  updatedAt: string;
};

export type ListBotStoreProps = {
  loading: boolean;
  setLoading: (load: boolean) => void;

  bots: ListBotProps[];
  setBots: (bots: ListBotProps[]) => void;

  listMeta: PaginationProps;
  setListMeta: (meta: Partial<PaginationProps>) => void;
};

export type ListBotActionProps = {
  id: string;
  status: ListBotStatusProps;
};

export type ListBotResponse = {
  data: ListBotProps[];
  meta: PaginationProps;
};

export type UpdateStatusResponse = {
  updatedAt: string;
};
