export type CreateBotStoreProps = {
  stage: number;
  setStage: (stage: number) => void;

  loading: boolean;
  setLoading: (load: boolean) => void;
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
