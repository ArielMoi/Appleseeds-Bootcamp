const book1= {
    name:'hunger games',
    author:'suzenne collins',
    year: 2010,
}
const book2= {
    name:'Harry Potter',
    author:'J.K. Rolling',
    year: 2001,
}

var bookUtils = {
    getFirstPublished: function (book1, book2){
        if (book1.year < book2.year){
            return book1;
        } else { return book2;}
    },
    setNewEdition:function(book, editionYear){
        book.year = editionYear;
    },
    setLanguage: function (book, language){
        book.language = language;
    },
    setTranslation: function (book, translator) {
        book.translation = [book.language, translator];
    },
    setPublisher: function(book, publisher, location){
        book.publisher = [publisher, location];
    },
    isSamePublisher: function(book1, book2){
        if (book1.publisher[0] == book2.publisher[0] && book1.publisher[1] == book2.publisher[1]){
            return true;
        } return false;
    }
};

bookUtils.setLanguage(book1, 'Arabic');
bookUtils.setTranslation(book1, 'Arabic');
bookUtils.setPublisher(book1, 'brewery' ,'London');
bookUtils.setPublisher(book2, 'brewery', 'London');

console.log(bookUtils.isSamePublisher(book1, book2));

