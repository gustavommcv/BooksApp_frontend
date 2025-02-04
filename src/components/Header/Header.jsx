import './Header.scss';

export default function Header() {

    return (
        <header className="header">
            <h1 className="header__title">{import.meta.env.VITE_APP_TITLE}</h1>
        </header>
    );
}
