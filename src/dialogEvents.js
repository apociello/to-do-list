import { Project } from "./modules/project.js";
import { allProjects } from "./projectData.js";
import { sidebarAddProject } from "./addProyect.js";


export function initDialogEvents() {
    
    //ADD PROJECT DIALOG
    const addProjectDialog = document.getElementById('add-project-dialog');
    const addProjectForm = document.querySelector('.add-project-form');
    const addProjectInput = document.getElementById('project-name')
    const openAddProjectDialog = document.getElementById('open-add-project-dialog');

    openAddProjectDialog.addEventListener('click', () => addProjectDialog.showModal());
    addProjectForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const projectName = addProjectInput.value;
        new Project(projectName);
        sidebarAddProject(projectName);
        console.log(allProjects) 
        addProjectForm.reset();
        addProjectDialog.close()
    })

    const closeAddProjectDialog = document.querySelector('.close-add-project-dialog');
    closeAddProjectDialog.addEventListener('click', (e) => {
        e.preventDefault();
        addProjectForm.reset();
        addProjectDialog.close();
    }) 


    // RENAME PROJECT DIALOG 
    const renameDialog = document.getElementById('rename-project-dialog');
    const inputRename = document.getElementById('project-rename-input');
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

        renameForm.reset();
        renameDialog.close()
    })

    const closeRenameDialog = document.querySelector('.close-rename');
    closeRenameDialog.addEventListener('click', (e) => {
        e.preventDefault();
        renameForm.reset();
        renameDialog.close();
    }) 

}

