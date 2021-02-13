import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext'

export default function BookForm() {

  const {addBook} = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle('');
    setAuthor('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="title" 
        type="text" 
        placeholder="book title" 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
        required 
      />
      <input 
        name="author" 
        type="text" 
        placeholder="book author" 
        value={author} 
        onChange={e => setAuthor(e.target.value)} 
      />
      <button>Add Book</button>
    </form>
  )
}
