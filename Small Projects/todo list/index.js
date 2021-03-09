const toDoListElement = document.querySelector('.todo-list');

function trashIcon(id) {
    return `<i data-id='${id}' class="far fa-trash-alt"></i>`
}
// const trashIcon = '<i class="far fa-trash-alt"></i>';

const toDoObj = {};
let id = 0;

function createNote(text, isCompleted = false, priority = 0) {
    let dateOfNote = new Date();
    // toDoObj[++id] = [text, `${dateOfNote.getHours()}:${dateOfNote.getMinutes()},${dateOfNote.getDate()}/${dateOfNote.getMonth() + 1}/${dateOfNote.getFullYear()}`,
    //     priority, isCompleted
    // ];

    localStorage.setItem(++id, [text, `${dateOfNote.getHours()}:${dateOfNote.getMinutes()},${dateOfNote.getDate()}/${dateOfNote.getMonth() + 1}/${dateOfNote.getFullYear()}`,
        priority, isCompleted
    ])

    // createNoteInHtml(id) // or in show my notes --- ! 
}

function createNoteInHtml(id, checked = false) { // publish note -- is called inside create element
    /// creates al the html needed
    // returns the element// will be used inside create note
    let note = document.createElement('div');
    let text = document.createElement('p');
    let checkboxAndButtonDiv = document.createElement('div');
    let checkbox = document.createElement('input');
    let button = document.createElement('button');

    text.innerText = localStorage.getItem(id).split(',')[0];
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("data-id", id);
    button.innerHTML = trashIcon(id);

    if (checked) {
        checkbox.checked = true;
    }

    checkboxAndButtonDiv.appendChild(checkbox);
    checkboxAndButtonDiv.appendChild(button);

    note.appendChild(text);
    note.appendChild(checkboxAndButtonDiv);

    note.setAttribute('data-id', id);

    toDoListElement.appendChild(note);
}

function deleteNote(id) {
    localStorage.removeItem(id)
    updateNotes();
}

function updateNotes() {
    toDoListElement.innerHTML = '';
    for (let [id, note] of Object.entries(localStorage)) {
        if (note.split(',')[4] == 'false') createNoteInHtml(id)
    }
    for (let [id, note] of Object.entries(localStorage)) {
        if (note.split(',')[4] == 'true') createNoteInHtml(id, true)
    }
}

function markAsDone(id, doneOrNotDone) {
    let noteDetails = localStorage.getItem(id).split(',');
    noteDetails[4] = doneOrNotDone;
    localStorage.removeItem(id);
    localStorage.setItem(id, noteDetails);

    updateNotes()
}

localStorage.clear();
createNote('hi my name is');
createNote('hi my holahoop is');
// deleteNote(1)
// console.log(toDoObj[1][0])
updateNotes()


toDoListElement.addEventListener('click', (e) => {
    let id = e.target.getAttribute('data-id');
    if (e.target.type == 'checkbox') {
        markAsDone(id, e.target.checked)
    } else if (e.target.innerText = 'trash') {
        deleteNote(id)
    }
})