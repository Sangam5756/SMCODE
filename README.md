# SMCODE

SMCODE is a full-stack web app for browsing **DSA / coding problems** by topic (category) and viewing:
- Problem statement + external problem link
- Multiple solution approaches (Brute Force / Better / Optimal)
- Time & space complexity
- Test cases
- Copy-to-clipboard solution code

## Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- Axios
- Tailwind CSS

### Backend
- Node.js + Express (ES Modules)
- MongoDB + Mongoose
- CORS
- dotenv

## Features

- Topic/category based problem listing
- Dynamic routing (category route)
- Loader while fetching data
- Error message when category not found
- Multiple solution types per problem (`brute_force`, `better`, `optimal`)
- Copy solution code to clipboard

## Project Structure

```bash
SMCODE/
  backend/
    index.js
    routes/
    controller/
    models/
    db/
    package.json
  frontend/
    src/
      components/
      pages/
      routes/
    package.json
```

## API Endpoints (Backend)

Base URL: `/api`

- `GET /api/questions`  
  Returns all questions.

- `POST /api/category`  
  Returns questions filtered by category.

Example request body:
```json
{
  "category": "array"
}
```

## Database Schema (Question)

Each question document contains fields like:
- `id`, `title`, `link`, `difficulty`, `problem_description`, `category`
- `test_cases[]` with `input`, `expected_output`, `explanation`
- `solutions[]` with:
  - `type` (`brute_force` / `better` / `optimal`)
  - `code`, `time_complexity`, `space_complexity`, `brief_explanation`

## Environment Variables

### Backend (`backend/.env`)
Create a `.env` file inside `backend/`:

```env
PORT=5000
MONGO_URL=your_mongodb_connection_string
FRONTEND_URL=http://localhost:5173
```

> `FRONTEND_URL` is used by CORS in `backend/index.js`.

## Run Locally

### 1) Clone the repo
```bash
git clone https://github.com/Sangam5756/SMCODE.git
cd SMCODE
```

### 2) Start Backend
```bash
cd backend
npm install
npm start
```

Backend runs on:
- `http://localhost:5000`

### 3) Start Frontend
Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:
- `http://localhost:5173`

## Notes / Deployment

- Frontend currently calls a deployed backend URL in `frontend/src/pages/DisplayPage.jsx`:
  - `https://smcodebackend5756.onrender.com/api/category`

If you want to use local backend while developing, update it to:
- `http://localhost:5000/api/category`

## Roadmap (Suggestions)

- Add more topics/categories
- Add search & filters (difficulty, tags)
- Add an admin panel to add/edit problems
- Add authentication for contributors
- Add pagination and caching

## Author

**Sangam5756**
