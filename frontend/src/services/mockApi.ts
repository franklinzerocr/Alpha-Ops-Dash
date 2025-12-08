// Types used by the dashboard

export type PortfolioSummary = {
  totalEquity: number;      // in USD
  pnl24hPct: number;        // %
  openRiskUsd: number;      // in USD
  openRiskR: number;        // in R
  activeStrategies: number;
  strategiesNote: string;
};

export type SignalItem = {
  id: string;
  symbol: string;
  direction: "long" | "short";
  timeframe: string;
  status: "open" | "executed" | "cancelled";
  plR: number | null;
  createdAt?: string;
};

export type TradeItem = {
  id: string;
  symbol: string;
  side: "long" | "short";
  size: string;
  rMultiple: number;
  status: string;
  openedAt: string;
  closedAt: string;
};

export type OpsHealth = {
  executionEngine: "healthy" | "degraded" | "down";
  signalPipeline: "healthy" | "degraded" | "down";
  connectivityNote: string;
};

// Optional: use env var if present, fallback to localhost:4000
const API_BASE =
  (import.meta as any).env?.VITE_API_BASE_URL || "http://localhost:4000";

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`);
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<T>;
}

export async function fetchPortfolioSummary(): Promise<PortfolioSummary> {
  return get<PortfolioSummary>("/api/portfolio");
}

export async function fetchRecentSignals(): Promise<SignalItem[]> {
  return get<SignalItem[]>("/api/signals");
}

export async function fetchTrades(): Promise<TradeItem[]> {
  return get<TradeItem[]>("/api/trades");
}

export async function fetchOpsHealth(): Promise<OpsHealth> {
  return get<OpsHealth>("/api/ops");
}
