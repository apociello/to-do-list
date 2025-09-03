// Add project to the sidebar
import fileIcon from "../../images/file.svg";

function sidebarAddProject(projectName) {
    const projectList = document.querySelector('.project-list');

    const project = document.createElement('li');
    project.classList.add('file-line');
    
    const leftSideDiv = document.createElement('div');
    leftSideDiv.classList.add('sidebar-line-left')
    const image = document.createElement("img");
    image.src = fileIcon;
    image.alt = 'written file icon';
    image.classList.add('file-icon')
    const projectTitle = document.createElement('p');
    projectTitle.textContent = projectName;

    leftSideDiv.append(image, projectTitle)
    project.append(leftSideDiv)
    projectList.append(project)
}

export {sidebarAddProject}