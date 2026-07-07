# Veritas AI 

An Academic Trust Platform for Higher Education, integrating real-time AI analysis with a pedagogical intervention workflow.

## Running the Project

To run this project locally, you will need to open **two separate terminal windows** (one for the frontend, one for the backend).

### 1. Start the Backend Server (Terminal 1)
This runs the Node.js/Express backend on port `3001` and connects to the Groq API.
```bash
cd d:\downloads\flag\veritas-ai\server
node server.js
```

### 2. Start the Frontend App (Terminal 2)
This runs the Vite/React application on `http://localhost:5173`.
```bash
cd d:\downloads\flag\veritas-ai
npm run dev
```

### Environment Variables
Ensure you have your Groq API Key set in `server/.env`:
```
GROQ_API_KEY=gsk_your_actual_key_here
```

## Workflows to Test
- **Student Portal**: `http://localhost:5173/dashboard/student` (Submit essays)
- **Professor Dashboard**: `http://localhost:5173/dashboard/professor` (Review live AI analysis)
- **Admin Portal**: `http://localhost:5173/admin` (View university-wide analytics)
