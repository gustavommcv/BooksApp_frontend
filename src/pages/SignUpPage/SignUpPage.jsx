import './SignUpPage.scss';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { Link } from 'react-router-dom';

export default function SignUpPage() {
    return (
        <div className='signup-page'>
            <h1 className='signup-page__title'>Sign Up</h1>

            <SignUpForm />

            <div className="signup-page__links">
                <p>
                    <Link to='/login'>Already have an account?</Link>
                </p>
            </div>
            
        </div>
    );
}
