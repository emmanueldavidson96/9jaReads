import React, { useEffect, useState } from 'react'
import BookCards from './Cards/BookCards';

export default function OtherBooks() {
    const [books, setBooks] = useState([]);

    useEffect( () => {
        fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data.slice(2,10)))
    }, [])
  return (
    <BookCards books={books} headline="Other Books"/>
  )
}
