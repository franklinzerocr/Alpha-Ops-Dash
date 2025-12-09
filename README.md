# AlphaOpsDash

AlphaOpsDash is a technical dashboard for monitoring algorithmic trading strategies and real-time operations. It integrates portfolio metrics, signals, trade execution, and infrastructure health into a unified interface for quant traders and operations teams.

## Vision

The vision for AlphaOpsDash is to become the central observability panel for algorithmic trading environments. The goal is to provide a single place for:

- Portfolio state
- Strategy-generated signals
- Trade history and performance metrics
- Bot/system/infra health

The first version (MVP) uses mocked data but follows a realistic architecture (React frontend + backend API), enabling future integration with exchanges and automated trading engines.

## Tech Stack

### Frontend
- React + Vite + TypeScript
- Tailwind CSS
- Recharts for data visualization

### Backend
- Node.js + Express
- In-memory exchange connector module under `backend/src/connectors`
- REST endpoints:
  - `GET /api/portfolio`
  - `GET /api/portfolio/history`
  - `GET /api/signals`
  - `GET /api/trades`
  - `GET /api/ops`
  - `GET /api/health`

## How to Run (development)

Clone the repository and start both frontend and backend locally.

```bash
git clone <REPO_URL>
cd alphaopsdash

# backend
cd backend
npm install
npm run dev
# backend listens on http://localhost:4000

# frontend (in another terminal)
cd ../frontend
npm install
npm run dev
# frontend serves the app on http://localhost:5173


```
 

## Testing

Both the frontend and backend include basic automated tests.

### Backend

The backend uses Jest and supertest to exercise the HTTP API.

```bash
cd backend
npm test
```

### Frontend

The frontend uses Vitest and React Testing Library.

```bash
cd frontend
npm test
```
