const toDoList = {};

function addItems(id, taskName, isCompleted){
    toDoList[id] = [taskName, isCompleted];
}

function deleteItem(id){
    delete toDoList[id];
}

function markAsDone(id){
    toDoList[id][1] = true;
}

function unMarkAsDone(id){
    toDoList[id][1] = false;
}

function returnToDoList(){
    let doneItems = Object.entries(toDoList).filter((el) => {
        return el[1][1];
    })
    let notDoneItems = Object.entries(toDoList).filter((el) => {
        return !el[1][1]
    })
    return [...notDoneItems, ...doneItems]
}


addItems(1, 'ariel', false);
addItems(2, 'fsdfd', true);
addItems(3, 'arefqefffiel', false);
// console.log(toDoList)
// deleteItem(1)
// console.log(toDoList)
console.log(returnToDoList());