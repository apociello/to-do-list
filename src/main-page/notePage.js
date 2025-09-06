function notePage(note) {
     const title = document.getElementById('title');
        title.textContent = note.title;
    
        const mainDiv = document.getElementById('main-div');
        mainDiv.textContent = note.text;
}

export {notePage}