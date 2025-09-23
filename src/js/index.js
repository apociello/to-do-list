import "../css/general.css";
import "../css/main.css";
import "../css/sidebar.css";
import "../css/dialogs.css";

import { initSidebarEvents, initDialogEvents } from "./uiInitializer.js";
import { initDefaultProjects, saveProjects, loadProjects} from "./data/projectData.js";
import { initDefaultNotes, saveNotes, loadNotes } from "./data/noteData.js";

document.addEventListener('DOMContentLoaded', () => {
  const hasProjects = localStorage.getItem("projects");
  const hasNotes = localStorage.getItem("notes");
  if (hasProjects && hasNotes) {
    loadProjects();
    loadNotes();
  } else {
    initDefaultProjects();
    initDefaultNotes();

    saveProjects();
    saveNotes();
  }

  initSidebarEvents();
  initDialogEvents();
});