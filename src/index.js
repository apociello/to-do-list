import "./style.css"
import { initSidebarEvents } from "./initEvents.js";
import { logDefaultProjects } from "./data/projectData.js";
import { logDefaultNotes } from "./data/noteData.js";
import { initDialogEvents } from "./dialogEvents.js";

document.addEventListener('DOMContentLoaded', () => {
  logDefaultProjects();
  logDefaultNotes();
  initSidebarEvents();
  initDialogEvents();
})

