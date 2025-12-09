import { useEffect, useState } from "react";
import {
  fetchPortfolioSummary,
  fetchRecentSignals,
  fetchOpsHealth,
  type PortfolioSummary,
  type SignalItem,
  type OpsHealth,
} from "../services/mockApi";
import { PortfolioEquityChart } from "../components/charts/PortfolioEquityChart";


export function DashboardPage() {
  const [portfolio, setPortfolio] = useState<PortfolioSummary | null>(null);
  const [signals, setSignals] = useState<SignalItem[]>([]);
  const [opsHealth, setOpsHealth] = useState<OpsHealth | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [p, s, o] = await Promise.all([
          fetchPortfolioSummary(),
          fetchRecentSignals(),
          fetchOpsHealth(),
        ]);
        if (!cancelled) {
          setPortfolio(p);
          setSignals(s);
          setOpsHealth(o);
        }
      } catch (err) {
        console.error("Dashboard refresh error:", err);
      }
    }

    // initial load
    load();

    // periodic refresh every 5 seconds
    const id = setInterval(() => {
      load();
    }, 5000);

    // cleanup
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);




/*  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setIsLoading(true);
        const [p, s, o] = await Promise.all([
          fetchPortfolioSummary(),
          fetchRecentSignals(),
          fetchOpsHealth(),
        ]);
        if (!cancelled) {
          setPortfolio(p);
          setSignals(s);
          setOpsHealth(o);
        }
      } catch (err) {
        console.error("Dashboard load error:", err);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    load(); // one-shot load for now

    return () => {
      cancelled = true;
    };
  }, []);*/

  return (
    <div className="space-y-6">
      <section className="flex items-center justify-between gap-2">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold tracking-tight">
            Portfolio Overview
          </h1>
          <p className="mt-1 text-sm text-slate-400">
            High-level view of current portfolio state and bot performance.
          </p>
        </div>

        <div className="text-xs text-slate-500">
          {isLoading ? "Updating…" : ""}
        </div>

      </section>

      {/* Top stats */}
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
          <div className="text-xs uppercase text-slate-500">Total Equity</div>
          <div className="mt-2 text-2xl font-semibold">
            {portfolio ? `$${portfolio.totalEquity.toLocaleString()}` : "—"}
          </div>
          <div className="mt-1 text-xs">
            {portfolio ? (
              <span
                className={
                  portfolio.pnl24hPct >= 0
                    ? "text-emerald-400"
                    : "text-rose-400"
                }
              >
                {portfolio.pnl24hPct >= 0 ? "+" : ""}
                {portfolio.pnl24hPct.toFixed(2)}% last 24h
              </span>
            ) : (
              <span className="text-slate-500">waiting for data…</span>
            )}
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
          <div className="text-xs uppercase text-slate-500">Open Risk</div>
          <div className="mt-2 text-2xl font-semibold">
            {portfolio ? `$${portfolio.openRiskUsd.toLocaleString()}` : "—"}
          </div>
          <div className="mt-1 text-xs text-amber-400">
            {portfolio ? `${portfolio.openRiskR.toFixed(1)}R at risk` : "—"}
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
          <div className="text-xs uppercase text-slate-500">
            Active Strategies
          </div>
          <div className="mt-2 text-2xl font-semibold">
            {portfolio ? portfolio.activeStrategies : "—"}
          </div>
          <div className="mt-1 text-xs text-slate-400">
            {portfolio ? portfolio.strategiesNote : "loading…"}
          </div>
        </div>
      </section>

      {/* Equity chart */}
      <section>
        <PortfolioEquityChart />
      </section>

      {/* Signals + Ops Health */}
      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium">Recent Signals</h2>
            <span className="text-[11px] text-slate-500">mock feed</span>
          </div>
          <div className="mt-3 space-y-2 text-xs">
            {signals.length === 0 ? (
              <div className="text-slate-500">
                {isLoading ? "Loading signals…" : "No signals loaded."}
              </div>
            ) : (
              signals.map((sig) => (
                <div
                  key={sig.id}
                  className="flex items-center justify-between"
                >
                  <span className="text-slate-300">
                    {sig.symbol} · {sig.direction} ({sig.timeframe})
                  </span>
                  <span className="text-right">
                    {sig.plR != null && (
                      <span
                        className={
                          sig.plR >= 0 ? "text-emerald-400" : "text-rose-400"
                        }
                      >
                        {sig.plR >= 0 ? "+" : ""}
                        {sig.plR.toFixed(1)}R
                      </span>
                    )}
                    <span className="block text-slate-500 text-[11px]">
                      {sig.status}
                    </span>
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium">Ops Health</h2>
            <span className="text-[11px] text-slate-500">
              bots & infra (mock)
            </span>
          </div>
          <div className="mt-3 space-y-2 text-xs">
            {opsHealth ? (
              <>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Execution engine</span>
                  <span className="text-emerald-400">
                    {opsHealth.executionEngine}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Signal pipeline</span>
                  <span className="text-emerald-400">
                    {opsHealth.signalPipeline}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Exchange connectivity</span>
                  <span className="text-amber-400">
                    {opsHealth.connectivityNote}
                  </span>
                </div>
              </>
            ) : (
              <div className="text-slate-500">
                {isLoading ? "Loading ops health…" : "No ops data."}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
