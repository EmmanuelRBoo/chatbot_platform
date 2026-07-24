import { toast } from "react-toastify";

import { errorMessages } from "../constants";
import type { ErrorMessages } from "../types/error";

function notify() {}

function notifyError(err: any) {
  const error = err as ErrorMessages;

  toast.error(errorMessages[error] || "A unexpected error ocurred", {
    theme: "dark",
  });
}

export default {
  notifyError,
};
