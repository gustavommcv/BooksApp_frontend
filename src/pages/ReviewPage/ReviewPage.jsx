import { Link, useParams } from 'react-router-dom';
import './ReviewPage.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewBox from '../../components/ReviewBox/ReviewBox';
import CommentBox from '../../components/CommentBox/CommentBox';

export default function ReviewPage() {
    const [review, setReview] = useState(); // Store review data
    const [comments, setComments] = useState([]); // Store detailed comments
    const { reviewId } = useParams(); // Get reviewId from URL

    // Fetch review and comments when component mounts
    useEffect(() => {
        async function fetchData() {
            try {
                // Fetch review details
                const reviewResponse = await axios.get(`${import.meta.env.VITE_API_URL}/reviews/${reviewId}`);
                const fetchedReview = reviewResponse.data.review;
                setReview(fetchedReview); // Store the fetched review

                // Fetch detailed comments using their IDs
                if (fetchedReview.comments.length > 0) {
                    const commentsResponse = await Promise.all(
                        fetchedReview.comments.map(commentId => 
                            axios.get(`${import.meta.env.VITE_API_URL}/comments/${commentId}`)
                        )
                    );
                    setComments(commentsResponse.map(response => response.data.comment)); // Store fetched comments
                }
            } catch (error) {
                console.error('Failed to fetch review or comments:', error);
            }
        }

        fetchData();
    }, [reviewId]);

    return (
        <div className="review-page">
            {review ? (
                <>
                    <div className='review-page__header'>
                        <h2 className='review-page__title'>Reviews</h2>
                        <p>
                            <Link className='review-page__book-link' to={`/books/${review.bookId}`}>Go to Book</Link>
                        </p>
                    </div>

                    {/* Display the review */}
                    <ReviewBox 
                        content={review.content} 
                        createdAt={review.createdAt} 
                        rating={review.rating} 
                        title={review.title} 
                        userName={review.userId.userName} 
                        key={review._id} 
                    />

                    {/* Comments section */}
                    <div className="review-page__comments-section">
                        <h2 className='review-page__title'>Comments</h2>

                        {/* Check if there are comments */}
                        {comments.length > 0 ? (
                            comments.map(comment => (
                                <CommentBox 
                                    key={comment._id} 
                                    title={comment.title} 
                                    userName={comment.userId.userName} 
                                    createdAt={comment.createdAt} 
                                    content={comment.content} 
                                />
                            ))
                        ) : (
                            <p>No comments available.</p>
                        )}
                    </div>
                </>
            ) : (
                <h2>Review not found</h2>
            )}
        </div>
    );
}
