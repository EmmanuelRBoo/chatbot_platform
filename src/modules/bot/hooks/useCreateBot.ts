import { useCreateBotStore } from "../stores/createBot";
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
  };
}
