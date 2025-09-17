import "./style.css"
import { initSidebarEvents } from "./initEvents.js";
import { logDefaultProjects } from "./projectData.js";
import { initDialogEvents } from "./dialogEvents.js";

document.addEventListener('DOMContentLoaded', () => {
  logDefaultProjects()
  initSidebarEvents()
  initDialogEvents()
})

