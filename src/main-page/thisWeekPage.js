import { getAllTasks, getWeekTasks } from "../modules/todo";
import { renderTasks } from "./renderTasks";

function thisWeekPage(projects) {
    const title = document.getElementById('title');
    title.textContent = 'This Week'

    const mainDiv = document.getElementById('main-div');
    mainDiv.textContent = '';
    mainDiv.contentEditable = "false";
    mainDiv.classList.remove('note');
    const allTasks = getAllTasks(projects);
    const weekTasks = getWeekTasks(allTasks);

    renderTasks(weekTasks);
}

export {thisWeekPage}