import { allProjects } from "./data/projectData.js";
import { inboxPage } from "./main-page/inboxPage.js";
import { todayPage } from "./main-page/todayPage.js";
import { thisWeekPage } from "./main-page/thisWeekPage.js";
import { projectPage } from "./main-page/projectPage.js";
import { notePage } from "./main-page/notePage.js";

export function initSidebarEvents() {

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

export function initProjectEvents(newProjectBtn, projectName) {

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

export function initNoteEvents(newNoteBtn, noteName) {

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