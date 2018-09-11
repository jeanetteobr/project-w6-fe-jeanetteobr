import React, { Component } from 'react'
import request from 'superagent'
import './App.css'
import BookListView from './BookListView'
import EditBookView from './EditBookView'

class App extends Component {
  constructor () {
    super()
    this.state = {
      books: [],
      editing: null
    }
  }
  componentDidMount () {
    request.get('http://localhost:4000/books')
      .then((res) => {
        this.setState({
          books: res.body
        })
      })
  }

  patchRequest (book) {
    const bookId = book.id
    request.patch(`http://localhost:4000/books/${bookId}`)
      .send(book)
      .then(res => {
        this.setState({
          title: this.title
        })
      })
  }

  editBook (book) {
    this.setState({editing: book})
  }

  updateBook (bookId, field, value) {
    this.setState(state => {
      let book = state.books.find(book => book.id === bookId)
      book[field] = value
      this.patchRequest(book)
      return {
        books: state.books
      }
    })
  }

  setBookListView () {
    this.componentDidMount()
  }

  render () {
    let currentView
    if (this.state.editing) {
      currentView = <EditBookView books={this.state.editing} updateBook={this.updateBook.bind(this)} editBook={this.editBook.bind(this)} />
    } else {
      currentView =
        <div className='book-container'>
          {(this.state.books.map((books, idx) => <BookListView key={idx} books={books} editBook={this.editBook.bind(this)} />))}
        </div>
    }
    return (
      <div className='App'>
        <header className='App-header'>
          <p className='App-title'>Freeshelf App</p>
        </header>
        {currentView}
      </div>
    )
  }
}

export default App
