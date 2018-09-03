import React, { Component } from "react";
import Book from "./Book";

class ListBooks extends Component {

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books
                  .filter(b => b.shelf === "currentlyReading")
                  .map(m => (
                    <Book book={m} key={m.id} updateShelf={this.props.updateShelf} />
                  ))}
              </ol>
            </div>
          </div>
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want To Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books
                    .filter(b => b.shelf === "wantToRead")
                    .map(m => (
                      <Book
                        book={m}
                        key={m.id}
                        updateShelf={this.props.updateShelf}
                      />
                    ))}
                </ol>
              </div>
            </div>
          </div>
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books.filter(b => b.shelf === "read").map(m => (
                    <Book book={m} key={m.id}  updateShelf={this.props.updateShelf}/>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListBooks;
