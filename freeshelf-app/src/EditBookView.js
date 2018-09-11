import React, { Component } from 'react'
import './App.css'

class EditBookView extends Component {
  handleSubmit (e) {
    let {editBook} = this.props
    e.preventDefault()
    editBook(null)
  }
  render () {
    let { books, editBook } = this.props

    return (
      <div id='edit-book' className='book-container'>
        <form onSubmit={this.handleSubmit}>
          <label for='title'>Title:</label>
          <input className='input'id='title' type='text' value={books.title} onChange={(e) => { this.props.updateBook(books.id, 'title', e.target.value) }} />
          <lable for='author'>Author:</lable>
          <input className='input' id='author' type='text' value={books.author} onChange={(e) => { this.props.updateBook(books.id, 'author', e.target.value) }} />
          <label for='url'>Url:</label>
          <input className='input' id='url' type='text' value={books.url} onChange={(e) => { this.props.updateBook(books.id, 'url', e.target.value) }} />
          <label for='short-desc'>Short description:</label>
          <textarea className='input' id='short-desc' type='text' form='edit-book' value={books.shortDescription} onChange={(e) => { this.props.updateBook(books.id, 'short desc', e.target.value) }} />
          <label for='cover-img'>Cover image url:</label>
          <input className='input' id='cover-img' type='text' value={books.coverImageUrl} onChange={(e) => { this.props.updateBook(books.id, 'cover img', e.target.value) }} />
          <label for='publisher'>Publisher:</label>
          <input className='input' id='publisher' type='text' value={books.publisher} onChange={(e) => { this.props.updateBook(books.id, 'publisher', e.target.value) }} />
          <label for='publish-date'>Publication date:</label>
          <input className='input' id='date' type='text' value={books.publicationDate} onChange={(e) => { this.props.updateBook(books.id, 'date', e.target.value) }} />
          <label for='detailed-desc'>Detailed description:</label>
          <textarea className='textarea' id='detailed-desc' form='edit-book' type='text' rows='6' value={books.detailedDescription} onChange={(e) => { this.props.updateBook(books.id, 'detailed3', e.target.value) }} />
          <input className='button is-small is-primary' type='submit' value='Submit' />
        </form>
        <div><button className='button is-small is-primary' onClick={() => editBook(null)}>Return to book list</button></div>
      </div>
    )
  }
}

export default EditBookView
