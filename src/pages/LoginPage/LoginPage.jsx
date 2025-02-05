import { Link } from 'react-router';
import './LoginPage.scss';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function LoginPage() {
    return (
        <div className='login-page'>
            <h1 className='login-page__title'>Log In</h1>

            <LoginForm />

            <div className="login-page__links">
                <p>
                    <Link to='/forgot-password'>Forgot your password?</Link>
                </p>
                <p>New around here? <Link to='/forgot-password'>Create your accont</Link></p>
            </div>
            
        </div>
    )
}
