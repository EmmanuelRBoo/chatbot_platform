import { RobotIcon } from "@phosphor-icons/react/ssr";

export function HeaderMenu() {
  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-2">
        <img
          src="/assets/logo.png"
          alt="logo"
          className="w-12 h-12 bg-primary-500 rounded-sm ring-secondary-300"
        />

        <h1 className="text-3xl font-semibold">BotCraft</h1>
      </div>

      <small className="text-tertiary-100">v0.0.1</small>
    </div>
  );
}
