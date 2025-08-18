export class Task {
    constructor(title, description, duedate, priority, checked) {
        this.title = title;
        this.description = description;
        this.duedate = duedate;
        this.priority = priority;
        this.checked = checked;
    }
}

export function logDetails(task) {
    console.log(`TITLE: ${task.title}, DESCRIPTION: ${task.description}, DATE: ${task.duedate}, PRIORITY: ${task.priority}, CHECKED: ${task.checked}   `)
}