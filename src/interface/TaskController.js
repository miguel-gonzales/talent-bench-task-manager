import { Task } from "../domain/Task.js";


export class TaskController {
  constructor(repo, view) {
    this.repo = repo;
    this.view = view;
  }


  init() {
    this.view.bindAdd(title => this.add(title));
    this.view.bindToggle(id => this.toggle(id));
    this.view.bindDelete(id => this.delete(id));
    this.refresh();
  }


  refresh() { this.view.render(this.repo.getAll()); }


  async add(title) {
    if (!title) throw new Error("Title required");
    const id = Date.now();
    this.repo.create(new Task({ id, title }));
    this.refresh();
  }


  async toggle(id) { this.repo.toggle(id); this.refresh(); }


  async delete(id) { this.repo.delete(id); this.refresh(); }
}