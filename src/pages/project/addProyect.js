// Add project to the sidebar
import fileIcon from "../../images/file.svg";

function sidebarAddProject(projectName) {
    const projectList = document.querySelector('.project-list');

    const project = document.createElement('li');
    project.classList.add('file-line');
    
    const image = document.createElement("img");
    image.src = fileIcon;
    image.alt = 'written file icon';
    image.classList.add('file-icon')
    const projectTitle = document.createElement('p');
    projectTitle.textContent = projectName;

    project.append(image, projectTitle)
    projectList.append(project)
}

export {sidebarAddProject}