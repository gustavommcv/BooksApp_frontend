import { Form, useNavigation } from 'react-router-dom';
import Button from '../Button/Button';
import FloatingLabelInput from '../FloatingLabelInput/FloatingLabelInput';
import FloatingLabelSelect from '../FloatingLabelSelect/FloatingLabelSelect';
import './SignUpForm.scss';

export default function SignUpForm() {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    
    return (
        <Form method="POST" className="signup-form">
            <FloatingLabelInput
                id="email"
                type="email"
                name="email"
                label="E-mail"
            />
            <FloatingLabelInput
                id="username"
                type="text"
                name="username"
                label="User Name"
            />

            <FloatingLabelSelect
                id="role"
                name="role"
                label="Role"
                options={[
                    { value: 'user', label: 'User' },
                    { value: 'admin', label: 'Admin' },
                ]}
            />

            <FloatingLabelInput
                id="password"
                type="password"
                name="password"
                label="Password"
            />

            <div className="signup-form__checkbox-input">
                <Button className="signup-form__submitButton" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
            </div>
        </Form>
    );
}
