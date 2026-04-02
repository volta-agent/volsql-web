# VolSQL Web - Online SQL Tutor

## Concept
Convert the terminal-based volsql SQL trainer into an interactive web application.

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     FRONTEND (Netlify)                       │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │  React/Vue/Svelte SPA                                   │ │
│  │  - Code editor (Monaco)                                 │ │
│  │  - Results table view                                   │ │
│  │  - Progress tracker                                     │ │
│  │  - Lesson content                                       │ │
│  └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   BACKEND (Appwrite)                         │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐ │
│  │   Database     │  │   Functions    │  │    Storage     │ │
│  │ - Users        │  │ - SQL Executor │  │ - Lesson files │ │
│  │ - Progress     │  │ - Query runner │  │ - Assets       │ │
│  │ - Completions  │  │ - Validator    │  │                │ │
│  └────────────────┘  └────────────────┘  └────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

## Tech Stack Options

### Option A: Full Appwrite
- Frontend: Svelte + Vite (lightweight)
- Backend: Appwrite Functions (Python or Node)
- Database: Appwrite Database for progress
- SQL Execution: Server-side SQLite via Function

### Option B: Hybrid
- Frontend: React + Monaco Editor
- Backend: Appwrite for auth/progress
- SQL Execution: sql.js (SQLite in browser)

### Option C: Pure Client (Simplest)
- Frontend: Svelte + sql.js
- No backend needed for SQL execution
- Appwrite only for user accounts/progress sync
- Works entirely offline

## Features

### MVP (Phase 1)
- [ ] Interactive code editor with syntax highlighting
- [ ] Real SQL execution in browser (sql.js)
- [ ] Lesson content from volsql
- [ ] Results displayed as table
- [ ] Progress tracking (localStorage)

### Phase 2
- [ ] User accounts via Appwrite Auth
- [ ] Progress sync across devices
- [ ] Quiz system
- [ ] Hints and solutions

### Phase 3
- [ ] Leaderboard
- [ ] Certificates on completion
- [ ] Custom datasets
- [ ] Share queries

## Database Schema (Appwrite)

### users_progress collection
```json
{
  "userId": "string",
  "week": 1-4,
  "day": 1-5,
  "completed": boolean,
  "attempts": number,
  "lastQuery": "string",
  "completedAt": "datetime"
}
```

### quiz_results collection
```json
{
  "userId": "string",
  "week": 1-4,
  "score": number,
  "totalQuestions": number,
  "answers": "array",
  "completedAt": "datetime"
}
```

## Lesson Data Structure

```json
{
  "id": "week1-day1",
  "week": 1,
  "day": 1,
  "title": "Your First SELECT",
  "concept": "Welcome to SQL! The SELECT statement...",
  "exercise": "Write a query to show all columns from the Categories table.",
  "hint": "Use SELECT * FROM...",
  "solution": "SELECT * FROM Categories;",
  "expectedResult": {
    "columns": ["CategoryID", "CategoryName", "Description"],
    "minRows": 8
  }
}
```

## File Structure

```
volsql-web/
├── src/
│   ├── lib/
│   │   ├── sql/          # sql.js setup, query runner
│   │   ├── lessons/      # lesson data
│   │   └── progress/     # progress tracking
│   ├── routes/
│   │   ├── +page.svelte  # home
│   │   ├── learn/
│   │   │   └── [week]/
│   │   │       └── [day]/  # lesson page
│   │   └── profile/      # user progress
│   └── app.html
├── static/
│   └── northwind.db      # pre-seeded SQLite
├── package.json
└── README.md
```

## Why This Works

1. **sql.js** - SQLite compiled to WebAssembly, runs 100% in browser
2. **No server needed for SQL** - everything executes client-side
3. **Offline capable** - works without internet
4. **Appwrite for sync** - optional cloud save
5. **Fast deployment** - static site on Netlify/Cloudflare Pages

## Estimated Build Time

- Phase 1 (MVP): 4-6 hours
- Phase 2 (Auth/Sync): 2-3 hours
- Phase 3 (Gamification): 3-4 hours

## Decision Points

1. Framework: Svelte (lighter) vs React (more ecosystem)?
2. Editor: Monaco (VS Code) vs CodeMirror (lighter)?
3. First deploy: Netlify vs Cloudflare Pages?

Let's build it!
