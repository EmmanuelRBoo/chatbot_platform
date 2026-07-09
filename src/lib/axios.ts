import axio from "axios";
import { getCookie } from "cookies-next";

export const api = axio.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use(async (config) => {
  const token = await getCookie("token");

  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});
