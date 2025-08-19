import {Task, logTaskDetails} from "./modules/task.js"
import {Project, addTask, logProjectTasks} from "./modules/project.js"

window.Task = Task;
window.logTaskDetails = logTaskDetails;
window.Project = Project;
window.logProjectTasks = logProjectTasks;
window.addTask = addTask;




/* 
const project1 = new Project("Personal Development");

const task1 = new Task(
  "Learn JavaScript",
  "Review classes and modules for the project",
  "2025-08-20",
  "High",
  false
);

const task2 = new Task(
  "Workout",
  "30 minutes of cardio and stretching",
  "2025-08-21",
  "Medium",
  false
);

const task3 = new Task(
  "Read a book",
  "Finish reading 50 pages of 'Atomic Habits'",
  "2025-08-22",
  "Low",
  false
);

addTask(project1, task1);
addTask(project1, task2);
addTask(project1, task3);

logProjectTasks(project1)
*/