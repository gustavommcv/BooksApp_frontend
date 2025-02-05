import './SignUpPage.scss';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { Link, useActionData } from 'react-router-dom';

export default function SignUpPage() {
    const actionData = useActionData(); // Capture errors from the action

    return (
        <div className='signup-page'>
            <h1 className='signup-page__title'>Sign Up</h1>

            {actionData?.errors && (
                <div className="signup-page__error">
                    {actionData.errors.map((error, index) => (
                        <p key={index} className="error-message">{error}</p>
                    ))}
                </div>
            )}

            <SignUpForm />

            <div className="signup-page__links">
                <p>
                    <Link to='/login'>Already have an account?</Link>
                </p>
            </div>
        </div>
    );
}
