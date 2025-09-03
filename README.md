# Task Manager 📝

A simple task manager app built with **vanilla JavaScript** using a clean architecture approach (separating domain, Repository, and interface layers).

## Features
- ➕ **Add tasks** with a title
- ✅ **Mark tasks as done/undone**
- 🗑️ **Delete tasks**
- 💾 **Persistent storage** with `localStorage`
- ♿ Accessible UI (keyboard-friendly, ARIA live regions for updates)


## Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

### 2. Open with Live Server
```bash
npx live-server
```
You should see the Task Manager app running.

### Project Structure

task-manager/
│ index.html
│ tasks.json        # initial seed tasks
│
└── src/
    ├── main.js
    ├── domain/     # Task entity
    ├── Repository/ # (localStorage, fetch)
    └── interface/  # Controller + View
