import { Note } from "../modules/note.js";
import { sidebarAddNote } from "../addNote.js";

export const allNotes = Note.noteList;


export function logDefaultNotes() {
    const note1 = new Note('Quotes');
    note1.text = `~ Henry Ford ~
Whether you think you can or think you can't, you are right.

~ Michelangelo ~
If people knew how hard I had to work to gain my mastery, it wouldn't seem wonderful at all.

~ Denis Waitley ~
I had the blues because I had no shoes, until upon the street, I met a man who had no feet.

~ Reinhold Niebuhr ~
God grant me the serenity to accept the things I cannot change, the courage to change the things I can, and the wisdom to know the difference.`;

    sidebarAddNote('Quotes');

    const note2 = new Note('Birthdays');
    note2.text = `- Alex Thompson: March 12, 1992  
- Emily Rivera: July 8, 1988  
- Michael Chen: November 23, 1995  
- Sophia Patel: February 14, 1990  
- Daniel Brooks: September 30, 1993  
- Olivia Martinez: June 5, 1991  
- Liam Johnson: December 18, 1989  
- Isabella Lopez: January 22, 1994  
- Ethan White: October 10, 1992  
- Grace Kim: May 16, 1990
`;
    sidebarAddNote('Birthdays')

    //NOTES
    console.log(allNotes);
}