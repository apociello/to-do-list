export class Task {
    constructor(title, description, duedate, priority, checked) {
        this.title = title;
        this.description = description;
        this.duedate = duedate;
        this.priority = priority;
        this.checked = checked;
    }
}

export function logTaskDetails(task) {
    console.log(`TITLE: ${task.title}, DESCRIPTION: ${task.description}, DATE: ${task.duedate}, PRIORITY: ${task.priority}, CHECKED: ${task.checked}   `)
}

export function changeTaskTitle(task, newTitle) {
    return task.title = newTitle
}

export function changeTaskDescription(task, newDescription) {
    return task.description = newDescription
}

export function changeTaskDueDate(task, newDueDate) {
    return task.duedate = newDueDate
}

export function changeTaskPriority(task, newPriority) {
    return task.priority = newPriority
}

export function changeTaskCheckedStatus(task) {
    return task.checked = task.checked === 'false' ? 'true' : 'false'
}