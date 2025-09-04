// Add project to the sidebar
import fileIcon from "../../images/file.svg";
import renameIcon from "../../images/edit.svg";
import trashIcon from "../../images/trash.svg"

function sidebarAddProject(projectName) {
    const projectList = document.querySelector('.project-list');

    const project = document.createElement('li');
    project.classList.add('file-line');
    project.dataset.id = projectName;
    
    const leftSideDiv = document.createElement('div');
    leftSideDiv.classList.add('sidebar-line-left')
    const icon1 = document.createElement("img");
    icon1.src = fileIcon;
    icon1.alt = 'written file icon';
    icon1.classList.add('file-icon')
    const projectTitle = document.createElement('p');
    projectTitle.textContent = projectName;

    const rightSideDiv = document.createElement('div');
    rightSideDiv.classList.add('sidebar-line-right')

    const icon2 = document.createElement("img");
    icon2.src = renameIcon;
    icon2.alt = 'pencil rename icon';
    icon2.classList.add('sidebar-line-right-icon');
    icon2.classList.add('open-rename-dialog');
    const renameDialog = document.getElementById('rename-project-dialog');
    const inputRename = document.getElementById('project-rename-input');

    icon2.addEventListener('click', (e) => {
    const projectLi = e.target.closest('.file-line');
    inputRename.value = projectLi.dataset.id;
    renameDialog.dataset.dialogId = inputRename.value;
    renameDialog.showModal();
    });

    const icon3 = document.createElement("img");
    icon3.src = trashIcon;
    icon3.alt = 'trash delete icon';
    icon3.classList.add('sidebar-line-right-icon')

    leftSideDiv.append(icon1, projectTitle);
    rightSideDiv.append(icon2,icon3)
    project.append(leftSideDiv, rightSideDiv)
    projectList.append(project)
}

export {sidebarAddProject}