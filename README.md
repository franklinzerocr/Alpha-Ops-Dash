# AlphaOpsDash

AlphaOpsDash is a technical dashboard for monitoring algorithmic trading strategies and real-time operations. It integrates portfolio metrics, signals, trade execution, and infrastructure health into a unified interface for quant traders and operations teams.

## Vision

The vision for AlphaOpsDash is to become the central observability panel for algorithmic trading environments. The goal is to provide a single place for:

- Portfolio state
- Strategy-generated signals
- Trade history and performance metrics
- Bot/system/infra health

The first version (MVP) uses mocked data but follows a realistic architecture (React frontend + backend API), enabling future integration with exchanges and automated trading engines.

## Tech Stack (MVP)

### Frontend
- React + Vite + TypeScript
- Tailwind CSS

### Backend
- TBD (Node.js + Express or Python FastAPI)
- REST endpoints: `/portfolio`, `/signals`, `/trades`

### Infra
- Initial folder structure prepared for future containerization and deployment

## Project Structure (initial)

alphaopsdash/
frontend/
backend/
docs/
infra/
README.md


## How to Run (WIP)

Instructions will be added progressively as the frontend and backend are implemented.