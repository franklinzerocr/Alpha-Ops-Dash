const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors({
  origin: "http://localhost:5173", // frontend dev
}));
app.use(express.json());

// Simple mock data generators
function getPortfolioSummary() {
  const baseEquity = 123450;
  const drift = (Math.random() * 1000 - 500); // +/- 500
  const totalEquity = Math.round(baseEquity + drift);

  const pnl24hPct = Math.round((4.2 + (Math.random() * 0.8 - 0.4)) * 100) / 100;
  const openRiskUsd = Math.round(18300 + (Math.random() * 800 - 400));
  const openRiskR = Math.round((3.1 + (Math.random() * 0.4 - 0.2)) * 10) / 10;

  return {
    totalEquity,
    pnl24hPct,
    openRiskUsd,
    openRiskR,
    activeStrategies: 5,
    strategiesNote: "3 trend, 2 mean-reversion",
  };
}

function getSignals() {
  return [
    {
      id: "sig-1",
      symbol: "BTCUSDT",
      direction: "long",
      timeframe: "H1",
      status: "executed",
      plR: 0.8,
      createdAt: "2025-01-01T12:03:00Z",
    },
    {
      id: "sig-2",
      symbol: "ETHUSDT",
      direction: "short",
      timeframe: "M15",
      status: "open",
      plR: null,
      createdAt: "2025-01-01T11:40:00Z",
    },
    {
      id: "sig-3",
      symbol: "SOLUSDT",
      direction: "long",
      timeframe: "H4",
      status: "executed",
      plR: -0.4,
      createdAt: "2025-01-01T10:10:00Z",
    },
  ];
}

function getTrades() {
  return [
    {
      id: "trade-1",
      symbol: "BTCUSDT",
      side: "long",
      size: "0.25 BTC",
      rMultiple: 1.3,
      status: "closed",
      openedAt: "2025-01-01T09:30:00Z",
      closedAt: "2025-01-01T10:15:00Z",
    },
    {
      id: "trade-2",
      symbol: "SOLUSDT",
      side: "short",
      size: "1500 SOL",
      rMultiple: -0.7,
      status: "closed",
      openedAt: "2025-01-01T08:00:00Z",
      closedAt: "2025-01-01T09:00:00Z",
    },
  ];
}

// Routes
app.get("/api/portfolio", (req, res) => {
  console.log("/api/portfolio");
  console.log(new Date().toLocaleTimeString());
  res.json(getPortfolioSummary());
});

app.get("/api/signals", (req, res) => {
  console.log("/api/signals");
  console.log(new Date().toLocaleTimeString());
  res.json(getSignals());
});

app.get("/api/trades", (req, res) => {
  console.log("/api/trades");
  console.log(new Date().toLocaleTimeString());
  res.json(getTrades());
});

app.get("/api/health", (req, res) => {
  console.log("/api/health");
  res.json({
    status: "ok",
    service: "alphaopsdash-backend",
    timestamp: new Date().toISOString(),
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`AlphaOpsDash backend listening on http://localhost:${PORT}`);
});
