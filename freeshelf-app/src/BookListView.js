import React, { Component } from 'react'

class BookListView extends Component {
  constructor (props) {
    super()
    this.state = {
      showMore: false
    }
  }
  showMore (book) {
    return (
      <div className='book-info-container'>
        <button>Show less info</button>
        <div className='book-url'><p>{book.url}</p></div>
        <div className='book-publisher'><p>{book.publisher}</p></div>
        <div className='book-date'><p>{book.publicationDate}</p></div>
      </div>
    )
  }
  render () {
    const { books } = this.props

    let moreInfo

    if (this.state.showMore) {
      moreInfo = this.showMore(books)
    } else {
      moreInfo = <button className='button' onClick={() => { this.setState({showMore: true}) }}>Show more info</button>
    }

    return (
      <div className='book-result'>
        <img className='book-image' src={books.coverImageUrl} alt='Book cover image' />
        <h1 className='book-title'>{books.title}</h1>
        <p>{books.author}</p>
        <p>{books.shortDescription}</p>
        {moreInfo}
      </div>
    )
  }
}

export default BookListView
