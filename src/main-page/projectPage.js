import { allProjects } from "../data/projectData";
import { renderTasks } from "./renderTasks";

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
                renderTasks(tasks);
            } 
        }
    })
}

export {projectPage}