import { isSameDay } from "date-fns";

export function collectTasks(projectList) {
    const allTasks = []

    for (const project of projectList) {
    const tasksArray = project.taskList;
    tasksArray.forEach(task => {
        allTasks.push(task)
    });
    }
    
    return allTasks;
}

export function getTodayTasks(allTasks) {
    const todayTasks = [];

    const todayDate = new Date();
    for (const task of allTasks) {
        const taskDate = new Date(task.duedate)
        if (isSameDay(taskDate, todayDate)) {
            todayTasks.push(task)
        }
    }

    return todayTasks
}
