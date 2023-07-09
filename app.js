let myLibrary = [];


function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
};

function addBookToLibrary(event) {

    event.preventDefault();

    const book = document.querySelector('#book').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;

    const newBook = new Book(book, author, pages);

    myLibrary.push(newBook);

    console.log(myLibrary);

};



// bookName.addEventListener('input', addBookToLibrary);
// authorName.addEventListener('input', addBookToLibrary);
// pageNum.addEventListener('input', addBookToLibrary);