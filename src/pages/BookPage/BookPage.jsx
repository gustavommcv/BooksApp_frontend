import { Link, useLoaderData } from 'react-router-dom';
import { useContext, useState } from 'react';
import './BookPage.scss';
import ReviewBox from '../../components/ReviewBox/ReviewBox';
import { Rating } from 'react-simple-star-rating';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import Button from '../../components/Button/Button';

export default function BookPage() {
    const { bookData, reviews } = useLoaderData();
    const [showFullDescription, setShowFullDescription] = useState(false);
    const { isAuthenticated, user } = useContext(AuthContext);

    // Check if the user has already reviewed this book
    const userHasReviewed = isAuthenticated && reviews.some(review => review.userId._id === user._id);

    // Determine if the "Review this book" button should be shown
    const shouldShowReviewButton = isAuthenticated && !userHasReviewed;

    const publicationYear = new Date(bookData.publicationDate).getFullYear();
    const reviewsCount = bookData.reviews.length;

    // Generate the short version of the description
    const generateShortDescription = (text, charLimit) => {
        const shortText = text.slice(0, charLimit);
        return shortText.split('. ').map((sentence, index, array) => (
            <p key={index} className="book-page__paragraph">
                {sentence.trim() + (index < array.length - 1 ? '.' : '...')}
            </p>
        ));
    };

    const shortDescription = generateShortDescription(bookData.description, 200);
    const fullDescription = bookData.description.split('. ').map((sentence, index) => (
        <p key={index} className="book-page__paragraph">
            {sentence.trim() + (index < bookData.description.split('. ').length - 1 ? '.' : '')}
        </p>
    ));

    const shouldShowToggleButton = bookData.description.length > 200;

    return (
        <div className="book-page">
            <section className="book-page__display">
                <img src={bookData.cover} alt="Book Cover" className="book-page__cover" />
                <div>
                    <h2 className="book-page__title">{bookData.title}</h2>
                    <p>
                        <Link className="book-page__author">{bookData.author}</Link>
                    </p>
                    <div className="book-page__rating">
                        {bookData.averageRating != 0 && (
                            <>
                                <Rating size={24} readonly={true} initialValue={bookData.averageRating} />
                                <p>{reviewsCount} reviews</p>
                            </>
                        )}
                        {!bookData.averageRating && (
                            <>
                                <p>No ratings yet |</p>
                                <Link to={`/post-review/${bookData._id}`}>
                                    Review it now
                                </Link>
                            </>
                        )}
                    </div>

                    {bookData.averageRating != 0 && shouldShowReviewButton && (
                        <Button type="link" navigateTo={`/post-review/${bookData._id}`}>
                            Review this book
                        </Button>
                    )}
                </div>
            </section>

            <section className="book-page__description-section">
                <h3 className="book-page__subtitle book-page__subtitle--description">Book Description</h3>
                <div className="book-page__description">
                    {shouldShowToggleButton && !showFullDescription ? shortDescription : fullDescription}
                    {shouldShowToggleButton && (
                        <button onClick={() => setShowFullDescription(!showFullDescription)} className="book-page__toggle-button">
                            {showFullDescription ? 'Show less' : 'Show more'}
                        </button>
                    )}
                </div>

                <div className="info-bar">
                    <div className="info-bar__label info-bar__label--genre">
                        <p className="info-bar__label-title">Genre</p>
                        <p className="info-bar__label-content">{bookData.genre}</p>
                    </div>

                    <div className="info-bar__label info-bar__label--data">
                        <p className="info-bar__label-title">Published</p>
                        <p className="info-bar__label-content">{publicationYear}</p>
                    </div>

                    <div className="info-bar__label info-bar__label--pages">
                        <p className="info-bar__label-title">Pages</p>
                        <p className="info-bar__label-content">{bookData.pageCount}</p>
                    </div>
                </div>
            </section>

            <section className="book-page__reviews-section">
                <h3 className="book-page__subtitle">Reviews</h3>
                {bookData.averageRating ? (
                    reviews.map(review => (
                        <ReviewBox
                            key={review._id}
                            reviewId={review._id}
                            title={review.title}
                            content={review.content}
                            createdAt={review.createdAt}
                            rating={review.rating}
                            userName={review.userId.userName}
                            userId={review.userId._id}
                        />
                    ))
                ) : (
                    <>
                        <p className="book-page__rating">No reviews available for this book yet</p>
                        <Link to={`/post-review/${bookData._id}`} className="book-page__reviews-section-rating-link">
                            Review it now
                        </Link>
                    </>
                )}
            </section>
        </div>
    );
}
