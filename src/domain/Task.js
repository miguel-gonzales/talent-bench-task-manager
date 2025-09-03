export class Task {
  constructor({ id, title, isCompleted = false, createdAt = new Date().toISOString() }) {
    if (!title || title.trim().length === 0) throw new Error("Task title is required");
    this.id = id;
    this.title = title.trim();
    this.isCompleted = isCompleted;
    this.createdAt = createdAt;
  }


  toggle() { this.isCompleted = !this.isCompleted; }


  toJSON() { return { id: this.id, title: this.title, isCompleted: this.isCompleted, createdAt: this.createdAt }; }


  static fromJSON(json) { return new Task(json); }
}