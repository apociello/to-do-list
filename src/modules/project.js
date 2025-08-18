export class Project {
    constructor(title) {
        this.title = title;
        this.taskList = []
    }
}

export function addTask(project, task) {
    return project.taskList.push(task)
}

export function logProjectTasks(project) {
    console.table(project.taskList)
}