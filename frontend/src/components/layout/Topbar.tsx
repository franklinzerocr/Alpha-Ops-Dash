import { useWallet } from "../../hooks/useWallet";

function shortenAddress(addr: string) {
  if (addr.length <= 10) return addr;
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
}

export function Topbar() {
  const { account, isConnecting, error, connect, disconnect } = useWallet();

  const handleClick = () => {
    if (account) {
      disconnect();
    } else {
      void connect();
    }
  };

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
        {error && (
          <span className="hidden sm:inline-flex text-[10px] text-rose-400">
            {error}
          </span>
        )}

        {account && (
          <span className="hidden sm:inline-flex text-xs text-slate-400">
            Connected:{" "}
            <span className="ml-1 text-emerald-400">
              {shortenAddress(account)}
            </span>
          </span>
        )}

        <button
          type="button"
          onClick={handleClick}
          disabled={isConnecting}
          className="inline-flex items-center rounded-md border border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-100 hover:bg-slate-900 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isConnecting
            ? "Connecting..."
            : account
            ? "Disconnect Wallet"
            : "Connect Wallet"}
        </button>
      </div>
    </header>
  );
}
