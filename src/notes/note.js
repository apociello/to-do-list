export class Note {
    static noteList = [];
    constructor(title) {
        this.title = title;
        this.text = '';
        Note.noteList.push(this)
    }
}