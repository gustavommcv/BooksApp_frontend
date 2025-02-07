import { Link, useParams } from 'react-router-dom';
import './ReviewPage.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewBox from '../../components/ReviewBox/ReviewBox';

export default function ReviewPage() {

    const [review, setReview] = useState();
    const { reviewId } = useParams(); 
    
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/reviews/${reviewId}`);
                setReview(response.data.review); // Store the fetched review data
            } catch (error) {
                console.error('Failed to fetch user data:', error);
            }
        }

        fetchData();
    }, [reviewId]); // Re-run when reviewId changes

    console.log(review);

    return <div className="review-page">
        {review ? <>
            <Link className='review-page__book-link' to={`/books/${review.bookId}`}>Go to Book</Link>

            <ReviewBox content={review.content} createdAt={review.createdAt} rating={review.rating} title={review.title} userName={review.userId.userName} key={review._id}></ReviewBox>

            <div className="review-page__comments-section">
                
            </div>

        </> : <h2>Review not found</h2>}

        
    </div>
}
