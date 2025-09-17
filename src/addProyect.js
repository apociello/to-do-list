// ADD PROJECT TO THE SIDEBAR
import { Project } from "./modules/project";
import { allProjects } from "./data/projectData.js";
import fileIconImg from "./images/file.svg";
import renameIcon from "./images/edit.svg";
import trashIcon from "./images/trash.svg";
import { initProjectEvents } from "./initEvents.js";


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

export {sidebarAddProject, projectExits}