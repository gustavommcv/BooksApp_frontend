import './LoginForm.scss';
import FloatingLabelInput from '../FloatingLabelInput/FloatingLabelInput';
import Button from '../Button/Button';
import { Form } from 'react-router-dom';

export default function LoginForm() {
    return (
        <Form className="login-form" method="POST">
            <FloatingLabelInput
                id="email"
                type="email"
                name="email"
                label="E-mail"
            />
            <FloatingLabelInput
                id="password"
                type="password"
                name="password"
                label="Password"
            />

            <div className='login-form__checkbox-input'>
                <Button type="submit" className='login-form__submitButton'>Submit</Button>
                <input type="checkbox" name="rememberMe" id="rememberMe" />
                <label htmlFor="rememberMe">Remember email?</label>
            </div>
        </Form>
    );
}
