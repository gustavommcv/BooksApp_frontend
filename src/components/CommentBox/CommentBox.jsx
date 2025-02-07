import './CommentBox.scss';

// CommentBox component to display a user's comment
// eslint-disable-next-line react/prop-types
export default function CommentBox({ title, userName, createdAt, content }) {
    return (
        <div className="comment-box">
            <p className="comment-box__title"><strong>{title}</strong></p>
            <p className="comment-box__user">{userName} commented on {new Date(createdAt).toLocaleDateString()}</p>
            <p className="comment-box__content">{content}</p>
        </div>
    );
}
