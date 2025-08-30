import { getAllTasks, getWeekTasks } from "../../modules/todo/todo";

function this_week(projects) {
    const title = document.getElementById('title');
    title.textContent = 'This Week'

    const mainDiv = document.getElementById('main-div');
    mainDiv.textContent = '';
    const allTasks = getAllTasks(projects);
    const weekTasks = getWeekTasks(allTasks);

    weekTasks.forEach((task) => {
        const taskp = document.createElement('p');
        taskp.textContent = task.title;
        mainDiv.append(taskp)
    })
}

export {this_week}