const request = require("supertest");
const app = require("./server");

describe("GET /api/portfolio", () => {
  it("returns portfolio summary with expected fields", async () => {
    const res = await request(app).get("/api/portfolio").expect(200);

    expect(typeof res.body.totalEquity).toBe("number");
    expect(typeof res.body.pnl24hPct).toBe("number");
    expect(typeof res.body.openRiskUsd).toBe("number");
    expect(typeof res.body.openRiskR).toBe("number");
    expect(typeof res.body.activeStrategies).toBe("number");
    expect(typeof res.body.strategiesNote).toBe("string");
  });
});

describe("GET /api/signals", () => {
  it("returns an array of signals", async () => {
    const res = await request(app).get("/api/signals").expect(200);

    expect(Array.isArray(res.body)).toBe(true);
    if (res.body.length > 0) {
      const sig = res.body[0];
      expect(typeof sig.id).toBe("string");
      expect(typeof sig.symbol).toBe("string");
      expect(["long", "short"]).toContain(sig.direction);
    }
  });
});
