const bookForm = document.querySelector('.book-form');
const bookContainer = document.querySelector('.book-container');
const titleInput = bookForm['title']
const authorInput = bookForm['author']

const books = [
]

const addBook = (author, book) => { }

const createBook = ({title,author,button,hr}) => {
    const bookDiv = document.createElement('div');
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const removeBtn = document.createElement('button');
    const formHr = document.createElement('hr');

    bookTitle.innerText = `${title}`
    bookAuthor.innerText = `${author}`
    removeBtn.innerText = `Remove`

    bookDiv.append(bookTitle,bookAuthor,removeBtn,formHr);
    bookContainer.appendChild(bookDiv);
}