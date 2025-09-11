import { Project } from "./modules/project.js";
import { allProjects } from "./projectData.js";
import { sidebarAddProject } from "./addProyect.js";
import { projectPage } from "./main-page/projectPage.js";
import { projectExits } from "./addProyect.js";
import { Task } from "./modules/task.js";


export function initDialogEvents() {
    
    //ADD PROJECT DIALOG
    const addProjectDialog = document.getElementById('add-project-dialog');
    const addProjectForm = document.querySelector('.add-project-form');
    const addProjectInput = document.getElementById('project-name')
    const openAddProjectDialog = document.getElementById('open-add-project-dialog');
    const addError = document.getElementById('add-error');
    const closeAddProjectDialog = document.querySelector('.close-add-project-dialog');

    openAddProjectDialog.addEventListener('click', () => addProjectDialog.showModal());
    addProjectForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const projectName = addProjectInput.value;
        
        if (projectExits(projectName)) {
            addError.classList.remove('hidden')
        } else {
            addError.classList.add('hidden')
            new Project(projectName);
            sidebarAddProject(projectName);
            console.log(allProjects) 
            addProjectForm.reset();
            addProjectDialog.close()
        }
    })

    closeAddProjectDialog.addEventListener('click', (e) => {
        e.preventDefault();
        addProjectForm.reset();
        addError.classList.add('hidden');
        addProjectDialog.close();
    }) 

    // RENAME PROJECT DIALOG 
    const renameDialog = document.getElementById('rename-project-dialog');
    const inputRename = document.getElementById('project-rename-input');
    const renameForm = document.querySelector('.rename-form');
    const renameError = document.getElementById('rename-error')
    const closeRenameDialog = document.querySelector('.close-rename');

    renameForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let oldProjectId = renameDialog.dataset.dialogId;
        const projectLi = document.querySelector(`[data-id="${oldProjectId}"]`)
        const p = projectLi.querySelector('p');

        if (inputRename.value.toLowerCase() === oldProjectId.toLowerCase() || !projectExits(inputRename.value) ) {
            renameError.classList.add('hidden')
            allProjects.forEach((project) => {
            if (project.title === oldProjectId) {
                project.title = inputRename.value;
            }
            })
            console.log(allProjects)

                //RERENDER MAIN-DIV
            const mainDivTitle = document.getElementById('title').textContent;
            if (mainDivTitle === oldProjectId) {
                projectPage(inputRename.value);
            }
            
            projectLi.dataset.id = inputRename.value;
            oldProjectId = inputRename.value;
            p.textContent = inputRename.value;

            renameForm.reset();
            renameDialog.close()
        } else if (projectExits(inputRename.value)) {
            renameError.classList.remove('hidden');
        }
    })

    closeRenameDialog.addEventListener('click', (e) => {
        e.preventDefault();
        renameForm.reset();
        renameError.classList.add('hidden')
        renameDialog.close();
    }) 


    //ADD TASK DIALOG 
    const addTaskDialog = document.getElementById('add-task-dialog');
    const addTaskForm = document.querySelector('.add-task-form');
    const openAddTaskDialog = document.querySelector('.add-task-btn');
    const closeAddTaskDialog = document.querySelector('.close-add-task');

    openAddTaskDialog.addEventListener('click', () => addTaskDialog.showModal())

    addTaskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // get form data
        const title = addTaskForm.querySelector('#Title').value;
        const description = addTaskForm.querySelector('#description').value;
        const dueDate = addTaskForm.querySelector('#date').value;
        const priority = addTaskForm.querySelector('#priority').value;

        const newTask = new Task(title, description, dueDate, priority, false)
        console.log(newTask)

        const mainDivTitle = document.getElementById('title').textContent;
        allProjects.forEach((project) => {
            if (project.title === mainDivTitle) {
                project.addTask(newTask);
                projectPage(project.title)
                console.log(project.taskList);
                console.log(allProjects)
            }
        })


        addTaskForm.reset();
        addTaskDialog.close();
    } )

    closeAddTaskDialog.addEventListener('click', (e) => {
        e.preventDefault();
        addTaskForm.reset();
        addTaskDialog.close();
    }) 
}