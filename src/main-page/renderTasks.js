import { allProjects } from "../data/projectData";
import editTaskImg from "../images/editTask.svg";
import trashImg from "../images/whiteTrash.svg";

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

export {renderTasks}