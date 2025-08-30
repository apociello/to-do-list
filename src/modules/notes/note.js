export class Note {
    static noteList = [];

    constructor(title) {
        this.title = title;
        this.text = '';
        Note.noteList.push(this)
    }

    static deleteNote(note) {
        const index = Note.noteList.indexOf(note);
        Note.noteList.splice(index, 1)
    }
}