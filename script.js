const bookForm = document.querySelector('.book-form')
const bookContainer = document.querySelector('.book-container')
const titleInput = bookForm['title']
const authorInput = bookForm['author']

const books = JSON.parse(localStorage.getItem("books")) || []

const addBook = (title, author) => {
    books.push({
        title,
        author,
    })
    localStorage.setItem("books", JSON.stringify(books))
    return { title, author }
}

const createBook = ({ title, author, removeBtn, hr }, index) => {
    const bookDiv = document.createElement('div')
    const bookTitle = document.createElement('h2')
    const bookAuthor = document.createElement('p')
    const AremoveBtn = document.createElement('button')
    const Ahr = document.createElement('hr')



    bookTitle.innerText = `${title}`
    bookAuthor.innerText = `${author}`
    AremoveBtn.innerText = `Remove`

    bookDiv.append(bookTitle, bookAuthor, AremoveBtn, Ahr)
    bookContainer.appendChild(bookDiv)

}

books.forEach(createBook)

bookForm.onsubmit = (e) => {
    e.preventDefault()

    const newBook = addBook(
        titleInput.value,
        authorInput.value
    );
    createBook(newBook)
    titleInput.value = ""
    authorInput.value = ""
}