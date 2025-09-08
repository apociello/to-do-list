import "./style.css"
import { initSidebarEvents } from "./initSidebarEvents.js";
import { logDefaultProjects } from "./projectData.js";
import { initDialogEvents } from "./dialogEvents.js";

document.addEventListener('DOMContentLoaded', () => {
  logDefaultProjects() // TEMPORAL WHEN DELETED: projectBtns.js -> deleteProjectBtn() 2 -> 0
  initSidebarEvents()
  initDialogEvents()
})

