import React, { Component } from 'react';

class BookApp extends Component {
  render() {
    console.log('this is books', this.props.books.length);

    let books = this.props.books.map(book => {
      const price =
        book.saleInfo.saleability === 'FOR_SALE' ? (
          <h3>Price ${book.saleInfo.listPrice.amount}</h3>
        ) : (
          'Free'
        );

      const author = book.volumeInfo.authors ? book.volumeInfo.authors[0] : '';
      return (
        <li>
          <h2>Title: {book.volumeInfo.title}</h2>
          <h3>Author: {author}</h3>
          <h3>Price: {price}</h3>
          <h3>Description: {book.volumeInfo.description}</h3>
        </li>
      );
    });

    return (
      <div className='book_app'>
        <ul>{books}</ul>
      </div>
    );
  }
}

export default BookApp;
