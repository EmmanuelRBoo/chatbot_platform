import { Mermaid, Editor } from "@/shared/components";
import { useCreateBot } from "../hooks/useCreateBot";

export function DiagramStage() {
  const { mermaid, setMermaid } = useCreateBot();

  return (
    <section className="text-primary-100 flex w-full h-full min-h-0 gap-4 items-center justify-center px-8 min-w-0 overflow-hidden">
      <div className="h-full flex flex-col gap-2 flex-1 min-w-96 min-h-0">
        <textarea
          className=" resize-none p-1 pl-2 border rounded-lg"
          placeholder="Ex: Add an email validation step after the start..."
          rows={6}
        />

        <Editor value={mermaid} onChange={(v) => setMermaid(v || "")} />
      </div>

      <div className="w-full h-full bg-gscale-400 rounded-lg p-4 min-w-0">
        <Mermaid chart={mermaid} />
      </div>
    </section>
  );
}
