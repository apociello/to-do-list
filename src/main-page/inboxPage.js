import { getAllTasks } from "../modules/todo.js";
import { renderTasks } from "./renderTasks.js";

function inboxPage(projects) {
    const title = document.getElementById('title');
    title.textContent = 'Inbox'

    const mainDiv = document.getElementById('main-div');
    mainDiv.textContent = '';
    mainDiv.contentEditable = "false";
    mainDiv.classList.remove('note');
    const allTasks = getAllTasks(projects);

    renderTasks(allTasks);
}

export {inboxPage}