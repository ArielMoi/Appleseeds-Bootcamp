const toDoListElement = document.querySelector('.todo-list');

const ballIcon = '<i class="fas fa-circle"></i>';

const submitNote = document.querySelector('.input-todo button');

const toDoObj = {};

let id = 0; /// initialize id number from local storage
for (let idFromStorage of Object.keys(localStorage)) {
    if (parseInt(id) < parseInt(idFromStorage)) {
        id = idFromStorage; // initialize ID
    }
}


function editIcon(id) {
    return `<i data-id='${id}' class="far fa-edit"></i>`
} // function to add data-id and current id to the icon (helps recognize the note and delete it)

function trashIcon(id) {
    return `<i data-id='${id}' class="far fa-trash-alt"></i>`
} // function to add data-id and current id to the icon (helps recognize the note and delete it)

function createNote(text, priority = 0, isCompleted = false) {
    let dateOfNote = new Date(); // collect info on current date
    localStorage.setItem(++id, [text, `${dateOfNote.getHours()}:${dateOfNote.getMinutes()},${dateOfNote.getDate()}/${dateOfNote.getMonth() + 1}/${dateOfNote.getFullYear()}`,
        priority, isCompleted
    ]) // set item in browser memory

    updateNotes();
}

function createNoteInHtml(id, priorityOfNote, checked = false) { // publish note -- is called inside create element
    /// creates the html needed
    let note = document.createElement('div');
    let text = document.createElement('p');
    let checkboxAndButtonDiv = document.createElement('div');
    let edit = document.createElement('button');
    let priorityShowcase = document.createElement('i');
    let checkbox = document.createElement('input');
    let button = document.createElement('button');

    let date = document.createElement('p'); //adding to date
    date.innerText = `${localStorage.getItem(id).split(',')[1]},${localStorage.getItem(id).split(',')[2]}`;
    date.setAttribute('style', 'position:absolute; left:0;font-size:10px;top:0;')


    text.innerText = localStorage.getItem(id).split(',')[0];

    priorityShowcase.innerHTML = ballIcon;
    switch (priorityOfNote) { // modify icon color by priority
        case '0':
            priorityShowcase.style.color = 'green';
            break;
        case '1':
            priorityShowcase.style.color = 'yellow';
            break;
        case '2':
            priorityShowcase.style.color = 'red';
            break;
    }

    edit.innerHTML = editIcon(id);
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("data-id", id);
    button.innerHTML = trashIcon(id);

    if (checked) { // make checked if user checked it
        checkbox.checked = true;
    }

    checkboxAndButtonDiv.appendChild(edit);
    checkboxAndButtonDiv.appendChild(priorityShowcase);
    checkboxAndButtonDiv.appendChild(checkbox);
    checkboxAndButtonDiv.appendChild(button);

    note.appendChild(date); /////
    note.appendChild(text);
    note.appendChild(checkboxAndButtonDiv);

    note.setAttribute('data-id', id);

    toDoListElement.appendChild(note); // appent to html
}

function deleteNote(id) {
    localStorage.removeItem(id)
    updateNotes();
}

function updateNotes() { ///// make shorter ---> (sort not suitable to local storage)
    toDoListElement.innerHTML = '';
    for (let [id, note] of Object.entries(localStorage)) {
        let priority = note.split(',')[3];
        if (note.split(',')[4] == 'false' && priority == 2) createNoteInHtml(id, priority)
    }
    for (let [id, note] of Object.entries(localStorage)) {
        let priority = note.split(',')[3];
        if (note.split(',')[4] == 'false' && priority == 1) createNoteInHtml(id, priority)
    }
    for (let [id, note] of Object.entries(localStorage)) {
        let priority = note.split(',')[3];
        if (note.split(',')[4] == 'false' && priority == 0) createNoteInHtml(id, priority)
    }
    for (let [id, note] of Object.entries(localStorage)) {
        let priority = note.split(',')[3];
        if (note.split(',')[4] == 'true' && priority == 2) createNoteInHtml(id, priority, true)
    }
    for (let [id, note] of Object.entries(localStorage)) {
        let priority = note.split(',')[3];
        if (note.split(',')[4] == 'true' && priority == 1) createNoteInHtml(id, priority, true)
    }
    for (let [id, note] of Object.entries(localStorage)) {
        let priority = note.split(',')[3];
        if (note.split(',')[4] == 'true' && priority == 0) createNoteInHtml(id, priority, true)
    }
}

function markAsDone(id, doneOrNotDone) {
    let noteDetails = localStorage.getItem(id).split(',');
    noteDetails[4] = doneOrNotDone;
    localStorage.removeItem(id);
    localStorage.setItem(id, noteDetails);

    updateNotes()
}

function editNote(id) {
    document.querySelector('.edit-input').style.visibility = 'visible';
    document.querySelector('.edit-input textarea').value = localStorage.getItem(id).split(',')[0];

    document.querySelector('.edit-input button').addEventListener('click', () => {
        updateNoteFromEdit(id, document.querySelector('.edit-input textArea').value)
    document.querySelector('.edit-input').style.visibility = 'hidden';
    })
}


function updateNoteFromEdit(id, text){
    let noteDetails = localStorage.getItem(id).split(',');
    noteDetails[0] = text;
    localStorage.removeItem(id);
    localStorage.setItem(id, noteDetails);

    updateNotes()
}


// event listeners

toDoListElement.addEventListener('click', (e) => {
    let id = e.target.getAttribute('data-id');
    if (e.target.type == 'checkbox') {
        markAsDone(id, e.target.checked)
    } else if (e.target.classList.contains('fa-trash-alt')) {
        deleteNote(id)
    } else if (e.target.classList.contains('fa-edit')) {
        editNote(id)
        updateNoteFromEdit(id);
    }
})


submitNote.addEventListener('click', (e) => {
    const noteText = document.querySelector('.input-todo textArea');
    const priority = document.querySelector('select');
    let userPriority;
    for (let option of priority.options) {
        if (option.selected) {
            userPriority = option.value /// indication of note priority
        }
    }
    createNote(noteText.value, userPriority) // create the note
    noteText.value = ''; // reset the text area
})

document.querySelector('header button').addEventListener('click', () => { // deletes all notes
    localStorage.clear();
    updateNotes();
})


// ----- initialize
updateNotes(); /// initializing notes

