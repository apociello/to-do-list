import { Task } from "./modules/task.js"
import { Project } from "./modules/project.js"
import { getAllTasks, getWeekTasks, getTodayTasks } from "./modules/todo.js";
import { Note } from "./modules/note.js";
import "./style.css"
import { inboxPage } from "./pages/inbox/inboxPage.js";
import { todayPage } from "./pages/today/todayPage.js";
import { thisWeekPage } from "./pages/this_week/thisWeekPage.js";
import { projectPage } from "./pages/project/projectPage.js";
import { notePage } from "./pages/note/notePage.js";

const allProjects = Project.projectList;
const allNotes = Note.noteList;

const inboxBtn = document.getElementById('inboxBtn');
const todayBtn = document.getElementById('todayBtn');
const thisWeekBtn = document.getElementById('weekBtn')

inboxBtn.addEventListener('click', () => {
  inboxBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
  inboxBtn.style.borderRadius = '5px';
  todayBtn.style.backgroundColor = '';
  thisWeekBtn.style.backgroundColor = '';

  inboxPage(allProjects)
})

todayBtn.addEventListener('click', () => {
  inboxBtn.style.backgroundColor = '';
  todayBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
  todayBtn.style.borderRadius = '5px';
  thisWeekBtn.style.backgroundColor = '';

  todayPage(allProjects)
})


thisWeekBtn.addEventListener('click', () => {
  inboxBtn.style.backgroundColor = '';
  todayBtn.style.backgroundColor = '';
  thisWeekBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
  thisWeekBtn.style.borderRadius = '5px';

  thisWeekPage(allProjects)
})

//ADD PROJECT DIALOG
const dialog = document.getElementById('project-dialog');

const closeDialog = document.querySelector('.close');
closeDialog.addEventListener('click', () => dialog.close());

const openDialog = document.getElementById('open-dialog');
openDialog.addEventListener('click', () => dialog.showModal());





























































































const project1 = new Project("Personal Development");

const task1 = new Task(
  "Learn JavaScript",
  "Review classes and modules for the project",
  "2025-08-30",
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
  "2025-09-02",
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
  "2025-09-01",
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


const note1 = new Note('Games');
note1.text = 'Minecraft, Stardew Valley, Rocket League, Resident Evil';

const note2 = new Note('Cat');
note2.text = 'Ronny, Maya';


// console log
// TO DO
const allTasks = getAllTasks(allProjects);
console.log(getTodayTasks(allTasks));
console.log(getWeekTasks(allTasks));
console.log(allTasks)

// PROJECTS
console.log(allProjects)

//NOTES
console.log(allNotes);

thisWeekPage(allProjects)


