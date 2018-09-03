import React,{Component} from 'react'

class Book extends Component{
   
    render(){
        return(
            <div className='list.books'>
                    <div className='list.books' key={this.props.book.id}>
                    <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail:null})` }}></div>
                            <div className="book-shelf-changer">
                              <select value={this.props.booklist ? this.props.booklist: this.props.book.shelf} onChange={(e)=>this.props.updateShelf(this.props.book, e.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="none">None</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{this.props.book.title}</div>
                          <div className="book-authors">{this.props.book.authors}</div>
                        </div>
                      </li>
                    </div>
                </div>
        )
    }
}

export default Book