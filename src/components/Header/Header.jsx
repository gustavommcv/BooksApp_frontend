import { Link, useNavigate } from 'react-router-dom';
import './Header.scss';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';

export default function Header() {

    const { isAuthenticated, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        const sucess = await logout();
        if (sucess) {
            navigate('/');
        }
    }

    return (
        <header className="header">
            <h1 className="header__title"><Link to={'/'}>{import.meta.env.VITE_APP_TITLE}</Link></h1>
            {isAuthenticated && <button onClick={handleLogout} className='header__logout'>Logout</button>}
            {!isAuthenticated && <Link to={'/login'} className='header__logout'>Login</Link>}
        </header>
    );
}
