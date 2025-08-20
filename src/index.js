import { Task, logTaskDetails } from "./projects/task.js"
import { Project } from "./projects/project.js"
import { getAllTasks, getWeekTasks, getTodayTasks } from "./todo/todo.js";
import { Note } from "./notes/note.js";

window.Task = Task;
window.logTaskDetails = logTaskDetails;
window.Project = Project;
window.getAllTasks = getAllTasks;
window.getTodayTasks = getTodayTasks;
window.getWeekTasks = getWeekTasks;
window.Note = Note;


/* 
const project1 = new Project("Personal Development");

const task1 = new Task(
  "Learn JavaScript",
  "Review classes and modules for the project",
  "2025-08-19",
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
  "2025-08-28",
  "Low",
  false
);

project1.addTask(task1)
project1.addTask(task2)
project1.addTask(task3)

const project2 = new Project("Work & Career");

const task4 = new Task(
  "Prepare Presentation",
  "Create slides for Monday's meeting",
  "2025-08-27",
  "High",
  false
);

const task5 = new Task(
  "Update Resume",
  "Add recent projects and skills",
  "2025-08-24",
  "Medium",
  false
);

const task6 = new Task(
  "Networking",
  "Send follow-up emails to 3 contacts",
  "2025-08-20",
  "Low",
  false
);

project2.addTask(task4);
project2.addTask(task5);
project2.addTask(task6);
*/