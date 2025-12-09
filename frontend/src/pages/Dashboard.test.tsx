import React from "react";
import { render, screen } from "@testing-library/react";
import { DashboardPage } from "./Dashboard";
import * as api from "../services/mockApi";

// Mock the chart component to avoid layout-related warnings in jsdom.
vi.mock("../components/charts/PortfolioEquityChart", () => ({
  PortfolioEquityChart: () => <div data-testid="equity-chart-mock" />,
}));

// Mocks for service functions used by DashboardPage.
vi.spyOn(api, "fetchPortfolioSummary").mockResolvedValue({
  totalEquity: 100000,
  pnl24hPct: 2.5,
  openRiskUsd: 12000,
  openRiskR: 2.1,
  activeStrategies: 3,
  strategiesNote: "test strategies",
});

vi.spyOn(api, "fetchRecentSignals").mockResolvedValue([]);

vi.spyOn(api, "fetchOpsHealth").mockResolvedValue({
  executionEngine: "healthy",
  signalPipeline: "healthy",
  connectivityNote: "nominal",
});

vi.spyOn(api, "fetchPortfolioHistory").mockResolvedValue([
  {
    timestamp: "2025-01-01T00:00:00Z",
    equity: 100000,
  },
  {
    timestamp: "2025-01-02T00:00:00Z",
    equity: 102000,
  },
]);

describe("DashboardPage", () => {
  it("renders portfolio overview heading", async () => {
    render(<DashboardPage />);

    const title = await screen.findByText(/Portfolio Overview/i);
    expect(title).toBeInTheDocument();
  });
});
