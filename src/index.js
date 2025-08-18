import {Task, logTaskDetails, changeTaskTitle, changeTaskDescription, changeTaskDueDate, changeTaskPriority, changeTaskCheckedStatus} from "./modules/task.js"

window.Task = Task;
window.logTaskDetails = logTaskDetails;
window.changeTaskTitle = changeTaskTitle;
window.changeTaskDescription = changeTaskDescription;
window.changeTaskDueDate = changeTaskDueDate;
window.changeTaskPriority = changeTaskPriority;
window.changeTaskCheckedStatus = changeTaskCheckedStatus; 



//const task = new Task('Minecraft', 'Kill the dragon', '23/08/25', 'High', 'false')