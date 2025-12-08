export function InfraPage() {
  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-xl font-semibold tracking-tight">Infra Health</h1>
        <p className="mt-1 text-sm text-slate-400">
          High-level view of bot processes, queues, and connectivity (mocked).
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
          <h2 className="text-sm font-medium">Bot Processes</h2>
          <ul className="mt-3 space-y-2 text-xs text-slate-300">
            <li>signal-engine-01 · <span className="text-emerald-400">running</span></li>
            <li>execution-daemon-01 · <span className="text-emerald-400">running</span></li>
            <li>risk-manager-01 · <span className="text-amber-400">delayed</span></li>
          </ul>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
          <h2 className="text-sm font-medium">Connectivity</h2>
          <ul className="mt-3 space-y-2 text-xs text-slate-300">
            <li>Exchange A · <span className="text-emerald-400">OK</span></li>
            <li>Exchange B · <span className="text-amber-400">degraded</span></li>
            <li>Redis queue · <span className="text-emerald-400">OK</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
