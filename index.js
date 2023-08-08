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