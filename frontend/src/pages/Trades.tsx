export function TradesPage() {
  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-xl font-semibold tracking-tight">Trades</h1>
        <p className="mt-1 text-sm text-slate-400">
          Executed trades and PnL (mocked, wired via the API later).
        </p>
      </header>

      <div className="rounded-xl border border-slate-800 bg-slate-950/80 overflow-hidden">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-900 text-slate-400 text-xs uppercase">
            <tr>
              <th className="px-4 py-2 text-left">Time</th>
              <th className="px-4 py-2 text-left">Symbol</th>
              <th className="px-4 py-2 text-left">Side</th>
              <th className="px-4 py-2 text-left">Size</th>
              <th className="px-4 py-2 text-left">R</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            <tr>
              <td className="px-4 py-2 text-slate-300">2025-01-01 10:15</td>
              <td className="px-4 py-2 text-slate-100">BTCUSDT</td>
              <td className="px-4 py-2 text-emerald-400">long</td>
              <td className="px-4 py-2 text-slate-300">0.25 BTC</td>
              <td className="px-4 py-2 text-emerald-400">+1.3R</td>
              <td className="px-4 py-2 text-slate-400">closed</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-slate-300">2025-01-01 09:00</td>
              <td className="px-4 py-2 text-slate-100">SOLUSDT</td>
              <td className="px-4 py-2 text-rose-400">short</td>
              <td className="px-4 py-2 text-slate-300">1,500 SOL</td>
              <td className="px-4 py-2 text-rose-400">-0.7R</td>
              <td className="px-4 py-2 text-slate-400">closed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
