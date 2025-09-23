import { Project, Task, Note } from "./classes.js";
import { allProjects } from "./data/projectData.js";
import { allNotes } from "./data/noteData.js";
import { inboxPage, todayPage, thisWeekPage, projectPage, notePage } from "./mainPage.js";
import { sidebarAddProject, projectExits, sidebarAddNote, noteExits } from "./uiManager.js";
import { format } from "date-fns";

function initSidebarEvents() {

    const inboxBtn = document.getElementById('inboxBtn');
    const todayBtn = document.getElementById('todayBtn');
    const thisWeekBtn = document.getElementById('weekBtn');
    const addTaskBtn = document.querySelector('.add-task-btn')

    inboxBtn.addEventListener('click', () => {
        inboxBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        inboxBtn.style.borderRadius = '5px';
        todayBtn.style.backgroundColor = '';
        thisWeekBtn.style.backgroundColor = '';
        addTaskBtn.classList.add('hidden')

        inboxPage(allProjects)
    })

    todayBtn.addEventListener('click', () => {
        inboxBtn.style.backgroundColor = '';
        todayBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        todayBtn.style.borderRadius = '5px';
        thisWeekBtn.style.backgroundColor = '';
        addTaskBtn.classList.add('hidden')

        todayPage(allProjects)
    })

    thisWeekBtn.addEventListener('click', () => {
        inboxBtn.style.backgroundColor = '';
        todayBtn.style.backgroundColor = '';
        thisWeekBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        thisWeekBtn.style.borderRadius = '5px';
        addTaskBtn.classList.add('hidden')

        thisWeekPage(allProjects)
    })

    // DEFAULT DISPLAY
    inboxBtn.click()
}

function initProjectEvents(newProjectBtn, projectName) {

    const inboxBtn = document.getElementById('inboxBtn');
    const todayBtn = document.getElementById('todayBtn');
    const thisWeekBtn = document.getElementById('weekBtn');
    const allProjectsBtns = document.querySelectorAll('.file-line');

    newProjectBtn.addEventListener('click', () => {

        const currentProjectName = newProjectBtn.dataset.id;

        const dinamicAllProjectBtns = document.querySelectorAll('.file-line');
        if (dinamicAllProjectBtns) {
            dinamicAllProjectBtns.forEach((projectBtn) => {
                projectBtn.style.backgroundColor = ''
            });
        }

        inboxBtn.style.backgroundColor = '';
        todayBtn.style.backgroundColor = '';
        thisWeekBtn.style.backgroundColor = '';
        newProjectBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        newProjectBtn.style.borderRadius = '5px';

        projectPage(currentProjectName);
    })

    inboxBtn.addEventListener('click', () => {
        newProjectBtn.style.backgroundColor = ''
    })

    todayBtn.addEventListener('click', () => {
        newProjectBtn.style.backgroundColor = ''
    })

    thisWeekBtn.addEventListener('click', () => {
        newProjectBtn.style.backgroundColor = ''
    })

    // DEFAULT NEW PROJECT
    projectPage(projectName);

    if (allProjectsBtns) {
        allProjectsBtns.forEach((projectBtn) => {
            projectBtn.style.backgroundColor = ''
        });
    }

    inboxBtn.style.backgroundColor = '';
    todayBtn.style.backgroundColor = '';
    thisWeekBtn.style.backgroundColor = '';
    newProjectBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
    newProjectBtn.style.borderRadius = '5px';
    
}

function initNoteEvents(newNoteBtn, noteName) {

    const inboxBtn = document.getElementById('inboxBtn');
    const todayBtn = document.getElementById('todayBtn');
    const thisWeekBtn = document.getElementById('weekBtn');
    const addTaskBtn = document.querySelector('.add-task-btn');

    newNoteBtn.addEventListener('click', () => {

        const currentNoteName = newNoteBtn.dataset.id;

        const dinamicAllFileLineBtns = document.querySelectorAll('.file-line');
        if (dinamicAllFileLineBtns) {
            dinamicAllFileLineBtns.forEach((fileBtn) => {
                fileBtn.style.backgroundColor = ''
            });
        }

        inboxBtn.style.backgroundColor = '';
        todayBtn.style.backgroundColor = '';
        thisWeekBtn.style.backgroundColor = '';
        newNoteBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        newNoteBtn.style.borderRadius = '5px';
        addTaskBtn.classList.add('hidden')

        notePage(currentNoteName);
    })

    inboxBtn.addEventListener('click', () => {
        newNoteBtn.style.backgroundColor = ''
    })

    todayBtn.addEventListener('click', () => {
        newNoteBtn.style.backgroundColor = ''
    })

    thisWeekBtn.addEventListener('click', () => {
        newNoteBtn.style.backgroundColor = ''
    })

    // DEFAULT NEW PROJECT
    newNoteBtn.click()
    
}

