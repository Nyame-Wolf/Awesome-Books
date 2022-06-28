const bookForm = document.querySelector('.book-form');
const bookContainer = document.querySelector('.book-container');
const titleInput = bookForm.title;
const authorInput = bookForm.author;

const books = JSON.parse(localStorage.getItem('books')) || [];
const uniqueIdGen = () => {
  let id = Date.now();
  // eslint-disable-next-line no-return-assign
  return () => id += 1;
};
const uniqueId = uniqueIdGen();
const addBook = (title, author) => {
  const id = uniqueId();
  books.push({
    title,
    author,
    id,
  });
  localStorage.setItem('books', JSON.stringify(books));
  return { title, author, id };
};

const createBook = ({
  title, author, id,
}) => {
  const bookDiv = document.createElement('div');
  bookDiv.setAttribute('data-id', id);
  const bookTitle = document.createElement('h2');
  const bookAuthor = document.createElement('p');
  const AremoveBtn = document.createElement('button');
  AremoveBtn.classList.add('remove');
  const Ahr = document.createElement('hr');

  bookTitle.innerText = `${title}`;
  bookAuthor.innerText = `${author}`;
  AremoveBtn.innerText = 'Remove';

  bookDiv.append(bookTitle, bookAuthor, AremoveBtn, Ahr);
  bookContainer.appendChild(bookDiv);

  AremoveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const index = books.findIndex((book) => book.id === id);
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
    localStorage.removeItem('bookDiv');
    bookDiv.remove();
  });
};

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