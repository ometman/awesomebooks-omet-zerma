const form = document.querySelector('#new-bk');
const title = document.getElementById('bk-title');
const author = document.getElementById('bk-author');
const bookList = document.getElementById('show-bks');
let collection = JSON.parse(localStorage.getItem('collection')) || [];
let book = {};

function newBook() {
  book = {
    title: title.value,
    author: author.value,
    idNumber: Math.floor(Math.random() * 1000000),
  };
  collection.push(book);
  localStorage.setItem('collection', JSON.stringify(collection));
}

function deleteBook(idNumber) {
  collection = collection.filter((books) => books.idNumber !== idNumber);
  localStorage.setItem('collection', JSON.stringify(collection));
}

function printCollection(book) {
  const tableRow = document.createElement('tr');
  const newTitle = document.createElement('td');
  const newAuthor = document.createElement('td');
  const deleteButton = document.createElement('button');
  newTitle.innerText = book.title;
  newAuthor.innerText = book.author;
  deleteButton.innerHTML = 'Delete';
  tableRow.append(newTitle, newAuthor, deleteButton);
  bookList.append(tableRow);
  deleteButton.addEventListener('click', () => {
    deleteButton.parentElement.remove();
    deleteBook(book.idNumber);
  });
}

collection.forEach(printCollection);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (title.value !== '' && author.value !== '') {
    newBook();
    printCollection(book);
    form.reset();
  } else {
    alert('Enter valid values for title and author fields, please.');
  }
});