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
                const taskp = document.createElement('p');
                taskp.textContent = task.title;
                mainDiv.append(taskp)
            })
            } 
        }
    })
}

export {projectPage}