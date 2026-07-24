import { toast, ToastOptions } from "react-toastify";

import { errorMessages } from "../constants";
import type { ErrorMessages } from "../types/error";

function custom(type: ToastOptions["type"], message: string) {
  toast(message, { type, theme: "dark" });
}

function notifyError(err: any) {
  const error = err as ErrorMessages;

  toast.error(errorMessages[error] || "A unexpected error ocurred", {
    theme: "dark",
  });
}

export default {
  notifyError,
  custom,
};
