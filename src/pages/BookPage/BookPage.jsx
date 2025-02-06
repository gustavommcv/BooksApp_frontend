import { Link, useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import './BookPage.scss';
import ReviewBox from '../../components/ReviewBox/ReviewBox';

export default function BookPage() {
    const { bookData, reviews} = useLoaderData();
    const [showFullDescription, setShowFullDescription] = useState(false);

    console.log(bookData, reviews)
    
    const publicationYear = new Date(bookData.publicationDate).getFullYear();
    const reviewsCount = bookData.reviews.length;

    const toggleDescription = () => setShowFullDescription(!showFullDescription);

    // Generate the short version and split into paragraphs
    const generateShortDescription = (text, charLimit) => {
        const shortText = text.slice(0, charLimit);

        // Divide the text into sentences and add '...' to the last paragraph
        const paragraphs = shortText.split('. ').map((sentence, index, array) => (
            <p key={index} className="book-page__paragraph">
                {sentence.trim() + (index < array.length - 1 ? '.' : '...')}
            </p>
        ));

        return paragraphs;
    };

    // Generate the short version (first 200 characters)
    const shortDescription = generateShortDescription(bookData.description, 200);

    // Full version split into paragraphs
    const fullDescription = bookData.description.split('. ').map((sentence, index) => (
        <p key={index} className="book-page__paragraph">
            {sentence.trim() + (index < bookData.description.split('. ').length - 1 ? '.' : '')}
        </p>
    ));

    // Check if the description exceeds the character limit
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
                    <p className="book-page__rating">Rating: {bookData.averageRating || 'No ratings yet'} • {reviewsCount} reviews</p>
                </div>
            </section>

            <section className="book-page__description-section">
                <h3 className="book-page__subtitle book-page__subtitle--description">Book Description</h3>
                <div className="book-page__description">
                    {shouldShowToggleButton && !showFullDescription ? shortDescription : fullDescription}

                    {shouldShowToggleButton && (
                        <button onClick={toggleDescription} className="book-page__toggle-button">
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
                    reviews.map(review => <ReviewBox key={review._id} title={review.title} content={review.content} createdAt={review.createdAt} rating={review.rating} userName={review.userId.userName} />)
                ) : (
                    <>
                        <p className="book-page__rating">No reviews available for this book yet</p>
                        <Link>Review it now</Link>
                    </>
                )}
            </section>

        </div>
    );
}
