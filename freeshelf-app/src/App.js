import React, { Component } from 'react'
import books from './books.json'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.books = books
  }
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Freeshelf</h1>
        </header>
        <div className='book-container'>{this.books.map((b, idx) => {
          return (
            <div className='book-title' key={idx}><h1>{b.title}</h1></div>
          )
        })}</div>
      </div>
    )
  }
}

export default App
