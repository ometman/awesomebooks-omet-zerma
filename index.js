const form = document.querySelector('#form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const bookList = document.getElementById('show-bks');
let collection = JSON.parse(localStorage.getItem('collection')) || [];
let book = [{
  title: 'Alpen',
  author: 'Zalpen',
  id: 1234574,
}];


