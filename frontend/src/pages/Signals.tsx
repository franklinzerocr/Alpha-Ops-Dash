export function SignalsPage() {
  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-xl font-semibold tracking-tight">Signals</h1>
        <p className="mt-1 text-sm text-slate-400">
          Stream of strategy-generated signals (mocked in the MVP).
        </p>
      </header>

      <div className="rounded-xl border border-slate-800 bg-slate-950/80 overflow-hidden">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-900 text-slate-400 text-xs uppercase">
            <tr>
              <th className="px-4 py-2 text-left">Time</th>
              <th className="px-4 py-2 text-left">Symbol</th>
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">TF</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            <tr>
              <td className="px-4 py-2 text-slate-300">2025-01-01 12:03</td>
              <td className="px-4 py-2 text-slate-100">BTCUSDT</td>
              <td className="px-4 py-2 text-emerald-400">long</td>
              <td className="px-4 py-2 text-slate-300">H1</td>
              <td className="px-4 py-2 text-slate-400">executed</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-slate-300">2025-01-01 11:40</td>
              <td className="px-4 py-2 text-slate-100">ETHUSDT</td>
              <td className="px-4 py-2 text-rose-400">short</td>
              <td className="px-4 py-2 text-slate-300">M15</td>
              <td className="px-4 py-2 text-slate-400">pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
