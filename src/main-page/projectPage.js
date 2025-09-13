import { allProjects } from "../projectData";
import editTaskImg from "../images/editTask.svg";
import trashImg from "../images/whiteTrash.svg"

function projectPage(projectName) {

    allProjects.forEach((project) => {
        if (project.title === projectName) {

            const title = document.getElementById('title');
            title.textContent = project.title;

            const addTaskBtn = document.querySelector('.add-task-btn')
            addTaskBtn.classList.remove('hidden')
            const mainDiv = document.getElementById('main-div');
            mainDiv.textContent = ''
            const tasks = project.taskList;

            if (tasks.length !== 0) {
                tasks.forEach((task) => {
                    const taskDiv = document.createElement('div');
                    taskDiv.classList.add('task-div')

                    const taskDivLeft = document.createElement('div')
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

                            console.log(task)
                        } else {
                            task.checked = false;
                            taskTitle.classList.toggle('task-done');
                            console.log(task)
                        }
                    })

                    const taskDivRight = document.createElement('div')
                    taskDivRight.classList.add('task-div-right');

                    const editTaskBtn = document.createElement('img');
                    editTaskBtn.src = editTaskImg;
                    editTaskBtn.alt = 'edit pencil img';
                    editTaskBtn.classList.add('task-btns');

                    const deleteTaskBtn = document.createElement('img');
                    deleteTaskBtn.src = trashImg;
                    deleteTaskBtn.alt = 'delete trash img';
                    deleteTaskBtn.classList.add('task-btns');

                    deleteTaskBtn.addEventListener('click', () => {
                        project.deleteTask(task);
                        taskDiv.remove();
                        console.log(project);
                    })

                    
                    
                    taskDivLeft.append(checkBox, taskTitle);
                    taskDivRight.append(editTaskBtn, deleteTaskBtn)
                    taskDiv.append(taskDivLeft, taskDivRight)
                    mainDiv.append(taskDiv)
            })
            } 
        }
    })
}

export {projectPage}