/* eslint-disable max-classes-per-file */
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Storage {
  static getBooks() {
    let collection;
    if (localStorage.getItem('collection') === null) {
      collection = [];
    } else {
      collection = JSON.parse(localStorage.getItem('collection'));
    }

    return collection;
  }

  static newBook(book) {
    const collection = Storage.getBooks();
    collection.push(book);
    localStorage.setItem('collection', JSON.stringify(collection));
  }

  static delBook(author) {
    const collection = Storage.getBooks();

    collection.forEach((book, index) => {
      if (book.author === author) {
        collection.splice(index, 1);
      }
    });

    localStorage.setItem('collection', JSON.stringify(collection));
  }
}

class Display {
  static showBooks() {
    const collection = Storage.getBooks();

    collection.forEach((book) => Display.printCollection(book));
  }

  static printCollection(book) {
    const bookList = document.querySelector('#show-bks');

    const tableRow = document.createElement('tr');
    const dataCell = document.createElement('td');
    const dataCell2 = document.createElement('td');
    const button = document.createElement('button');
    dataCell.innerHTML = ` <span>"${book.title}"</span> by <span>${book.author}</span> `;
    tableRow.append(dataCell);
    tableRow.append(dataCell2);
    dataCell2.append(button);
    button.classList.add('delete');
    button.innerText = 'Remove';
    bookList.appendChild(tableRow);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}
