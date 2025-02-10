import { useState } from 'react';
import { Form } from 'react-router-dom';
import './EditProfileSettings.scss';
import axios from 'axios';

export default function EditProfileForm() {
    const [isSubmitting, setIsSubmitting] = useState(false); // State to handle form submission
    const [showMessage, setShowMessage] = useState(false);  // State to show the confirmation message

    // Function to handle form submission
    const handleSubmit = async (event) => {
        setIsSubmitting(true);
        setShowMessage(false); // Hide any previous messages

        // Let the router handle the default form behavior
        event.preventDefault();
        const formData = new FormData(event.target);

        try {
            // Send form data to the server
            await axios.put(`${import.meta.env.VITE_API_URL}/user/profile`, formData, {
                withCredentials: true
            });

            // Show the success message after submission
            setShowMessage(true);
        } catch (error) {
            console.error('Error submitting the form:', error);
        } finally {
            setIsSubmitting(false); // Re-enable inputs after submission
        }
    };

    return (
        <Form
            encType="multipart/form-data"
            className="edit-profile-form"
            onSubmit={handleSubmit}
        >
            <div className="form-group">
                <label htmlFor="userName">Name</label>
                <input
                    type="text"
                    id="userName"
                    name="userName"
                    placeholder="Enter your userName"
                    disabled={isSubmitting} // Disable input when submitting
                />
            </div>

            <div className="form-group">
                <label htmlFor="bio">Bio</label>
                <textarea
                    id="bio"
                    name="bio"
                    placeholder="Tell us about yourself"
                    disabled={isSubmitting} // Disable input when submitting
                />
            </div>

            <div className="form-group">
                <label htmlFor="profilePicture">Profile Picture</label>
                <input
                    type="file"
                    id="profilePicture"
                    name="profilePicture"
                    disabled={isSubmitting} // Disable file input when submitting
                />
            </div>

            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Update Profile'}
            </button>

            {showMessage && (
                <p className="confirmation-message">
                    Changes may take a moment to reflect. You may need to refresh the page.
                </p>
            )}
        </Form>
    );
}
