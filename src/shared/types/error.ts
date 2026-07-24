export enum ErrorMessages {
  USER_NOT_FOUND = "USER_NOT_FOUND",
  INVALID_LOGIN = "INVALID_LOGIN",
}

export type ErrorMessagesProps = Record<ErrorMessages, string>;
