"use client";

import { useCreateBot } from "../hooks/useCreateBot";

export function PromptStage() {
  const { prompt, setPrompt } = useCreateBot();

  return (
    <section className="text-primary-100 flex w-full h-full flex-col gap-8 items-center justify-center px-80">
      <h2 className="text-5xl">Agent Definition</h2>
      <h3 className="text-xl">
        Describe your bot's behavior and goals. Our AI will transform your text into a structured
        logical flow.
      </h3>

      <div className="p-8 border border-gscale-200 w-full h-full rounded-2xl shadow-[0_0_30px_var(--color-gscale-400)]">
        <h4 className="mb-4">INSTRUCTION PROMPT</h4>

        <textarea
          className="w-full resize-none pl-2 text-xl"
          placeholder="Ex: Create  technical support bot thar first validades the customer ID. If it's a hardware issue, direct it to a physical ticket opening. If it's software, try to solve it via the self-service knowlegde base..."
          rows={12}
          value={prompt}
          onChange={({ target }) => setPrompt(target.value)}
        />
      </div>
    </section>
  );
}
