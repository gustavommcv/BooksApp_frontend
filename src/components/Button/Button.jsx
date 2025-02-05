import './Button.scss';

// eslint-disable-next-line react/prop-types
export default function Button({ children }) {
    return <button className="button">{children}</button>;
}
