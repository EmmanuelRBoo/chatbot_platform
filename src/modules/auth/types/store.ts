export type AuthPage = "SIGNIN" | "SIGNUP" | "FORGOT";

export type AuthProps = {
  name: string;
  email: string;
  password: string;
};

export type SignInProps = Partial<Omit<AuthProps, "name">>;

export type SignUpProps = Partial<AuthProps>;

export type AuthStoreProps = {
  page: AuthPage;
  setPage: (page: AuthPage) => void;

  loading: boolean;
  setLoading: (load: boolean) => void;

  signIn: SignInProps;
  setSignIn: (signIn: SignInProps) => void;

  signUp: SignUpProps;
  setSignUp: (signUp: SignUpProps) => void;

  recoverEmail: string;
  setRecoverEmail: (email: string) => void;
};

export type SignInDto = {
  name: string;
  email: string;
  token: string;
};

export type SignUpDto = SignInDto;
