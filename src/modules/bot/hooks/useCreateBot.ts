"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { useCreateBotStore } from "../stores/createBot";
import { createBotService } from "../services";
import type { BotConfig } from "../types/createBot";

export function useCreateBot() {
  const {
    stage,
    setStage,
    loading,
    setLoading,
    prompt,
    setPrompt,
    mermaid,
    setMermaid,
    config,
    setConfig,
  } = useCreateBotStore();

  const router = useRouter();

  const nextStage = () => stage < 3 && setStage(stage + 1);

  const prevStage = () => stage > 1 && setStage(stage - 1);

  const handleConfig = (value: Partial<BotConfig>) => setConfig({ ...config, ...value });

  const fetchPromptStage = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));

      nextStage();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchBot = async () => {
    try {
      await createBotService({
        ...config,
        prompt,
        mermaid,
        prompts: [],
        status: "live",
      });

      toast("Bot created successfully", { theme: "dark" });

      router.push("/my-bots");
    } catch (err) {
      console.log(err);
    }
  };

  return {
    stage,
    fetchPromptStage,
    prevStage,

    loading,

    prompt,
    setPrompt,

    mermaid,
    setMermaid,

    handleConfig,
    config,

    fetchBot,
  };
}
