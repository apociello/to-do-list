export class Project {
    static projectList = [];

    constructor(title) {
        this.title = title;
        this.taskList = []
        Project.projectList.push(this)
    }

    static deleteProject(project) {
        const index = Project.projectList.indexOf(project);
        Project.projectList.splice(index, 1)
    }

    addTask(task) {
        this.taskList.push(task)
    }

    deleteTask(task) {
        const index = this.taskList.indexOf(task);
        this.taskList.splice(index, 1)
    }
}