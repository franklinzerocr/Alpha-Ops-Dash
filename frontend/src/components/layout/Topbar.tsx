import React from "react";

export function Topbar() {
  return (
    <header className="h-14 border-b border-slate-800 bg-slate-950/80 backdrop-blur flex items-center justify-between px-4">
      <div>
        <div className="text-xs uppercase tracking-wide text-slate-500">
          Overview
        </div>
        <div className="text-sm font-medium text-slate-100">
          Trading Operations
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="hidden sm:inline-flex text-xs text-slate-500">
          Connected Environment: <span className="ml-1 text-emerald-400">Mock</span>
        </span>
        <button
          type="button"
          className="inline-flex items-center rounded-md border border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-100 hover:bg-slate-900"
        >
          Connect Wallet
        </button>
      </div>
    </header>
  );
}
