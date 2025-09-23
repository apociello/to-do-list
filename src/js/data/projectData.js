import { Project, Task } from "../classes.js";
import { sidebarAddProject } from "../uiManager.js";
import { addDays, format } from "date-fns";

const allProjects = Project.projectList;

function initDefaultProjects() {
    const today = new Date();

    const project1 = new Project("Personal Development");
    sidebarAddProject('Personal Development');

    const task1 = new Task(
    "Learn JavaScript",
    "Review classes and modules for the project",
    format(today, "yyyy-MM-dd"),
    "High",
    false
    );

    const task2 = new Task(
    "Workout",
    "30 minutes of cardio and stretching",
    format(today, "yyyy-MM-dd"),
    "Medium",
    false
    );

    const task3 = new Task(
    "Read a book",
    "Finish reading 50 pages of 'Clean Architecture'",
    format(addDays(today, 1), "yyyy-MM-dd"),
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
    format(addDays(today, 3), "yyyy-MM-dd"),
    "Medium",
    false
    );

    const task5 = new Task(
    "Update Resume",
    "Add recent projects and skills",
    format(addDays(today, 15), "yyyy-MM-dd"),
    "Medium",
    false
    );

    const task6 = new Task(
    "Networking",
    "Send follow-up emails to 3 contacts",
    format(addDays(today, 10), "yyyy-MM-dd"),
    "Low",
    false
    );

    project2.addTask(task4);
    project2.addTask(task5);
    project2.addTask(task6);

    console.log(allProjects)
}

export {allProjects, initDefaultProjects};