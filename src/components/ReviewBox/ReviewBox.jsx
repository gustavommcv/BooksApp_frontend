import './ReviewBox.scss';

// eslint-disable-next-line react/prop-types
export default function ReviewBox({ title, content, createdAt, rating, userName }) {
    return (
        <div className="review-box">
            <p>{title}</p>
            <p>{content}</p>
            <p>{createdAt}</p>
            <p>{rating}</p>
            <p>{userName}</p>
        </div>
    );
}
