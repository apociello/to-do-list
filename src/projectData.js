import { Project } from "./modules/project.js"

export const allProjects = Project.projectList;




// DEFAULT PROJECTS IN THE APP
import { Task } from "./modules/task.js"
import { getAllTasks, getTodayTasks, getWeekTasks } from "./modules/todo.js";
import { Note } from "./modules/note.js";
import { sidebarAddProject } from "./addProyect.js";

export function logDefaultProjects() {
    const project1 = new Project("Personal Development");
    sidebarAddProject('Personal Development');

    const task1 = new Task(
    "Learn JavaScript",
    "Review classes and modules for the project",
    "2025-09-15",
    "High",
    false
    );

    const task2 = new Task(
    "Workout",
    "30 minutes of cardio and stretching",
    "2025-09-16",
    "Medium",
    false
    );

    const task3 = new Task(
    "Read a book",
    "Finish reading 50 pages of 'Atomic Habits'",
    "2025-09-27",
    "Low",
    false
    );

    project1.addTask(task1)
    project1.addTask(task2)
    project1.addTask(task3)

    const project2 = new Project("Work & Career");
    sidebarAddProject('Work & Career');

    const task4 = new Task(
    "Prepare Presentation",
    "Create slides for Monday's meeting",
    "2025-09-20",
    "High",
    false
    );

    const task5 = new Task(
    "Update Resume",
    "Add recent projects and skills",
    "2025-09-17",
    "Medium",
    false
    );

    const task6 = new Task(
    "Networking",
    "Send follow-up emails to 3 contacts",
    "2025-09-11",
    "Low",
    false
    );

    project2.addTask(task4);
    project2.addTask(task5);
    project2.addTask(task6);


    const note1 = new Note('Games');
    note1.text = 'Minecraft, Stardew Valley, Rocket League, Resident Evil';

    const note2 = new Note('Cat');
    note2.text = 'Ronny, Maya';


    // console log
    // TO DO
    const allTasks = getAllTasks(allProjects);
    console.log(allTasks)

    // PROJECTS
    console.log(allProjects)

    //NOTES
    //console.log(allNotes);

}
