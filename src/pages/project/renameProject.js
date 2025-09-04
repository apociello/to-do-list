
const renameDivDialog = document.getElementById('rename-project-dialog');

const closeDialog = document.querySelector('.close-rename');
closeDialog.addEventListener('click', () => dialog.close());

const openRenameDialog = document.getElementById('open-rename-dialog');
openRenameDialog.addEventListener('click', () => dialog.showModal());