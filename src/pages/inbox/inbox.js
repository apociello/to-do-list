import { getAllTasks } from "../../modules/todo/todo.js";


function inbox(projects) {
    const title = document.getElementById('title');
    title.textContent = 'Inbox'

    const mainDiv = document.getElementById('main-div');
    mainDiv.textContent = '';
    const allTasks = getAllTasks(projects);

    allTasks.forEach((task) => {
        const taskp = document.createElement('p');
        taskp.textContent = task.title;
        mainDiv.append(taskp)
    })

}

export {inbox}