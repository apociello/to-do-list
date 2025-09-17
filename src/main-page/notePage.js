import { allNotes } from "../data/noteData";

function notePage(noteName) {
        allNotes.forEach((note) => {
                if (note.title === noteName) {
                        const title = document.getElementById('title');
                        title.textContent = note.title;
                
                        const mainDiv = document.getElementById('main-div');
                        mainDiv.textContent = note.text;
                }
        })
        
}

export {notePage}