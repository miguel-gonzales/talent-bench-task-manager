import { TaskRepository } from "./repository/TaskRepository.js";
import { TaskController } from "./interface/TaskController.js";
import { TaskView } from "./interface/TaskView.js";


const repo = new TaskRepository();
const view = new TaskView();
const controller = new TaskController(repo, view);
controller.init();