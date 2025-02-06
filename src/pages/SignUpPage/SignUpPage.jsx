import './SignUpPage.scss';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { Link, useActionData, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function SignUpPage() {
    const actionData = useActionData(); // Capture errors from the action
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        if (actionData?.successMessage) {
            setSuccessMessage(actionData.successMessage); // Display success message on page
            setTimeout(() => {
                navigate('/login');
            }, 5000); // Redirect after 5 seconds
        }
    }, [actionData, navigate]);

    return (
        <div className='signup-page'>
            <h1 className='signup-page__title'>Sign Up</h1>

            {successMessage && (
                <div className="signup-page__success">
                    <p>{successMessage}</p>
                </div>
            )}

            {actionData?.errors && (
                <div className="signup-page__error">
                    {actionData.errors.map((error, index) => (
                        <p key={index} className="error-message">{error}</p>
                    ))}
                </div>
            )}

            {!actionData?.successMessage && <SignUpForm />}

            {!actionData?.successMessage && <div className="signup-page__links">
                <p>
                    <Link to='/login'>Already have an account?</Link>
                </p>
            </div>}
            
            {actionData?.successMessage && <p>
                    <Link className='signup-page__loginBtn' to='/login'>Log In</Link>
            </p>}
            
        </div>
    );
}
