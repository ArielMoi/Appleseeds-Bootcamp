const [addItems, toDoList, deleteItem,
    markAsDone, unMarkAsDone, returnToDoList] = require('./todo');


test('should add item to object of to do list', () => {
    expect(addItems(1, 'ariel', false)).toEqual({
        1: ['ariel', false]
    })
});

test('should delete item from obj', () => {
    addItems(2, 'bbbbb', true)
    expect(deleteItem(2)).toEqual({
        1: ['ariel', false]
    })
})

test('should mark item as done (change is complete to true', () => {
    expect(markAsDone(1)).toEqual({1: ['ariel', true]})
})

test('should mark item as undone', () => {
    expect(unMarkAsDone(1)).toEqual({1: ['ariel', false]})
})

test('should returns the obj organize with undone at the start', () => {
    markAsDone(1)
    addItems(2, 'bbbbb', false)
    expect(returnToDoList()).toEqual([['2', ['bbbbb', false]],['1', ['ariel', true]]])
})

