import { getAllTasks, getTodayTasks } from "../modules/todo";

function todayPage(projects) {
    const title = document.getElementById('title');
    title.textContent = 'Today'

    const mainDiv = document.getElementById('main-div');
    mainDiv.textContent = '';
    const allTasks = getAllTasks(projects);
    const todayTasks = getTodayTasks(allTasks);

    todayTasks.forEach((task) => {
        const taskp = document.createElement('p');
        taskp.textContent = task.title;
        mainDiv.append(taskp)
    })
}

export {todayPage}