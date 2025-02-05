import { Link } from 'react-router-dom';
import './Button.scss';

// eslint-disable-next-line react/prop-types
export default function Button({ children, className, type, navigateTo }) {
    if (type === 'link') return <Link to={navigateTo} className={`button ${className}`}>{children}</Link>;
    return <button className={`button ${className}`}>{children}</button>;
}
