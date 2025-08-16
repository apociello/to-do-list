import { greeting } from "./greeting";

console.log(greeting);

class CreateTask {
    constructor(title, description, duedate, priority, checked) {
        this.title = title;
        this.description = description;
        this.duedate = duedate;
        this.priority = priority;
        this.checked = checked;
    }
}

const task1 = new CreateTask("Minecraft", "We are playing Minecraft: We need diamonds!", "16/08/2025", "High", "false" );

console.log(task1);
console.log(task1.title);
console.log(task1.description);
console.log(task1.priority);
