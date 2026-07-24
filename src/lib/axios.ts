import axios from "axios";
import { getCookie } from "cookies-next";

import { notify } from "@/shared/utils";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      const res = error.response?.data.message;

      notify.notifyError(res);

      return;
    }

    return;
  },
);

api.interceptors.request.use(async (config) => {
  const token = await getCookie("token");

  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});
