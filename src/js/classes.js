class Project {
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

class Task {
    constructor(title, description, duedate, priority, checked) {
        this.title = title;
        this.description = description;
        this.duedate = duedate;
        this.priority = priority;
        this.checked = checked;
    }
}

class Note {
    static noteList = [];

    constructor(title) {
        this.title = title;
        this.text = '';
        Note.noteList.push(this)
    }

    static deleteNote(note) {
        const index = Note.noteList.indexOf(note);
        Note.noteList.splice(index, 1)
    }
}


export { Project, Task, Note };