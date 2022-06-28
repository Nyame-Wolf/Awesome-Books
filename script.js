const bookForm = document.querySelector('.book-form');
const bookContainer = document.querySelector('.book-container');
const titleInput = bookForm.title;
const authorInput = bookForm.author;

let books = JSON.parse(localStorage.getItem('books')) || [];
const uniqueIdGen = () => {
    let id = 0
    return () => ++id
}
const uniqueId = uniqueIdGen()
const addBook = (title, author) => {
    books.push({
        title,
        author,
        id: uniqueId(),
    });
    localStorage.setItem('books', JSON.stringify(books));
    return { title, author };
};

const createBook = ({
    title, author, id
}) => {
    const bookDiv = document.createElement('div');
    bookDiv.setAttribute('data-id', id);
    const bookTitle = document.createElement('h2');
    const bookAuthor = document.createElement('p');
    const AremoveBtn = document.createElement('button');
    AremoveBtn.classList.add('remove')
    const Ahr = document.createElement('hr');

    bookTitle.innerText = `${title}`;
    bookAuthor.innerText = `${author}`;
    AremoveBtn.innerText = 'Remove';

    bookDiv.append(bookTitle, bookAuthor, AremoveBtn, Ahr);
    bookContainer.appendChild(bookDiv);

    // AremoveBtn.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     books.splice(index, 1);
    //     localStorage.setItem('books', JSON.stringify(books));
    //     localStorage.removeItem('bookDiv')
    //     bookDiv.remove();
    // });
};
bookContainer.addEventListener('click', (e) => {
    const bookId = e.target.parentElement.dataset.id
    const bookIndex = books.findIndex((book) => book.id = bookId)
    books.splice(bookIndex, 1);
    localStorage.setItem('books', JSON.stringify(books));
    e.target.parentElement.remove();
})

books.forEach(createBook);

bookForm.onsubmit = (e) => {
    e.preventDefault();

    const newBook = addBook(
        titleInput.value,
        authorInput.value,
    );
    createBook(newBook);
    titleInput.value = '';
    authorInput.value = '';
};