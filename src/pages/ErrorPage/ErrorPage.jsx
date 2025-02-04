import { Link } from 'react-router';
import './ErrorPage.scss';

export default function ErrorPage() {
  return (
    <div className="error-page">
      <h1 className="error-page__title">404</h1>
      <p className="error-page__message">Oops! The page you are looking for doesn&apos;t exist.</p>
      <Link to="/" className="error-page__link">Go back to Home</Link>
    </div>
  );
}
