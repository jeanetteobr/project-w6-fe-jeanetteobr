import React, { Component } from 'react'
import 'bulma/css/bulma.css'
// import { runInThisContext } from 'vm'

class BookListView extends Component {
  constructor (props) {
    super()
    this.state = {
      showMore: false
    }
  }
  showMore (books) {
    return (
      <div className='book-accordion'>
        <button className='button is-primary is-small' onClick={() => this.setState({showMore: false}, console.log('clicked'))}>Show less info</button>
        <div className='book-url'><p><strong>URL:</strong> <a href={books.url}>{books.url}</a></p></div>
        <div className='book-publisher'><p><strong>Publisher:</strong>{books.publisher}</p></div>
        <div className='book-date'><p><strong>Publication date:</strong> {books.publicationDate}</p></div>
        <div className='book-desc'><p><strong>Full description:</strong> {books.detailedDescription}</p></div>
      </div>
    )
  }
  showPlaceholderImg (books) {
    if (books.coverImageUrl === '') {
      return (
        <img src='https://genderstudies.indiana.edu/images/publications/book-cover-placeholder.jpg' />
      )
    } else {
      return (
        <img src={books.coverImageUrl} />
      )
    }
  }
  render () {
    const { books } = this.props
    let moreInfo
    let img = this.showPlaceholderImg(books)

    if (this.state.showMore) {
      moreInfo = this.showMore(books)
    } else {
      moreInfo = <button className='button is-primary is-small' onClick={() => this.setState({showMore: true})}>Show more info</button>
    }

    return (
      <div className='book-result columns'>
        <div className='book-cover-img'>{img}</div>
        <div className='book-info column is-8'>
          <h3 id='title' className='book-title is-title'>{books.title}</h3>
          <p><i><span style={{color: '#808080'}}>{books.author}</span></i> </p>
          <p>{books.shortDescription}</p>
          {moreInfo}
          <div><button className='button is-primary is-small' onClick={() => { this.props.editBook(books) }}>Edit book</button></div>
        </div>
      </div>

    )
  }
}

export default BookListView
