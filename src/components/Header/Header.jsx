import { Link } from 'react-router-dom';
import './Header.scss';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';

export default function Header() {

    const { isAuthenticated } = useContext(AuthContext);

    return (
        <header className="header">
            <h1 className="header__title"><Link to={'/'}>{import.meta.env.VITE_APP_TITLE}</Link></h1>
            {isAuthenticated && <Link className='header__logout'>Logout</Link>}
        </header>
    );
}
