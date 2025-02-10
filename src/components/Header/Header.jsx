import { Link, useNavigate } from 'react-router-dom';
import './Header.scss';
import { useContext, useState, useEffect, useRef } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';

export default function Header() {
    const { isAuthenticated, logout, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu visibility
    const menuRef = useRef(null); // Ref to track clicks outside the menu

    const handleLogout = async () => {
        toggleMenu();
        const success = await logout();
        if (success) {
            navigate('/');
        }
    };

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev); // Toggle the dropdown menu
    };

    // Close menu when clicking outside or pressing ESC
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false); // Close menu if clicked outside
            }
        };

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setMenuOpen(false); // Close menu on ESC key
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <header className="header">
            <h1 className="header__title">
                <Link to={'/'}>{import.meta.env.VITE_APP_TITLE}</Link>
            </h1>

            {isAuthenticated && user ? (
                <div className="header__user" ref={menuRef}>
                    <p className="header__user-welcome">
                        Welcome, {user.userName}!
                    </p>
                    <button
                        className="header__user-picture--button"
                        onClick={toggleMenu}
                    >
                        <img
                            className="header__user-picture"
                            src={`https://localhost:3000${user.profilePicture}`}
                            alt="Profile"
                        />
                    </button>
                    {menuOpen && (
                        <div className="header__dropdown">
                            <ul>
                                <li>
                                    <Link onClick={toggleMenu} to={`/profile/${user._id}`}>Profile</Link>
                                </li>
                                <li>
                                    <Link onClick={toggleMenu} to="/profile/settings">Settings</Link>
                                </li>
                                <li onClick={handleLogout}>Logout</li>
                            </ul>
                        </div>
                    )}
                </div>
            ) : (
                <Link to={'/login'} className="header__login">Login</Link>
            )}
        </header>
    );
}
