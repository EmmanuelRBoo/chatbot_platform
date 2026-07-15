export type ListBotStatusProps = "draft" | "live" | "stopped";

export type ListBotProps = {
  id: string;
  botName: string;
  createdAt: string;
  status: ListBotStatusProps;
  actions: string;
};

export type ListBotStoreProps = {
  loading: boolean;
  setLoading: (load: boolean) => void;

  bots: ListBotProps[];
  setBots: (bots: ListBotProps[]) => void;
};

export type ListBotActionProps = {
  id: string;
  status: ListBotStatusProps;
};
