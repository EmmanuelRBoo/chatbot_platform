"use client";

import { useEffect, useRef, useState } from "react";
import * as mrmd from "mermaid";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import type { MermaidProps } from "./types";

mrmd.default.initialize({
  startOnLoad: false,
  themeVariables: {
    // Nós
    primaryColor: "transparent",
    secondaryColor: "transparent",
    tertiaryColor: "transparent",

    primaryBorderColor: "#666",
    secondaryBorderColor: "#666",
    tertiaryBorderColor: "#666",

    primaryTextColor: "#fff",

    // Subgraphs
    clusterBkg: "transparent",
    clusterBorder: "#666",

    // Linhas
    lineColor: "#666",

    // Fundo das labels das arestas
    edgeLabelBackground: "transparent",

    // Fundo geral do SVG
    background: "transparent",
  },
});

export function Mermaid(props: MermaidProps) {
  const [hold, setHold] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const render = async () => {
    if (!ref.current) return;

    const id = `mermaid-${crypto.randomUUID()}`;

    try {
      await mrmd.default.parse(props.chart);

      const { svg } = await mrmd.default.render(id, props.chart);
      ref.current.innerHTML = svg;
    } catch (err) {
      ref.current.innerHTML = "";
    }
  };

  useEffect(() => {
    render();
  }, [props.chart]);

  return (
    <TransformWrapper
      initialScale={5}
      minScale={0.2}
      maxScale={10}
      centerOnInit
      wheel={{ step: 0.005 }}
      doubleClick={{ disabled: true }}
      centerZoomedOut={false}
      limitToBounds={false}
    >
      <TransformComponent
        wrapperClass="w-full h-full"
        contentClass="p-10"
        wrapperStyle={{
          width: "100%",
          height: "100%",
        }}
      >
        <div
          onMouseDown={() => setHold(true)}
          onMouseUp={() => setHold(false)}
          className={`w-full h-full ${hold ? "cursor-grabbing" : "cursor-grab"}`}
          ref={ref}
        />
      </TransformComponent>
    </TransformWrapper>
  );
}
