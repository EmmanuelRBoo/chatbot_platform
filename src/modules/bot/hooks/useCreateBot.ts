import { useCreateBotStore } from "../stores/createBot";

export function useCreateBot() {
  const { stage, setStage, loading, setLoading } = useCreateBotStore();

  const nextStage = () => stage < 3 && setStage(stage + 1);

  const prevStage = () => stage > 1 && setStage(stage - 1);

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
  };
}
