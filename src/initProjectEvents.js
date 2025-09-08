import { projectPage } from "./main-page/projectPage.js";

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