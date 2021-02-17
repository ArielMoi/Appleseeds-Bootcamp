var library = [{
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false
    }
];


function readable(obj){
    library.forEach(el => el.readingStatus ? console.log(el.author, el.title) : null)
    var libraryreadable = library.map(el => el.readingStatus && el)
    return libraryreadable
}

console.log(readable(library))