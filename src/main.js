import { TaskRepository } from "./infrastructure/TaskRepository.js";
import { TaskView } from "./interface/TaskView.js";


const repo = new TaskRepository();
const view = new TaskView();
controller.init();