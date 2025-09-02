//display taks of the proyects in main

function projectPage(project) {
    const title = document.getElementById('title');
        title.textContent = project.title;
    
        const mainDiv = document.getElementById('main-div');
        mainDiv.textContent = '';
        const tasks = project.taskList;
    
        tasks.forEach((task) => {
            const taskp = document.createElement('p');
            taskp.textContent = task.title;
            mainDiv.append(taskp)
        })
}


export {projectPage}