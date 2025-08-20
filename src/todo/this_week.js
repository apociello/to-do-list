import { isWithinInterval, addWeeks, startOfDay } from "date-fns";

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