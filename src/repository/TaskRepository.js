import { Task } from "../domain/Task.js";


export class TaskRepository {
  constructor(namespace = "task-manager") {
    this.key = `${namespace}:tasks`;
    this.seedLoaded = false;
  }


  _loadSeed() {
    if (this.seedLoaded) return;
    const existing = localStorage.getItem(this.key);
    if (!existing) {
      fetch("./src/infrastructure/tasks.json")
        .then(r => r.json())
        .then(seed => localStorage.setItem(this.key, JSON.stringify(seed)));
    }
    this.seedLoaded = true;
  }


  _all() { return JSON.parse(localStorage.getItem(this.key) || "[]").map(Task.fromJSON); }
  _save(list) { localStorage.setItem(this.key, JSON.stringify(list.map(t => t.toJSON()))); }


  getAll() { this._loadSeed(); return this._all(); }


  create(task) {
    const list = this._all();
    list.push(task);
    this._save(list);
    return task;
  }


  toggle(id) {
    const list = this._all();
    const idx = list.findIndex(t => String(t.id) === String(id));
    if (idx === -1) throw new Error("Task not found");
    list[idx].toggle();
    this._save(list);
    return list[idx];
  }


  delete(id) {
    const list = this._all().filter(t => String(t.id) !== String(id));
    this._save(list);
  }
}