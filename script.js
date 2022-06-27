const bookForm = document.getElementById('book-form');
const bookContainer = document.querySelector('.book-container');
const titleInput = bookForm['title']
const authorInput = bookForm['author']

const books = JSON.parse(localStorage.getItem("books")) || []

const addBook = (title,author) => {
    books.push({
        title,
        author
    });
    localStorage.setItem("books", JSON.stringify(books))
    return { title, author }
}

const createBook = ({ title, author, button, hr }) => {
    const bookDiv = document.createElement('div');
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const removeBtn = document.createElement('button');
    const formHr = document.createElement('hr');

    bookTitle.innerText = `${title}`
    bookAuthor.innerText = `${author}`
    removeBtn.innerText = `Remove`

    bookDiv.append(bookTitle, bookAuthor, removeBtn, formHr);
    bookContainer.appendChild(bookDiv);
}

books.forEach(createBook)

bookForm.onsubmit = (e) => {
    e.preventDefault()

    const newBook = addBook(
        titleInput.value,
        authorInput.value
    );
    createBook(newBook)
    titleInput.value = '';
    authorInput.value = ''
}