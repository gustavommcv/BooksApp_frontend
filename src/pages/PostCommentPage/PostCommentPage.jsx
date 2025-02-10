import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './PostCommentPage.scss';
import Button from '../../components/Button/Button';

export default function PostCommentPage() {
    const { reviewId } = useParams();
    const navigate = useNavigate();
    const [comment, setComment] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        const commentData = {
            reviewId,
            content: comment,
        };

        try {
            await axios.post(
                `${import.meta.env.VITE_API_URL}/comments`,
                commentData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                }
            );
            setComment('');

           navigate(`/review/${reviewId}`);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to post the comment');
        }
    };

    return (
        <div className="post-comment-page">
            <h1>Post a Comment</h1>
            <form onSubmit={handleSubmit} className="post-comment-form">
                {error && <p className="post-comment-error">{error}</p>}

                <label htmlFor="comment">Your Comment:</label>
                <textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                    rows="4"
                ></textarea>

                <Button type="submit">Submit Comment</Button>
            </form>
        </div>
    );
}
