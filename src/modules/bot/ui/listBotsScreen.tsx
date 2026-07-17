import { ListBotHeader, ListBotAnalytics, ListBotTable } from "../components";

export default function ListBotsScreen() {
  return (
    <main className="flex flex-col flex-1 p-8 gap-10">
      <ListBotHeader />

      <ListBotAnalytics />

      <ListBotTable />
    </main>
  );
}
