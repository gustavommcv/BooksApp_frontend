import './LoginPage.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import { Link, useActionData } from 'react-router-dom';

export default function LoginPage() {
    const actionData = useActionData(); // Get the response from loginAction

    return (
        <div className='login-page'>
            <h1 className='login-page__title'>Log In</h1>

            {actionData?.error && (
                <p className="login-page__error">{actionData.error}</p>
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
