// ADD PROJECT TO THE SIDEBAR
import fileIconImg from "./images/file.svg";
import { initProjectEvents } from "./initProjectEvents.js";
import { renameProjectBtn, deleteProjectBtn } from "./projectBtns.js";
import { allProjects } from "./projectData.js";

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
    const trashBtn = deleteProjectBtn(projectName)

    leftSideDiv.append(fileIcon, projectTitle);
    rightSideDiv.append(renameBtn, trashBtn)
    project.append(leftSideDiv, rightSideDiv)
    projectList.append(project)

    // PROJECT DISPLAY
    initProjectEvents(project, projectName);
      
}

function projectExits(projectName) {
    return allProjects.some(
    project => project.title.toLowerCase() === projectName.toLowerCase()
  );
}

export {sidebarAddProject, projectExits}