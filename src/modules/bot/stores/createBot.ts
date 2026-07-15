import { create } from "zustand";

import { botConfigDefault } from "./defaults/config";
import type { CreateBotStoreProps } from "../types/createBot";

export const useCreateBotStore = create<CreateBotStoreProps>((set) => ({
  stage: 1,
  setStage: (stage) => set({ stage }),

  loading: false,
  setLoading: (loading) => set({ loading }),

  prompt: "",
  setPrompt: (prompt) => set({ prompt }),

  mermaid: `
  flowchart TD

    Start([👋 Início])

    Welcome["Enviar mensagem de boas-vindas"]
    Menu{"Escolha uma opção"}

    Option1["📦 Consultar pedido"]
    Option2["💬 Falar com IA"]
    Option3["📄 Abrir chamado"]
    Option4["👨‍💼 Falar com atendente"]
    Option5["❓ FAQ"]

    %% Pedido
    OrderNumber["Solicitar número do pedido"]
    ValidateOrder{"Pedido encontrado?"}
    OrderStatus["Exibir status"]
    OrderNotFound["Pedido não encontrado"]

    %% IA
    AIQuestion["Receber pergunta"]
    AIAnswer{"IA conseguiu responder?"}
    AIResponse["Enviar resposta"]
    TransferAI["Transferir para atendente"]

    %% FAQ
    FAQCategory{"Categoria"}
    FAQPayment["Pagamentos"]
    FAQDelivery["Entrega"]
    FAQReturn["Trocas e devoluções"]
    FAQResolved{"Resolveu?"}

    %% Chamado
    TicketTitle["Título"]
    TicketDescription["Descrição"]
    TicketPriority{"Prioridade"}
    TicketCreated["Chamado criado"]

    %% Humano
    Queue["Fila de atendimento"]
    Agent["Atendente disponível?"]
    Human["Conectar atendente"]

    %% Final
    End([✅ Encerrar conversa])

    Start --> Welcome
    Welcome --> Menu

    Menu -->|Pedido| Option1
    Menu -->|IA| Option2
    Menu -->|Chamado| Option3
    Menu -->|Atendente| Option4
    Menu -->|FAQ| Option5

    %% Pedido
    Option1 --> OrderNumber
    OrderNumber --> ValidateOrder

    ValidateOrder -->|Sim| OrderStatus
    ValidateOrder -->|Não| OrderNotFound

    OrderStatus --> End
    OrderNotFound --> Menu

    %% IA
    Option2 --> AIQuestion
    AIQuestion --> AIAnswer

    AIAnswer -->|Sim| AIResponse
    AIAnswer -->|Não| TransferAI

    AIResponse --> End

    TransferAI --> Queue

    %% FAQ
    Option5 --> FAQCategory

    FAQCategory --> FAQPayment
    FAQCategory --> FAQDelivery
    FAQCategory --> FAQReturn

    FAQPayment --> FAQResolved
    FAQDelivery --> FAQResolved
    FAQReturn --> FAQResolved

    FAQResolved -->|Sim| End
    FAQResolved -->|Não| Queue

    %% Chamado
    Option3 --> TicketTitle
    TicketTitle --> TicketDescription
    TicketDescription --> TicketPriority
    TicketPriority --> TicketCreated
    TicketCreated --> End

    %% Atendente
    Option4 --> Queue

    Queue --> Agent

    Agent -->|Disponível| Human
    Agent -->|Indisponível| End

    Human --> End
          `,
  setMermaid: (mermaid) => set({ mermaid }),

  config: botConfigDefault,
  setConfig: (config) => set({ config }),
}));
