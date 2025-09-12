import { allProjects } from "../projectData";

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

                    const taskDivRight = document.createElement('div')
                    taskDivRight.classList.add('task-div-right');


                    const checkBox = document.createElement('input');
                    checkBox.type = 'checkbox';
                    checkBox.classList.add('check-box')

                    const taskTitle = document.createElement('p')
                    taskTitle.textContent = task.title;

                    const dueDate = document.createElement('small');
                    dueDate.textContent = task.duedate;
                    
                    taskDivLeft.append(checkBox, taskTitle);
                    taskDivRight.append(dueDate);
                    taskDiv.append(taskDivLeft, taskDivRight)
                    mainDiv.append(taskDiv)
            })
            } 
        }
    })
}

export {projectPage}