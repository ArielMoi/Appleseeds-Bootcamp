const book = {
    name: 'harry potter',
    author: 'J. K. Rolling',
    publishingYear: 2001,
    length: '7 books',
}

function bookAnouner(book){
    console.log(`the book ${book.name} was written by ${book.author} in the year ${book.publishingYear}`)
}

bookAnouner(book);