function initDialogEvents() {

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


    //ADD/EDIT TASK DIALOG 
    const taskDialog = document.getElementById('task-dialog');
    const taskForm = document.querySelector('.task-form');
    const openTaskDialog = document.querySelector('.add-task-btn');
    const closeTaskDialog = document.querySelector('.close-add-task');

    openTaskDialog.addEventListener('click', () => {
        const dueDate = document.getElementById("date");
        dueDate.value = format(new Date(), "yyyy-MM-dd");
        taskDialog.showModal()
    });

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = taskForm.querySelector('#Title').value;
        const description = taskForm.querySelector('#description').value;
        const dueDate = taskForm.querySelector('#date').value;
        const priority = taskForm.querySelector('#priority').value;

        const mainDivTitle = document.getElementById('title').textContent;
        
        if (taskDialog.dataset.edit === "false") {
            const newTask = new Task(title, description, dueDate, priority, false)
            console.log(newTask)
            allProjects.forEach((project) => {
                if (project.title === mainDivTitle) {
                    project.addTask(newTask);
                    projectPage(project.title)
                    console.log(allProjects)
                }
            })
        } else {
            allProjects.forEach((project) => {
                project.taskList.forEach((task) => {
                    if (task.title === taskDialog.dataset.taskName) {
                        task.title = title;
                        task.description = description;
                        task.duedate = dueDate;
                        task.priority = priority;
                        console.log(allProjects);

                        if (mainDivTitle === 'Inbox') {
                            inboxPage(allProjects)
                        } else if (mainDivTitle === 'Today') {
                                todayPage(allProjects)
                        } else if (mainDivTitle === 'This Week'){
                            thisWeekPage(allProjects)
                        } else (projectPage(project.title))
                    }
                })
            })
            taskDialog.dataset.edit = "false"
        } 
        
        taskForm.reset();
        taskDialog.close();
    } )

    closeTaskDialog.addEventListener('click', (e) => {
        e.preventDefault();
        taskDialog.dataset.edit = "false";
        taskDialog.dataset.taskName = "";
        taskForm.reset();
        taskDialog.close();
    }) 


    //ADD NOTE DIALOG
    const addNoteDialog = document.getElementById('add-note-dialog');
    const addNoteForm = document.querySelector('.add-note-form');
    const addNoteInput = document.getElementById('note-name');
    const openAddNoteDialog = document.getElementById('open-add-note-dialog');
    const addNoteError = document.getElementById('add-note-error');
    const closeAddNoteDialog = document.querySelector('.close-add-note-dialog');

    openAddNoteDialog.addEventListener('click', () => addNoteDialog.showModal());
    addNoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const noteName = addNoteInput.value;
        
        if(noteExits(noteName)) {
            addNoteError.classList.remove('hidden')
        } else {
            addNoteError.classList.add('hidden');
            new Note(noteName);
            sidebarAddNote(noteName);
            console.log(allNotes);
            addNoteForm.reset();
            addNoteDialog.close();
        }
    })

    closeAddNoteDialog.addEventListener('click', (e) => {
        e.preventDefault();
        addNoteForm.reset();
        addNoteError.classList.add('hidden');
        addNoteDialog.close();
    })



    const renameNoteDialog = document.getElementById('rename-note-dialog');
    const inputNoteRename = document.getElementById('note-rename-input');
    const renameNoteForm = document.querySelector('.rename-note-form');
    const renameNoteError = document.getElementById('rename-note-error')
    const closeRenameNoteDialog = document.querySelector('.close-rename-note');

    renameNoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let oldNoteId = renameNoteDialog.dataset.dialogId;
        const noteLi = document.querySelector(`[data-id="${oldNoteId}"]`)
        const p = noteLi.querySelector('p');

        if(inputNoteRename.value.toLowerCase() === oldNoteId.toLowerCase() || !noteExits(inputNoteRename.value)) {
            renameNoteError.classList.add('hidden');
            allNotes.forEach((note) => {
                if (note.title === oldNoteId) {
                    note.title = inputNoteRename.value;
                }
            })
            console.log(allNotes)

            //RENDER MAIN-DIV
            const mainDivTitle = document.getElementById('title').textContent;
            if (mainDivTitle === oldNoteId) {
                notePage(inputNoteRename.value)
            }

            noteLi.dataset.id = inputNoteRename.value;
            oldNoteId = inputNoteRename.value;
            p.textContent = inputNoteRename.value;

            renameNoteForm.reset();
            renameNoteDialog.close();

        } else if (noteExits(inputNoteRename.value)) {
            renameNoteError.classList.remove('hidden');
        }
    })

    closeRenameNoteDialog.addEventListener('click', (e) => {
        e.preventDefault();
        renameNoteForm.reset();
        renameNoteError.classList.add('hidden');
        renameNoteDialog.close();
    })

}


export { initSidebarEvents, initProjectEvents, initNoteEvents, initDialogEvents };