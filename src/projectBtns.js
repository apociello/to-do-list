import renameIcon from "./images/edit.svg";
import { Project } from "./modules/project";
import { allProjects } from "./projectData";
import trashIcon from "./images/trash.svg";
import { inboxPage } from "./main-page/inboxPage";

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

function deleteProjectBtn(projectName) {
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
          
          // TEMPORAL 2
          if (allProjects.length == 2 || mainDivTitle === projectName) {
            inboxPage(allProjects); 
            const inboxBtn = document.getElementById('inboxBtn');
            inboxBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            inboxBtn.style.borderRadius = '5px';
          }
        }
      });
      
      console.log(allProjects)
    })

    return trashBtn;
}

export {renameProjectBtn, deleteProjectBtn}