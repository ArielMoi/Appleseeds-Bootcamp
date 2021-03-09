const toDoListElement = document.querySelector('.todo-list');

function trashIcon(id) {
    return `<i data-id='${id}' class="far fa-trash-alt"></i>`
}

const ballIcon = '<i class="fas fa-circle"></i>';

const submitNote = document.querySelector('.input-todo button');

const toDoObj = {};
let id = 0;

function createNote(text, priority = 0, isCompleted = false) {
    let dateOfNote = new Date();
    // toDoObj[++id] = [text, `${dateOfNote.getHours()}:${dateOfNote.getMinutes()},${dateOfNote.getDate()}/${dateOfNote.getMonth() + 1}/${dateOfNote.getFullYear()}`,
    //     priority, isCompleted
    // ];

    localStorage.setItem(++id, [text, `${dateOfNote.getHours()}:${dateOfNote.getMinutes()},${dateOfNote.getDate()}/${dateOfNote.getMonth() + 1}/${dateOfNote.getFullYear()}`,
        priority, isCompleted
    ])

    // createNoteInHtml(id) // or in show my notes --- ! 
    updateNotes();
}

function createNoteInHtml(id, priorityOfNote, checked = false) { // publish note -- is called inside create element
    /// creates al the html needed
    // returns the element// will be used inside create note
    // debugger;
    let note = document.createElement('div');
    let text = document.createElement('p');
    let checkboxAndButtonDiv = document.createElement('div');
    let priorityShowcase = document.createElement('i');
    let checkbox = document.createElement('input');
    let button = document.createElement('button');

    text.innerText = localStorage.getItem(id).split(',')[0];

    // priority - green ball is 0, yellow is 1, red is 2;
    // console.log(priorityOfNote);
    priorityShowcase.innerHTML = ballIcon;
    switch (priorityOfNote){
        case '0':
            // priorityShowcase.classList.add('priority-light')
            priorityShowcase.style.color = 'green';
            break;
        case '1':
            priorityShowcase.style.color = 'yellow';
            break;
        case '2':
            priorityShowcase.style.color = 'red';
            break;
    }

    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("data-id", id);
    button.innerHTML = trashIcon(id);

    if (checked) {
        checkbox.checked = true;
    }

    checkboxAndButtonDiv.appendChild(priorityShowcase);
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

function updateNotes() { ///// nneed to arrange by priority and then completed
    toDoListElement.innerHTML = '';
    for (let [id, note] of Object.entries(localStorage)) {
        let priority = note.split(',')[3];
        // console.log(priority)
        if (note.split(',')[4] == 'false') createNoteInHtml(id, priority)
    }
    for (let [id, note] of Object.entries(localStorage)) {
        let priority = note.split(',')[3];
        if (note.split(',')[4] == 'true') createNoteInHtml(id, priority, true)
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


submitNote.addEventListener('click', (e) => {
    const noteText = document.querySelector('.input-todo textArea');
    const priority = document.querySelector('select');
    // console.log()
    let userPriority;
    for (let option of priority.options){
        if (option.selected){
            userPriority = option.value
        }
    }
    // console.log(userPriority)
    createNote(noteText.value, userPriority)
    noteText.value = '';
})
