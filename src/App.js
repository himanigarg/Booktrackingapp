import React from "react";
import "./App.css";
import SearchBooks from "./SearchBooks";
import ListBooks from "./ListBooks";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.updateShelf = this.updateShelf.bind(this);
  }

  state = {
    books: []
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books
      }));
    });
  }
  updateShelf(book, shelf) {
    const found = this.state.books.includes(book);
    const updatedshelf = found
      ? this.state.books.map(b => {
          if (b.id === book.id) {
            b.shelf = shelf;
          }
          return b;
        })
      : this.state.books.concat({
        ...book,
        shelf
      });
    this.setState({
      books: updatedshelf
    });
    BooksAPI.update(book, shelf);
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/search"
          render={() => (
            <SearchBooks
              books={this.state.books}
              updateShelf={this.updateShelf}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <ListBooks
                books={this.state.books}
                updateShelf={this.updateShelf}
              />
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
