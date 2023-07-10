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

    const bookCard = document.createElement('div');
    bookCard.classList.add('card');

    bookCard.innerHTML = `
    <h2>${newBook.title}</h2>
    <p>Author: ${newBook.author}</p>
    <p>Pages: ${newBook.pages}</p>`;

    const bookCardContainer = document.querySelector('#bookCard');
    bookCardContainer.appendChild(bookCard);

    document.querySelector('#book').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';

    const form = document.querySelector('.main');
    form.style.display = 'none';

    const button = document.querySelector('#addBook');
    button.style.display = 'block';

};

const openForm = () => {
    const form = document.querySelector('.main');
    const button = document.querySelector('#addBook');

    form.style.display = 'block';
    button.style.display = 'none';
}

const bookCard = (book) => {
    addBookToLibrary();
    card.appendChild()
}



// bookName.addEventListener('input', addBookToLibrary);
// authorName.addEventListener('input', addBookToLibrary);
// pageNum.addEventListener('input', addBookToLibrary);