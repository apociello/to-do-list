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
import { sidebarAddProject } from "./pages/project/addProyect.js";

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

const openDialog = document.getElementById('open-dialog');
openDialog.addEventListener('click', () => dialog.showModal());

const form = document.querySelector('form');
const input = document.getElementById('project-name')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const projectName = input.value;
  sidebarAddProject(projectName);
  new Project(projectName);
  console.log(allProjects)
  form.reset();
  dialog.close()
})

const closeDialog = document.querySelector('.close');
closeDialog.addEventListener('click', (e) => {
  e.preventDefault();
  form.reset();
  dialog.close();
}) 

// RENAME PROJECT DIALOG 
const renameDialog = document.getElementById('rename-project-dialog');
const inputRename = document.getElementById('project-rename-input');

const openRenameDialog = document.querySelectorAll('.open-rename-dialog');

openRenameDialog.forEach((btn) => {
  btn.addEventListener('click', (e) => {
  const projectLi = e.target.closest('.file-line');
  inputRename.value = projectLi.dataset.id;
  renameDialog.dataset.dialogId = inputRename.value;
  renameDialog.showModal();
  })
})

const renameForm = document.querySelector('.rename-form');

renameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let oldProjectId = renameDialog.dataset.dialogId;
  const projectLi = document.querySelector(`[data-id="${oldProjectId}"]`)
  const p = projectLi.querySelector('p');


  allProjects.forEach((project) => {
    if (project.title === oldProjectId) {
      project.title = inputRename.value;
    }
  })
  console.log(allProjects)


  projectLi.dataset.id = inputRename.value;
  oldProjectId = inputRename.value;
  p.textContent = inputRename.value;

  form.reset();
  renameDialog.close()
})

const closeRenameDialog = document.querySelector('.close-rename');
closeRenameDialog.addEventListener('click', (e) => {
  e.preventDefault();
  form.reset();
  renameDialog.close();
}) 




























































































const project1 = new Project("Personal Development");

const task1 = new Task(
  "Learn JavaScript",
  "Review classes and modules for the project",
  "2025-09-5",
  "High",
  false
);

const task2 = new Task(
  "Workout",
  "30 minutes of cardio and stretching",
  "2025-09-21",
  "Medium",
  false
);

const task3 = new Task(
  "Read a book",
  "Finish reading 50 pages of 'Atomic Habits'",
  "2025-09-03",
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
  "2025-09-7",
  "High",
  false
);

const task5 = new Task(
  "Update Resume",
  "Add recent projects and skills",
  "2025-09-04",
  "Medium",
  false
);

const task6 = new Task(
  "Networking",
  "Send follow-up emails to 3 contacts",
  "2025-09-27",
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


