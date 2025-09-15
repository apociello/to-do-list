import { getAllTasks, getTodayTasks } from "../modules/todo";
import { renderTasks } from "../renderTasks";

function todayPage(projects) {
    const title = document.getElementById('title');
    title.textContent = 'Today'

    const mainDiv = document.getElementById('main-div');
    mainDiv.textContent = '';
    const allTasks = getAllTasks(projects);
    const todayTasks = getTodayTasks(allTasks);

    renderTasks(todayTasks);
}

export {todayPage}