const toDoList = {};

function addItems(id, taskName, isCompleted){
    // let toDoList = {};
    toDoList[id] = [taskName, isCompleted];
    return toDoList;
}

function deleteItem(id){
    delete toDoList[id];
    return toDoList;
}

function markAsDone(id){
    toDoList[id][1] = true;
    return toDoList;
}

function unMarkAsDone(id){
    toDoList[id][1] = false;
    return toDoList;
}

function returnToDoList(){
    let doneItems = Object.entries(toDoList).filter((el) => {
        return el[1][1];
    })
    let notDoneItems = Object.entries(toDoList).filter((el) => {
        return !el[1][1]
    })
    console.log([...notDoneItems, ...doneItems])
    return [...notDoneItems, ...doneItems]
}


module.exports = [addItems, toDoList, deleteItem,
    markAsDone, unMarkAsDone, returnToDoList];