export type User = {
  name: string;
  email: string;
};

export type UserStoreProps = {
  user: User | null;
  setUser: (user: User | null) => void;
};
