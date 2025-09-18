import { useState } from 'react';

const Bookshelf = (props) => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);

    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
    });

    const handleChange = (event) => {
        setNewBook(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addBook(newBook);
        setNewBook('');
    }

    return (
        <div className='formDiv'>
            <h3>Add a Book</h3>

            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title </label>
                <input
                    id="title"
                    type='text'
                    name='title'
                    onChange={handleChange}
                    value={newBook.title}
                />

                <label htmlFor="author">Author </label>
                <input
                    id="author"
                    type='text'
                    name='author'
                    onChange={handleChange}
                    value={newBook.author}
                />

                <button type="submit">Add Book </button>
            </form>
            <div className="bookCardsDiv">
                {books.map((book, index) => {
                    <div className="bookCard" key={`${book.title}-${book.author}-${index}`}>
                        <strong>{book.title}</strong>
                        <div>{book.author}</div>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Bookshelf;