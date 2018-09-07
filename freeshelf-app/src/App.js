import React, { Component } from 'react'
import request from 'superagent'
import './App.css'
import BookListView from './BookListView'

class App extends Component {
  constructor () {
    super()
    this.state = {
      books: []
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
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Freeshelf App</h1>
        </header>
        <div className='book-container'>
          {(this.state.books.map((books, idx) => <BookListView key={idx} books={books} />))}
        </div>
      </div>
    )
  }
}

export default App
