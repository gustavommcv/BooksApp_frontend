import { Link, useLoaderData } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import './BooksPage.scss';

// Utility function to limit the title to 5 words
const limitWords = (text, wordLimit) => {
    const words = text.split(' '); // Split the title into words
    if (words.length > wordLimit) {
        return `${words.slice(0, wordLimit).join(' ')}...`; // Join the first 5 words and append "..."
    }
    return text; // Return the full title if within limit
};

export default function BooksPage() {
    const initialBooks = useLoaderData(); // Load the first page of books from the loader
    const [books, setBooks] = useState(initialBooks); // Manage the list of books
    const [page, setPage] = useState(2); // Start loading from page 2
    const [loading, setLoading] = useState(false); // Track loading state
    const [hasMore, setHasMore] = useState(true); // Track if more books are available

    // Function to load more books when the user reaches the bottom of the page
    const loadMoreBooks = useCallback(async () => {
        if (loading || !hasMore) return; // Prevent duplicate loading
        setLoading(true);
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/books?limit=40&page=${page}`);
            const newBooks = response.data.books;

            if (newBooks.length > 0) {
                setBooks((prevBooks) => [...prevBooks, ...newBooks]); // Append new books to the list
                setPage((prevPage) => prevPage + 1); // Move to the next page
            } else {
                setHasMore(false); // Stop loading if no more books are available
            }
        } catch (error) {
            console.error('Error loading more books:', error);
        }
        setLoading(false);
    }, [page, loading, hasMore]);

    // Monitor the scroll position to trigger loading when reaching the bottom
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 10) {
                loadMoreBooks(); // Load more books when near the bottom
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll); // Clean up event listener
    }, [loadMoreBooks]);

    return (
        <div className="books-page">
            <h1 className="books-page__title">Books</h1>
            <div className="books-page__grid">
                {books.map((book, index) => (
                    <Link to={`/books/${book._id}`} key={index} className="book-card">
                        <img src={book.cover} alt={book.title} className="book-card__image" />
                        <p className="book-card__title">{limitWords(book.title, 5)}</p>
                        <p className="book-card__author">{book.author}</p>
                    </Link>
                ))}
            </div>
            {loading && <p className="books-page__loading">Loading more books...</p>}
            {!hasMore && <p className="books-page__end">No more books available.</p>}
        </div>
    );
}
