"use client";

import { Editor as E, Monaco } from "@monaco-editor/react";

import type { EditorProps } from "./types";

function handleEditorWillMount(monaco: Monaco) {
  monaco.editor.defineTheme("custom", {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "687391", fontStyle: "italic" }, // gscale-200
      { token: "string", foreground: "89CEFF" }, // secondary-100
      { token: "number", foreground: "A078FF" }, // tertiary-300
      { token: "keyword", foreground: "6760FD", fontStyle: "bold" }, // primary-400
      { token: "type", foreground: "8B5CF6" }, // tertiary-500
      { token: "function", foreground: "34B5FA" }, // secondary-200
      { token: "delimiter", foreground: "DAE2FD" }, // gscale-100
    ],
    colors: {
      // Fundo
      "editor.background": "#131B2E", // gscale-500
      "editor.foreground": "#DAE2FD", // gscale-100

      // Cursor
      "editorCursor.foreground": "#4F46E5",

      // Seleção
      "editor.selectionBackground": "#4F46E555",
      "editor.inactiveSelectionBackground": "#4F46E522",

      // Linha atual
      "editor.lineHighlightBackground": "#283044",

      // Números das linhas
      "editorLineNumber.foreground": "#687391",
      "editorLineNumber.activeForeground": "#DAE2FD",

      // Gutter
      "editorGutter.background": "#131B2E",

      // Espaços em branco
      "editorWhitespace.foreground": "#3E4962",

      // Guias de indentação
      "editorIndentGuide.background": "#283044",
      "editorIndentGuide.activeBackground": "#4D44E3",

      // Borda
      "editorWidget.border": "#3E4962",

      // Scrollbar
      "scrollbarSlider.background": "#3E496266",
      "scrollbarSlider.hoverBackground": "#6760FD88",
      "scrollbarSlider.activeBackground": "#4F46E5",

      // Sugestões
      "editorSuggestWidget.background": "#0F172A",
      "editorSuggestWidget.border": "#3E4962",
      "editorSuggestWidget.selectedBackground": "#283044",

      // Hover
      "editorHoverWidget.background": "#0F172A",
      "editorHoverWidget.border": "#3E4962",

      // Barra de progresso
      "editorOverviewRuler.border": "#131B2E",
    },
  });
}

export function Editor(props: EditorProps) {
  return (
    <E
      beforeMount={handleEditorWillMount}
      height="100%"
      defaultLanguage="markdown"
      value={props.value}
      onChange={props.onChange}
      theme="custom"
      options={{
        fontFamily: "JetBrains Mono",
        fontSize: 14,
        lineHeight: 24,
        minimap: { enabled: false },
        smoothScrolling: true,
        automaticLayout: true,
        scrollBeyondLastLine: false,
        wordWrap: "on",
      }}
    />
  );
}
