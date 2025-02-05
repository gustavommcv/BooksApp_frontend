import './LoginForm.scss';
import FloatingLabelInput from '../FloatingLabelInput/FloatingLabelInput';
import Button from '../Button/Button';

export default function LoginForm() {
    return (
        <form className="login-form" action="">
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
                <Button className='login-form__submitButton'>Submit</Button>
                <input type="checkbox" name="rememberMe" id="rememberMe" />
                <label htmlFor="rememberMe">Remember email?</label>
            </div>
        </form>
    );
}
