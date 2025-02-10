import { Link, useParams } from 'react-router-dom';
import './ProfilePage.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewBox from '../../components/ReviewBox/ReviewBox';
import CommentBox from '../../components/CommentBox/CommentBox';

export default function ProfilePage() {
    const { userId } = useParams(); // Get the user ID from the route
    const [user, setUser] = useState(); // Store user information
    const [view, setView] = useState('reviews'); // Control the current view (reviews or comments)

    console.log(user);

    // Fetch user data from the backend when the component mounts
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/profile/${userId}`);
                setUser(response.data); // Store the fetched user data
            } catch (error) {
                console.error('Failed to fetch user data:', error);
            }
        }

        fetchData();
    }, [userId]); // Re-run when userId changes

    return (
        <div className="profile-page">
            {user ? (
                <>
                    <h1>Profile page</h1>
                    <h3 className="profile-page__name">{user.userName}</h3>

                    {/* Render profile picture if available */}
                    {user.profilePicture ? 
                        <img 
                            className='profile-page__picture' 
                            src={`https://localhost:3000${user.profilePicture}`} 
                            alt="Profile Picture" 
                        />
                    : undefined}

                    {user.bio ?
                    <p className="profile-page__bio">Bio:<br/>{user.bio}</p>
                    : undefined}

                    {/* Toggle buttons to switch between reviews and comments */}
                    <div className="profile-page__toggle">
                        <button 
                            className={`toggle-button ${view === 'reviews' ? 'active' : ''}`} 
                            onClick={() => setView('reviews')}
                        >
                            Reviews
                        </button>
                        <button 
                            className={`toggle-button ${view === 'comments' ? 'active' : ''}`} 
                            onClick={() => setView('comments')}
                        >
                            Comments
                        </button>
                    </div>

                    {/* Conditional rendering: Show reviews or comments based on the selected view */}
                    {view === 'reviews' ? (
                        <ul className="profile-page__reviews">
                            {/* Check if the user has any reviews */}
                            {user.reviews.length > 0 ? (
                                user.reviews.map(review => (
                                    <li key={review._id}>
                                        <Link className='profile-page__reviews-link' to={`/review/${review._id}`}>
                                            <ReviewBox
                                                key={review._id}
                                                title={review.title}
                                                content={review.content}
                                                createdAt={review.createdAt}
                                                rating={review.rating}
                                                userName={user.userName}
                                            />
                                        </Link>
                                    </li>
                                ))
                            ) : (
                                <p>No reviews available.</p> // Message if no reviews exist
                            )}
                        </ul>
                    ) : (
                        <ul className="profile-page__comments">
                            {/* Check if the user has any comments */}
                            {user.comments.length > 0 ? (
                                user.comments.map(comment => (
                                    <li className='profile-page__comment' key={comment._id}>
                                        <CommentBox
                                            title={comment.reviewId.title}
                                            userName={user.userName}
                                            createdAt={comment.createdAt}
                                            content={comment.content}
                                        />
                                    </li>
                                ))
                            ) : (
                                <p>No comments available.</p> // Message if no comments exist
                            )}
                        </ul>
                    )}
                </>
            ) : <h2>User not found</h2>}
        </div>
    );
}
