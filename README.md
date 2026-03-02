# AI Model Monitoring Dashboard

A full-stack starter project for monitoring deployed AI model performance in real time.

## Features
- Sidebar + topbar app layout.
- Main dashboard with KPI cards (accuracy, latency, volume, drift).
- Charts for model performance trends.
- Alerts panel with severity coloring.
- Models list and model detail pages.
- Logs page with model filter.
- FastAPI backend exposing KPI and alerts endpoints.
- MySQL-ready SQLAlchemy configuration.

## Tech Stack
- **Design**: Figma-ready layout structure and component hierarchy.
- **Frontend**: React + Vite + Recharts.
- **Backend**: Python + FastAPI.
- **Database**: MySQL (configured through environment variables).

## Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## Backend Setup
```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

## API Endpoints
- `GET /health`
- `GET /kpis`
- `GET /alerts`
