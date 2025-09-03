export class TaskView {
  constructor() {
    this.listElement = document.getElementById("taskList");
    this.form = document.getElementById("taskForm");
    this.titleInput = document.getElementById("task-title");
    this.errorElement = document.getElementById("formError");
  }


  bindAdd(handler) {
    this.form.addEventListener("submit", e => {
      e.preventDefault();
      const title = this.titleInput.value.trim();
      handler(title)
        .then(() => { this.form.reset(); this.errorElement.textContent = ""; })
        .catch(err => this.errorElement.textContent = err.message);
    });
  }


  bindToggle(handler) {
    this.listElement.addEventListener("click", e => {
      if (e.target.dataset.action === "toggle") handler(e.target.closest("li").dataset.id);
    });
  }


  bindDelete(handler) {
    this.listElement.addEventListener("click", e => {
      if (e.target.dataset.action === "delete") handler(e.target.closest("li").dataset.id);
    });
  }


  render(tasks) {
    this.listElement.innerHTML = tasks.map(t => `
<li class="task-list__item ${t.isCompleted ? "task-list__item--done" : ""}" data-id="${t.id}">
<span>${t.title}</span>
<button data-action="toggle">${t.isCompleted ? "Undo" : "Done"}</button>
<button data-action="delete">Delete</button>
</li>`).join("");
  }
}