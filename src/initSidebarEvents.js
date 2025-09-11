import { allProjects } from "./projectData.js";
import { inboxPage } from "./main-page/inboxPage.js";
import { todayPage } from "./main-page/todayPage.js";
import { thisWeekPage } from "./main-page/thisWeekPage.js";

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