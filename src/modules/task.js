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
    console.log(`Title: ${task.title}\nDescription: ${task.description}\nDue Date: ${task.duedate}\nPriority: ${task.priority}\nChecked: ${task.checked}   `)
}
