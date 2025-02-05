import { Link } from 'react-router-dom';
import './BookHome.scss';

// eslint-disable-next-line react/prop-types
export default function BookHome({ id, cover, title, author }) {
    return (
        <div className="book-home">
            <Link to={`/book/${id}`}><img src={cover} alt="Withouot Book Cover" className="book-home__cover" /></Link>
            <h4 className="book-home__title">{title}</h4>
            <p className="book-home__author">{author}</p>
        </div>
    );
}
