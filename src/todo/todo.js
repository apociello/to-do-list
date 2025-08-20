import { startOfDay, isWithinInterval, addWeeks, isSameDay } from "date-fns"

export function getAllTasks(projectList) {
    const allTasks = []

    for (const project of projectList) {
    const tasksArray = project.taskList;
    tasksArray.forEach(task => {
        allTasks.push(task)
    });
    }
    
    return allTasks;
}

export function getWeekTasks(allTasks) {
    const weekTasks = [];

    const todayDate = startOfDay(new Date());
    const oneWeek = startOfDay(addWeeks(todayDate, 1));

    for (const task of allTasks) {
            const taskDate = startOfDay(new Date(task.duedate));
            const oneWeekInterval = isWithinInterval(taskDate, {start: todayDate, end: oneWeek})
            if (oneWeekInterval) {
                weekTasks.push(task)
            }
        }
        return weekTasks
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
