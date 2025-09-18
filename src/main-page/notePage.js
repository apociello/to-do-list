import { allNotes } from "../data/noteData";

function notePage(noteName) {
    const mainDiv = document.getElementById('main-div');
    
    mainDiv.textContent = '';
    mainDiv.replaceWith(mainDiv.cloneNode(false)); 
    const newMainDiv = document.getElementById('main-div'); 

    allNotes.forEach((note) => {
        if (note.title === noteName) {
            const title = document.getElementById('title');
            title.textContent = note.title;

            newMainDiv.contentEditable = "true";
            newMainDiv.spellcheck = "false";
            newMainDiv.classList.add('note');
            newMainDiv.textContent = note.text;

            newMainDiv.addEventListener('input', () => {
                note.text = newMainDiv.textContent;
            });
        }
    });
}

export {notePage}