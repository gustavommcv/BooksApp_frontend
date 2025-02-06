import { Rating } from 'react-simple-star-rating';
import './ReviewBox.scss';

// eslint-disable-next-line react/prop-types
export default function ReviewBox({ title, content, createdAt, rating, userName }) {
    return (
        <div className="review-box">
            <Rating size={24} readonly={true} initialValue={rating} />
            <div className="review-box__user-info">
                <p>{userName},</p>
                <p>{formatDate(createdAt)}</p>
            </div>
            <div className='review-box__review-info'>
                <p className='review-box__title'>{title}</p>
                <p className='review-box__content'>{content}</p>
            </div>
        </div>
    );
}

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    
    return `${month}/${day}/${year}`;
};
