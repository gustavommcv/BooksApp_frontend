/* eslint-disable react/prop-types */
import './FloatingLabelSelect.scss';

export default function FloatingLabelSelect({ id, name, label, options }) {
    return (
        <div className="floating-label-select">
            <select id={id} name={name} required className="floating-label-select__input">
                <option value="" disabled hidden>Select a role</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <label htmlFor={id} className="floating-label-select__label">
                {label}
            </label>
        </div>
    );
}
