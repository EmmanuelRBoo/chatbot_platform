"use client";

import {
  PromptStage,
  DiagramStage,
  ConfigurationStage,
  CreateBotHeader,
  CreateBotFooter,
} from "../components";
import { useCreateBot } from "../hooks/useCreateBot";

export default function CreateBotScreen() {
  const { stage } = useCreateBot();

  const renderStage = () => {
    switch (stage) {
      case 1:
        return <PromptStage />;
      case 2:
        return <DiagramStage />;
      case 3:
        return <ConfigurationStage />;
    }
  };

  return (
    <main className="flex flex-col flex-1 gap-20">
      <CreateBotHeader />

      {renderStage()}

      <CreateBotFooter />
    </main>
  );
}
