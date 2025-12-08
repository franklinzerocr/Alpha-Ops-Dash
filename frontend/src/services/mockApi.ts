// Simple domain types for the dashboard

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
  plR: number | null; // null if still open
};

export type OpsHealth = {
  executionEngine: "healthy" | "degraded" | "down";
  signalPipeline: "healthy" | "degraded" | "down";
  connectivityNote: string;
};

// Small helper to simulate latency
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Base values to keep things realistic
const BASE_PORTFOLIO: PortfolioSummary = {
  totalEquity: 123_450,
  pnl24hPct: 4.2,
  openRiskUsd: 18_300,
  openRiskR: 3.1,
  activeStrategies: 5,
  strategiesNote: "3 trend, 2 mean-reversion",
};

// Slight random drift so it looks "alive"
function withDrift(value: number, maxDrift: number) {
  const delta = (Math.random() * 2 - 1) * maxDrift;
  return Math.round((value + delta) * 100) / 100;
}

export async function fetchPortfolioSummary(): Promise<PortfolioSummary> {
  await delay(150); // simulate network latency

  return {
    ...BASE_PORTFOLIO,
    totalEquity: withDrift(BASE_PORTFOLIO.totalEquity, 500),
    pnl24hPct: withDrift(BASE_PORTFOLIO.pnl24hPct, 0.4),
    openRiskUsd: withDrift(BASE_PORTFOLIO.openRiskUsd, 400),
    openRiskR: withDrift(BASE_PORTFOLIO.openRiskR, 0.4),
  };
}

export async function fetchRecentSignals(): Promise<SignalItem[]> {
  await delay(120);

  return [
    {
      id: "sig-1",
      symbol: "BTCUSDT",
      direction: "long",
      timeframe: "H1",
      status: "executed",
      plR: withDrift(0.8, 0.2),
    },
    {
      id: "sig-2",
      symbol: "ETHUSDT",
      direction: "short",
      timeframe: "M15",
      status: "open",
      plR: null,
    },
    {
      id: "sig-3",
      symbol: "SOLUSDT",
      direction: "long",
      timeframe: "H4",
      status: "executed",
      plR: withDrift(-0.4, 0.2),
    },
  ];
}

export async function fetchOpsHealth(): Promise<OpsHealth> {
  await delay(100);

  const connectivityStates = [
    "nominal",
    "degraded on exchange B (mock)",
    "elevated latency (mock)",
  ];
  const note =
    connectivityStates[Math.floor(Math.random() * connectivityStates.length)];

  return {
    executionEngine: "healthy",
    signalPipeline: "healthy",
    connectivityNote: note,
  };
}
