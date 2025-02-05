import './Button.scss';

// eslint-disable-next-line react/prop-types
export default function Button({ children, className }) {
    return <button className={`button ${className}`}>{children}</button>;
}
