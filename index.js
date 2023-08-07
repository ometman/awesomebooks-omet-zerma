const form = document.querySelector('#new-bk');
const title = document.getElementById('bk-title');
const author = document.getElementById('bk-author');
const bookList = document.getElementById('show-bks');
let collection = JSON.parse(localStorage.getItem('collection')) || [];
// let book = [{
//   title: 'Alpen',
//   author: 'Zalpen',
//   id: 1234574,
// }];

function newBook() {
  const book = {
    title: title.value,
    author: author.value,
    idNumber: Math.floor(Math.random() * 1000000),
  };
  collection.push(book);
  localStorage.setItem('collection', JSON.stringify(collection));
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (title.value !== '' && author.value !== '') {
    newBook();
    form.reset();
  } else {
    alert('Enter valid values for title and author fields, please.');
  }
});