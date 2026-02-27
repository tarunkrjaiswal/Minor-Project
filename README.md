# 🚨 ResQ-AI: Intelligent Disaster Response Ecosystem

ResQ-AI is an autonomous drone-based disaster response system designed to locate survivors in disaster zones using computer vision, prioritize rescue missions through natural language processing, and provide real-time situational awareness via a live monitoring dashboard.

---

## 📂 Project Structure

```
resq-ai-system/
├── ai-engine/                        # ML Models & Inference Scripts
│   ├── src/
│   │   ├── detector.py               # YOLOv8 vision-based human detection
│   │   ├── parser.py                 # NLP emergency message classifier (BART-Large)
│   │   └── main.py                   # Unified entry point for AI modules
│   ├── models/                       # YOLOv8 model weights (auto-downloaded on first run)
│   ├── training/                     # Training scripts & configs
│   ├── requirements.txt              # Python dependencies
│   └── Dockerfile                    # Containerized AI engine
│
├── backend-hub/                      # Real-time Backend Server
│   ├── src/
│   │   ├── server.js                 # Express server entry point
│   │   ├── controllers/
│   │   │   └── droneController.js    # Drone telemetry & control logic
│   │   ├── routes/
│   │   │   └── api.js                # REST API routes
│   │   └── services/
│   │       └── socketService.js      # WebSocket service for real-time updates
│   ├── package.json
│   └── Dockerfile
│
├── frontend-dashboard/               # Live Monitoring Dashboard (Next.js)
│   ├── app/
│   │   ├── page.tsx                  # Main dashboard layout
│   │   ├── layout.tsx                # Root layout with metadata
│   │   ├── globals.css               # Global styles (Tailwind CSS)
│   │   └── components/
│   │       ├── MapView.tsx           # Interactive Mapbox GL map with disaster markers
│   │       ├── alert.tsx             # Real-time active alerts panel
│   │       └── sidebar.tsx           # Navigation sidebar
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.ts
│   ├── eslint.config.mjs
│   └── postcss.config.mjs
│
├── data/                             # Test footage, logs & sample data (local only)
├── docker-compose.yml                # Multi-service orchestration
└── README.md
```

---

## ✨ Key Features

### 🔍 Vision Core — Survivor Detection
- Real-time human detection from aerial drone footage using **YOLOv8**.
- Optimized for low-contrast disaster environments (floods, forests, rubble).
- **Status:** 🟡 In Development — Module scaffolded, integration pending.

### 🧠 NLP Core — Emergency Message Parsing
- Zero-shot classification of incoming distress signals using **BART-Large**.
- Categorizes messages as *Urgent Rescue*, *News*, or *Casual* with confidence scoring.
- Automatic logging of urgent alerts for mission dispatch.
- **Status:** 🟡 In Development — Module scaffolded, integration pending.

### 🌍 Frontend Dashboard — Live Monitoring
- Built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS 4**.
- Interactive disaster map powered by **Mapbox GL** with real-time marker plotting.
- Active alerts panel displaying ongoing threats (landslides, flood risks, etc.).
- Navigation sidebar for Dashboard, Live Map, History, and Settings views.
- Real-time updates via **Socket.IO** client integration.
- **Status:** ✅ Operational — Core UI functional.

### ⚙️ Backend Hub — Real-time API Server
- **Express.js** server with RESTful API routes for drone control and data ingestion.
- **WebSocket** service for pushing real-time alerts and telemetry to the dashboard.
- Drone controller module for managing telemetry and mission commands.
- **Status:** 🟡 In Development — Module scaffolded, integration pending.

### 🐳 Docker Support
- Full multi-service orchestration via `docker-compose.yml`.
- Individual Dockerfiles for `ai-engine`, `backend-hub`, and `frontend-dashboard`.

---

## 🛠️ Setup & Installation

### Prerequisites
- **Node.js** (v18+) and **npm**
- **Python** (3.9+) — for AI engine
- **Docker** (optional) — for containerized deployment
- **Mapbox Access Token** — for the map dashboard

---

### 1. Clone the Repository

```bash
git clone https://github.com/tarunkrjaiswal/Minor-Project.git
cd Minor-Project
```

### 2. Frontend Dashboard Setup

```bash
cd resq-ai-system/frontend-dashboard
npm install
```

Create a `.env.local` file with your Mapbox token:

```env
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_access_token_here
```

Start the development server:

```bash
npm run dev
```

The dashboard will be available at **http://localhost:3000**.

### 3. AI Engine Setup (When Implemented)

```bash
cd resq-ai-system/ai-engine
python -m venv venv

# Windows:
.\venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

pip install -r requirements.txt
```

Run the vision module:

```bash
python src/detector.py
```

Run the NLP module:

```bash
python src/parser.py
```

> **Note:** YOLOv8 (`yolov8n.pt`) and BART-Large models will download automatically on first run.

### 4. Docker Deployment (Full Stack)

```bash
cd resq-ai-system
docker-compose up --build
```

---

## 🖥️ Dashboard Preview

The frontend dashboard includes:

| Component | Description |
|-----------|-------------|
| **Sidebar** | Navigation panel with Dashboard, Live Map, History, and Settings |
| **Map View** | Interactive Mapbox map centered on India with disaster zone markers |
| **Alerts Panel** | Real-time feed of active threats — landslides, floods, earthquakes |

---

## 📊 Evaluation Metrics (Target)

| Metric | Target |
|--------|--------|
| Detection Accuracy | Human identification in low-contrast environments |
| Response Latency | Real-time inference (~30 FPS) on standard hardware |
| NLP Confidence | >80% accuracy on zero-shot distress signal classification |
| Dashboard Load | <3s initial page load, real-time WebSocket updates |

---

## 🗺️ Roadmap

- [x] **Phase 1** — Core AI modules scaffolded (Vision & NLP)
- [x] **Phase 1** — Frontend dashboard with live map & alerts
- [ ] **Phase 2** — Backend hub API integration with drone telemetry
- [ ] **Phase 2** — WebSocket real-time pipeline (AI → Backend → Dashboard)
- [ ] **Phase 3** — Full AI model training & deployment
- [ ] **Phase 3** — End-to-end autonomous drone response workflow

---

## 📄 License

This project is developed as part of an academic Minor Project.
