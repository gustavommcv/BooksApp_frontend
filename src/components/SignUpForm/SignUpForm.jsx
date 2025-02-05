import Button from '../Button/Button';
import FloatingLabelInput from '../FloatingLabelInput/FloatingLabelInput'
import './SignUpForm.scss';

export default function SignUpForm() {
    return (
        <form className="signup-form" action="">
        <FloatingLabelInput
            id="email"
            type="email"
            name="email"
            label="E-mail"
        />
        <FloatingLabelInput
            id="username"
            type="username"
            name="username"
            label="User Name"
        />
        <FloatingLabelInput
            id="password"
            type="password"
            name="password"
            label="Password"
        />

        <div className='signup-form__checkbox-input'>
            <Button className='signup-form__submitButton'>Submit</Button>
            <input type="checkbox" name="rememberMe" id="rememberMe" />
            <label htmlFor="rememberMe">Remember email?</label>
        </div>
    </form>
    );
}
