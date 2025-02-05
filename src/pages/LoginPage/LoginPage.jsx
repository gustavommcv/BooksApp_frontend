import './LoginPage.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import { Link, useActionData } from 'react-router-dom';

export default function LoginPage() {
    const actionData = useActionData(); // Capture errors from the action

    return (
        <div className='login-page'>
            <h1 className='login-page__title'>Log In</h1>

            {actionData?.errors && (
                <div className="login-page__error">
                    {actionData.errors.map((error, index) => (
                        <p key={index} className="error-message">{error}</p>
                    ))}
                </div>
            )}

            <LoginForm />

            <div className="login-page__links">
                <p>
                    <Link to='/forgot-password'>Forgot your password?</Link>
                </p>
                <p>New around here? <Link to='/signup'>Create your account</Link></p>
            </div>
        </div>
    );
}
