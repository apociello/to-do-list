import { Note } from "../modules/note.js";
import { sidebarAddNote } from "../addNote.js";

export const allNotes = Note.noteList;


export function logDefaultNotes() {
    const note1 = new Note('Games');
    note1.text = 'Resident Evil 7, Minecraft, Stardew Valley, Rocket League.';
    sidebarAddNote('Games');

    const note2 = new Note('Cats');
    note2.text = 'Ronny, Maya.';
    sidebarAddNote('Cats')

    //NOTES
    console.log(allNotes);
}