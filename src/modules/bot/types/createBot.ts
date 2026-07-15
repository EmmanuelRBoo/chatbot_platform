export type CreateBotStoreProps = {
  stage: number;
  setStage: (stage: number) => void;

  loading: boolean;
  setLoading: (load: boolean) => void;

  prompt: string;
  setPrompt: (prompt: string) => void;

  mermaid: string;
  setMermaid: (mermaid: string) => void;

  config: BotConfig;
  setConfig: (bot: BotConfig) => void;
};

export type BotConfig = {
  avatar: string;
  botName: string;
  description: string;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  typography: string;
  borderRoundness: number;
};

export type StageCardProps = {
  stage: number;
  name: string;
  selected: boolean;
};

export type CreateBotFooterProps = {
  title: React.ReactNode;
  action: () => void;
};
