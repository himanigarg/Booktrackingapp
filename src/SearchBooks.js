import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";

class SearchBooks extends Component {
  state = {
    query: "",
    books: []
  };
  updateQuery = query => {
    this.setState(() => ({
      query: query
    }));
    BooksAPI.search(query).then(books => {
      this.setState(() => ({
        books: Array.isArray(books) ? books : []
      }));
    });
  };
  getBooklist(id) {
   const booklist= this.props.books.filter(b => b.id === id);
   return (booklist[0] ? booklist[0].shelf: '')
  }

  render() {
    const showingbooks =
      this.state.query === ""
        ? this.state.books
        : this.state.books.filter(c =>
            c.title
              .toLocaleLowerCase()
              .includes(this.state.query.toLocaleLowerCase())
          );

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={e => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {showingbooks.map(m => (
              <Book book={m} key={m.id} updateShelf={this.props.updateShelf} booklist={this.getBooklist(m.id)} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
