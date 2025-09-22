import "./style.css"
import { initSidebarEvents } from "./uiInitializer.js";
import { initDefaultProjects } from "./data/projectData.js";
import { initDefaultNotes } from "./data/noteData.js";
import { initDialogEvents } from "./uiInitializer.js";

document.addEventListener('DOMContentLoaded', () => {
  initDefaultProjects();
  initDefaultNotes();
  initSidebarEvents();
  initDialogEvents();
})
