
import './App.css'
import BookItems from './components/bookItems/BookItems'
import books from './components/books/Books'
function App() {


  return (
    <>
      <div >
        <h2>Books Champion App</h2>
        <div className="d-flex justify-content-center flex-wrap">
        {
          books.map((book, i) => (
            <BookItems
              key={i}

              title={book.bookTitle}
              author={book.bookAuthor}
              rating={book.bookRating}
              pageCount={book.pageCount}
              imageUrl={book.imageUrl}
            />
          ))
        }
        </div>
        
      </div>
    </>
  )
}

export default App
