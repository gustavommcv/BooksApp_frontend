import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import './PostReviewPage.scss';
import Button from '../../components/Button/Button';
import axios from 'axios';

export default function PostReviewPage() {
    const { bookId } = useParams();
    const navigate = useNavigate();
    const [rating, setRating] = useState(0);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        const reviewData = {
            title,
            bookId,
            rating: rating.toString(),
            content,
        };

        try {
            await axios.post(
                `${import.meta.env.VITE_API_URL}/reviews`,
                reviewData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                }
            );

            navigate(`/books/${bookId}`);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to post the review');
        }
    };

    return (
        <div className="post-review-page">
            <h1>Post a Review</h1>
            <form onSubmit={handleSubmit} className="post-review-form">
                {error && <p className="post-review-error">{error}</p>}
                
                <label htmlFor="title">Review Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <label htmlFor="rating">Rating:</label>
                <Rating
                    size={30}
                    initialValue={rating}
                    onClick={(rate) => setRating(rate)}
                    allowFraction={false}
                />

                <label htmlFor="content">Your Review:</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    rows="5"
                ></textarea>

                <Button type="submit">Submit Review</Button>
            </form>
        </div>
    );
}
