/* eslint-disable react/prop-types */
import './FloatingLabelInput.scss';

export default function FloatingLabelInput({ id, type, label, name }) {
    return (
        <div className="floating-label-input">
            <input
                type={type}
                id={id}
                name={name}
                placeholder=" " // Placeholder space to trigger the label effect
                required
                className={`floating-label-input__field floating-label-input__field--${name}`}
            />
            <label htmlFor={id} className="floating-label-input__label">
                {label}
            </label>
        </div>
    );
}
