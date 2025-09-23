import { Project, Note } from "./classes.js";
import { allProjects, saveProjects } from "./data/projectData.js";
import { allNotes, saveNotes } from "./data/noteData.js";
import fileIconImg from "../images/file.svg";
import renameIcon from "../images/edit.svg";
import trashIcon from "../images/trash.svg";
import { initProjectEvents } from "./uiInitializer.js";
import { initNoteEvents } from "./uiInitializer.js";


// PROJECT
function sidebarAddProject(projectName) {
    const projectList = document.querySelector('.project-list');

    const project = document.createElement('li');
    project.classList.add('file-line');
    project.dataset.id = projectName;
    
    const leftSideDiv = document.createElement('div');
    leftSideDiv.classList.add('sidebar-line-left');

    const fileIcon = document.createElement("img");
    fileIcon.src = fileIconImg;
    fileIcon.alt = 'written file icon';
    fileIcon.classList.add('file-icon')
    const projectTitle = document.createElement('p');
    projectTitle.textContent = projectName;

    const rightSideDiv = document.createElement('div');
    rightSideDiv.classList.add('sidebar-line-right')

    const renameBtn = renameProjectBtn()
    const trashBtn = deleteProjectBtn()

    leftSideDiv.append(fileIcon, projectTitle);
    rightSideDiv.append(renameBtn, trashBtn)
    project.append(leftSideDiv, rightSideDiv)
    projectList.append(project)

    // PROJECT DISPLAY
    initProjectEvents(project, projectName);
}

function renameProjectBtn() {
    const renameBtn = document.createElement("img");
        renameBtn.src = renameIcon;
        renameBtn.alt = 'pencil rename icon';
        renameBtn.classList.add('sidebar-line-right-icon');
        renameBtn.classList.add('open-rename-dialog');
    
        // RENAME PROJECT EVENT
        const renameDialog = document.getElementById('rename-project-dialog');
        const inputRename = document.getElementById('project-rename-input');
    
        renameBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const projectLi = e.target.closest('.file-line');
          inputRename.value = projectLi.dataset.id;
          renameDialog.dataset.dialogId = inputRename.value;
          renameDialog.showModal();
        });
    return renameBtn;
}

function deleteProjectBtn() {
    const trashBtn = document.createElement("img");
    trashBtn.src = trashIcon;
    trashBtn.alt = 'trash delete icon';
    trashBtn.classList.add('sidebar-line-right-icon');
    trashBtn.classList.add('delete-project');
    
    // DELETE PROJECT EVENT
    
    trashBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const projectLi = e.target.closest('li');
      const projectName = projectLi.dataset.id;
      const mainDivTitle = document.getElementById('title').textContent;

      allProjects.forEach((project) => {

        if (project.title === projectName) {
          Project.deleteProject(project);
          projectLi.remove();
          saveProjects();
          
          if (allProjects.length == 0 || mainDivTitle === projectName) {
            const addTaskBtn = document.querySelector('.add-task-btn');
            addTaskBtn.classList.add('hidden');
            const inboxBtn = document.getElementById('inboxBtn');
            inboxBtn.click();
          }
        }
      });

      console.log(allProjects)
    })

    return trashBtn;
}

function projectExits(projectName) {
    return allProjects.some(
    project => project.title.toLowerCase() === projectName.toLowerCase()
  );
}

//NOTE
function sidebarAddNote(noteName) {
    const noteList = document.querySelector('.note-list');

    const note = document.createElement('li');
    note.classList.add('file-line');
    note.dataset.id = noteName;
    
    const leftSideDiv = document.createElement('div');
    leftSideDiv.classList.add('sidebar-line-left');

    const fileIcon = document.createElement("img");
    fileIcon.src = fileIconImg;
    fileIcon.alt = 'written file icon';
    fileIcon.classList.add('file-icon')
    const noteTitle = document.createElement('p');
    noteTitle.textContent = noteName;

    const rightSideDiv = document.createElement('div');
    rightSideDiv.classList.add('sidebar-line-right')

    const renameBtn = renameNoteBtn()
    const trashBtn = deleteNoteBtn()

    leftSideDiv.append(fileIcon, noteTitle);
    rightSideDiv.append(renameBtn, trashBtn)
    note.append(leftSideDiv, rightSideDiv)
    noteList.append(note)

    // PROJECT DISPLAY
    initNoteEvents(note, noteName);
}

function renameNoteBtn() {
    const renameBtn = document.createElement("img");
        renameBtn.src = renameIcon;
        renameBtn.alt = 'pencil rename icon';
        renameBtn.classList.add('sidebar-line-right-icon');
        renameBtn.classList.add('open-rename-dialog');
    
        // RENAME PROJECT EVENT
        const renameDialog = document.getElementById('rename-note-dialog');
        const inputRename = document.getElementById('note-rename-input');
    
        renameBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const noteLi = e.target.closest('.file-line');
          inputRename.value = noteLi.dataset.id;
          renameDialog.dataset.dialogId = inputRename.value;
          renameDialog.showModal();
        });
    return renameBtn;
}

function deleteNoteBtn() {
    const trashBtn = document.createElement("img");
    trashBtn.src = trashIcon;
    trashBtn.alt = 'trash delete icon';
    trashBtn.classList.add('sidebar-line-right-icon');
    trashBtn.classList.add('delete-project');
    
    // DELETE NOTE EVENT
    
    trashBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const noteLi = e.target.closest('li');
      const noteName = noteLi.dataset.id;
      const mainDivTitle = document.getElementById('title').textContent;

      allNotes.forEach((note) => {

        if (note.title === noteName) {
          Note.deleteNote(note);
          noteLi.remove();
          saveNotes();
          
          if (allNotes.length == 0 || mainDivTitle === noteName) {
            const addTaskBtn = document.querySelector('.add-task-btn');// IGUAL SE PUEDE QUITAR
            addTaskBtn.classList.add('hidden'); // IGUAL SE PUEDE QUITAR
            const inboxBtn = document.getElementById('inboxBtn');
            inboxBtn.click()
          }
        }
      });
      
      console.log(allNotes)
    })

    return trashBtn;
}

function noteExits(noteName) {
    return allNotes.some(
    note => note.title.toLowerCase() === noteName.toLowerCase()
  );
}


export { sidebarAddProject, projectExits, sidebarAddNote, noteExits  };