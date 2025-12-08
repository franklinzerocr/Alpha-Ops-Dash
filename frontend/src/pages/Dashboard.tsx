export function DashboardPage() {
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-xl md:text-2xl font-semibold tracking-tight">
          Portfolio Overview
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          High-level view of current portfolio state and bot performance.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
          <div className="text-xs uppercase text-slate-500">Total Equity</div>
          <div className="mt-2 text-2xl font-semibold">$123,450</div>
          <div className="mt-1 text-xs text-emerald-400">+4.2% last 24h</div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
          <div className="text-xs uppercase text-slate-500">Open Risk</div>
          <div className="mt-2 text-2xl font-semibold">$18,300</div>
          <div className="mt-1 text-xs text-amber-400">3.1R at risk</div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
          <div className="text-xs uppercase text-slate-500">
            Active Strategies
          </div>
          <div className="mt-2 text-2xl font-semibold">5</div>
          <div className="mt-1 text-xs text-slate-400">
            3 trend, 2 mean-reversion
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium">Recent Signals</h2>
            <span className="text-[11px] text-slate-500">mock feed</span>
          </div>
          <div className="mt-3 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">
                BTCUSDT · breakout long (H1)
              </span>
              <span className="text-emerald-400">+0.8R</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">
                ETHUSDT · mean-revert short (M15)
              </span>
              <span className="text-slate-400">open</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">
                SOLUSDT · momentum long (H4)
              </span>
              <span className="text-rose-400">-0.4R</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium">Ops Health</h2>
            <span className="text-[11px] text-slate-500">bots & infra</span>
          </div>
          <div className="mt-3 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Execution engine</span>
              <span className="text-emerald-400">healthy</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Signal pipeline</span>
              <span className="text-emerald-400">healthy</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Exchange connectivity</span>
              <span className="text-amber-400">degraded (mock)</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
