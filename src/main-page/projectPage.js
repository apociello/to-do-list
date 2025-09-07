import { allProjects } from "../projectData";

function projectPage(projectName) {

    allProjects.forEach((project) => {
        if (project.title === projectName) {

            const title = document.getElementById('title');
            title.textContent = project.title;
            
            const mainDiv = document.getElementById('main-div');
            mainDiv.textContent = 'NO HAY TASKS!';
            const tasks = project.taskList;
            
            tasks.forEach((task) => {
                const taskp = document.createElement('p');
                taskp.textContent = task.title;
                mainDiv.append(taskp)
            })
        }
    })
}

export {projectPage}