import { TrendUpIcon } from "@phosphor-icons/react/ssr";

export function ListBotAnalytics() {
  return (
    <div className="grid grid-cols-4 gap-24">
      <div className="h-36 border flex flex-col justify-between p-8 rounded-xl bg-gscale-400">
        <p className="font-bold text-lg">TOTAL BOTS</p>

        <div className="flex items-end-safe">
          <span className="text-4xl font-semibold mr-2">24</span>
          <p className="text-secondary-300">+3 this month</p>
        </div>
      </div>

      <div className="h-36 border flex flex-col justify-between p-8 rounded-xl bg-gscale-400">
        <p className="font-bold text-lg">ACTIVE RUN-TIME</p>

        <div className="flex items-end-safe">
          <span className="text-4xl font-semibold mr-2">1,280h</span>
          <p className="text-secondary-300">99.9% Uptime</p>
        </div>
      </div>

      <div className="h-36 border flex flex-col justify-between p-8 rounded-xl bg-gscale-400">
        <p className="font-bold text-lg">SUCCESS RATE</p>

        <div className="flex items-end-safe">
          <span className="text-4xl font-semibold mr-2">94.2%</span>
          <TrendUpIcon className="text-secondary-300" size={36} />
        </div>
      </div>

      <div className="h-36 border flex flex-col justify-between p-8 rounded-xl bg-gscale-400">
        <p className="font-bold text-lg">AVG RESPONSE</p>

        <div className="flex items-end-safe">
          <span className="text-4xl font-semibold mr-2">340ms</span>
          <p className="text-red-300">+12ms</p>
        </div>
      </div>
    </div>
  );
}
