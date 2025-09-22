import { allNotes } from "../data/noteData";

function notePage(noteName) {
    const mainDiv = document.getElementById('main-div');
    mainDiv.innerHTML = ''; 
    mainDiv.classList.add('height')

    const note = allNotes.find(n => n.title === noteName);
    if (!note) return;

    const title = document.getElementById('title');
    title.textContent = note.title;

    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Write your thoughts...'
    textarea.value = note.text;
    textarea.addEventListener('input', () => {
        note.text = textarea.value;
    });
    
    mainDiv.appendChild(textarea);
}

export {notePage}