**AlphaOpsDash**
================

AlphaOpsDash is an operational dashboard for algorithmic trading systems, focused on portfolio state, signal flow, and infrastructure health.

It is designed as a compact but realistic full-stack Web3-ready project:

-   React + TypeScript + Tailwind on the frontend

-   Node.js + Express on the backend

-   Clean layered architecture (routes → controllers → services → connectors)

-   EVM wallet connectivity (Metamask, etc.)

-   Ready for future CEX/DEX or on-chain integrations


* * * * *

**Screenshots**
---------------

`![Main dashboard](docs/dashboard.png)`

* * * * *

**Live Demo**
-------------

-   **Frontend (Vercel):** [https://alpha-ops-dash.vercel.app](https://alpha-ops-dash.vercel.app?utm_source=chatgpt.com)

-   **Backend Health (Render):** <https://alpha-ops-dash.onrender.com/api/health>

* * * * *

**Features**
------------

-   Portfolio overview (equity, 24h PnL, open risk, strategies)

-   Equity history chart

-   Recent signals feed

-   Trades table (WIP)

-   Infra / Ops health panel

-   Wallet connect button (EVM providers)

Data is currently provided by an in-memory connector designed to be replaced by real exchange or chain modules.

* * * * *

**Wallet Connectivity**
-----------------------

-   Uses `window.ethereum` to request accounts

-   Displays shortened address on connect

-   Local disconnect support

-   Designed to extend into signing, chain RPC, or contract interactions

* * * * *

**Tech Stack**
--------------

### **Frontend**

-   React + TypeScript

-   Vite

-   Tailwind CSS

-   Recharts

-   Vitest + React Testing Library

### **Backend**

-   Node.js + Express

-   Layered architecture:

    -   `routes/`

    -   `controllers/`

    -   `services/`

    -   `connectors/`

    -   `middleware/`

-   Jest + Supertest

-   Structured logging middleware

* * * * *

**Running Locally**
-------------------

### **Clone the repository**

`git clone https://github.com/franklinzerocr/Alpha-Ops-Dash.git
cd Alpha-Ops-Dash`

* * * * *

**Backend**
-----------

`cd backend
npm install

# development
npm run dev

# production-like
npm start`

Backend listens on `PORT` in `backend/.env` (default: `4000`).

* * * * *

**Frontend**
------------

`cd frontend
npm install

# development
npm run dev`

Vite runs at:\
**<http://localhost:5173>**

* * * * *

**Environment Variables**
-------------------------

### **Backend (`backend/.env`)**

`PORT=4000
CORS_ORIGIN=http://localhost:5173
LOG_LEVEL=info`

-   Render overrides `PORT` automatically

-   In production, set `CORS_ORIGIN` to the deployed frontend URL

### **Frontend (`frontend/.env`)**

`VITE_API_BASE=/api     # for local dev with Vite proxy
VITE_API_BASE=https://alpha-ops-dash.onrender.com/api   # production`

In Vercel, `VITE_API_BASE` is configured in Project → Environment Variables.

* * * * *

**API Endpoints**
-----------------

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/portfolio` | Portfolio summary |
| GET | `/api/portfolio/history` | Equity history |
| GET | `/api/signals` | Recent signals |
| GET | `/api/trades` | Executed trades (mock) |
| GET | `/api/ops` | Ops health |
| GET | `/api/health` | Simple health check |

Responses are provided by `connectors/mockExchangeConnector.js`.

* * * * *

**Testing**
-----------

### Backend

`cd backend
npm test`

### Frontend

`cd frontend
npm test`

Tests are excluded from the production TypeScript build.

* * * * * 

**Deployment**
--------------

### **Backend --- Render**

-   Root: `/backend`

-   Build: `npm install`

-   Start: `npm start`

-   Env: `CORS_ORIGIN`, `LOG_LEVEL`, `PORT` (Render-managed)

### **Frontend --- Vercel**

-   Root: `/frontend`

-   Build: `npm run build`

-   Output: `dist`

-   Env: `VITE_API_BASE=https://alpha-ops-dash.onrender.com/api`


* * * * *

**Possible Next Improvements**
------------------------------

-   Replace mock connector with real exchange/on-chain modules

-   Add authentication and multi-portfolio support

-   Store data in a database

-   Add latency metrics, risk metrics, per-exchange views