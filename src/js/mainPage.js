import { startOfDay, isWithinInterval, addWeeks, isSameDay } from "date-fns"
import { allProjects } from "./data/projectData.js";
import { allNotes } from "./data/noteData.js";
import editTaskImg from "../images/editTask.svg";
import trashImg from "../images/whiteTrash.svg";



function inboxPage(projects) {
    const title = document.getElementById('title');
    title.textContent = 'Inbox';
    
    const mainDiv = document.getElementById('main-div');
    mainDiv.textContent = '';
    const allTasks = getAllTasks(projects);

    renderTasks(allTasks);
}


function todayPage(projects) {
    const title = document.getElementById('title');
    title.textContent = 'Today'

    const mainDiv = document.getElementById('main-div');
    mainDiv.textContent = '';
    const allTasks = getAllTasks(projects);
    const todayTasks = getTodayTasks(allTasks);

    renderTasks(todayTasks);
}

function thisWeekPage(projects) {
    const title = document.getElementById('title');
    title.textContent = 'This Week'

    const noteDiv = document.querySelector('.note-div');
    if (noteDiv){
        noteDiv.remove();
    }

    const mainDiv = document.getElementById('main-div');
    mainDiv.textContent = '';
    const allTasks = getAllTasks(projects);
    const weekTasks = getWeekTasks(allTasks);

    renderTasks(weekTasks);
}


function projectPage(projectName) {

    allProjects.forEach((project) => {
        if (project.title === projectName) {

            const title = document.getElementById('title');
            title.textContent = project.title;

            const addTaskBtn = document.querySelector('.add-task-btn')
            addTaskBtn.classList.remove('hidden');

            const mainDiv = document.getElementById('main-div');
            mainDiv.textContent = ''
            mainDiv.classList.remove('height');
            
            const tasks = project.taskList;
            if (tasks.length !== 0) {
                renderTasks(tasks);
            } 
        }
    })
}


function notePage(noteName) {
    const mainDiv = document.getElementById('main-div');
    mainDiv.innerHTML = ''; 
    mainDiv.classList.add('height')

    const note = allNotes.find(n => n.title === noteName);
    if (!note) return;

    const title = document.getElementById('title');
    title.textContent = note.title;

    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Write your thoughts...'
    textarea.value = note.text;
    textarea.addEventListener('input', () => {
        note.text = textarea.value;
    });
    
    mainDiv.appendChild(textarea);
}


function getAllTasks(projectList) {
    const allTasks = []

    for (const project of projectList) {
    const tasksArray = project.taskList;
    tasksArray.forEach(task => {
        allTasks.push(task)
    });
    }
    
    return allTasks;
}


function getWeekTasks(allTasks) {
    const weekTasks = [];

    const todayDate = startOfDay(new Date());
    const oneWeek = startOfDay(addWeeks(todayDate, 1));

    for (const task of allTasks) {
            const taskDate = startOfDay(new Date(task.duedate));
            const oneWeekInterval = isWithinInterval(taskDate, {start: todayDate, end: oneWeek})
            if (oneWeekInterval) {
                weekTasks.push(task)
            }
        }
        return weekTasks
}


function getTodayTasks(allTasks) {
    const todayTasks = [];

    const todayDate = new Date();
    for (const task of allTasks) {
        const taskDate = new Date(task.duedate)
        if (isSameDay(taskDate, todayDate)) {
            todayTasks.push(task)
        }
    }

    return todayTasks
}


function renderTasks(tasks) {
    const projects = allProjects;
    const mainDiv = document.getElementById('main-div');

    tasks.forEach((task) => {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-div');

    const taskDivLeft = document.createElement('div');
    taskDivLeft.classList.add('task-div-left');

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.classList.add('check-box');
    checkBox.checked = task.checked;

    const taskTitle = document.createElement('p');
    taskTitle.textContent = task.title;
    if (task.checked) {
        taskTitle.classList.add('task-done');
    }

    checkBox.addEventListener('change', () => {
        if (checkBox.checked) {
            task.checked = true;
            taskTitle.classList.toggle('task-done');
            console.log(allProjects);
        } else {
            task.checked = false;
            taskTitle.classList.toggle('task-done');
            console.log(allProjects);
        }
    });

    const taskDivRight = document.createElement('div');
    taskDivRight.classList.add('task-div-right');

    const editTaskBtn = document.createElement('img');
    editTaskBtn.src = editTaskImg;
    editTaskBtn.alt = 'edit pencil img';
    editTaskBtn.classList.add('task-btns');

    // EDIT TASK
    const editTaskDialog = document.getElementById('task-dialog');
    const editTaskForm = document.querySelector('.task-form');
    const saveBtn = document.querySelector('.save');

    editTaskBtn.addEventListener('click', () => {
        editTaskDialog.dataset.edit = "true";
        editTaskDialog.dataset.taskName = task.title;

        editTaskForm.querySelector("#Title").value = task.title;
        editTaskForm.querySelector("#description").value = task.description;
        editTaskForm.querySelector("#date").value = task.duedate;
        editTaskForm.querySelector("#priority").value = task.priority;

        saveBtn.textContent = 'Save';
        editTaskDialog.showModal();
    });

    // DELETE TASK
    const deleteTaskBtn = document.createElement('img');
    deleteTaskBtn.src = trashImg;
    deleteTaskBtn.alt = 'delete trash img';
    deleteTaskBtn.classList.add('task-btns');

    deleteTaskBtn.addEventListener('click', () => {
        projects.forEach((project) => {
            project.taskList.forEach((projectTask) => {
                if (task === projectTask) {
                    project.deleteTask(task);
                    taskDiv.remove();
                    console.log(allProjects)
                }
            });
        });
    });

    taskDivLeft.append(checkBox, taskTitle);
    taskDivRight.append(editTaskBtn, deleteTaskBtn);
    taskDiv.append(taskDivLeft, taskDivRight);
    mainDiv.append(taskDiv);
});

}


export { inboxPage, todayPage, thisWeekPage, projectPage, notePage }