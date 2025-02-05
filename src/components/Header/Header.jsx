import { Link } from 'react-router';
import './Header.scss';

export default function Header() {

    return (
        <header className="header">
            <h1 className="header__title"><Link to={'/'}>{import.meta.env.VITE_APP_TITLE}</Link></h1>
        </header>
    );
}
