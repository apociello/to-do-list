import { greeting } from "./greeting";
import {Task} from "./modules/task.js"

console.log(greeting);

const task1 = new Task("Minecraft", "We are playing Minecraft: We need diamonds!", "16/08/2025", "High", "false" );

console.log(task1);
console.log(task1.title);
console.log(task1.description);
console.log(task1.priority);
