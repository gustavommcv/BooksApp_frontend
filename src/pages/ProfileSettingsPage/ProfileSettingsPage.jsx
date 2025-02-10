import './ProfileSettingsPage.scss';
import { useActionData } from 'react-router-dom';
import EditProfileForm from '../../components/EditProfileForm/EditProfileForm';

export default function ProfileSettingsPage() {
    const actionData = useActionData();

    return (
        <div className="profile-settings-page">
            <h1 className="profile-settings-page__title">Edit Profile</h1>

            {actionData?.errors && (
                <div className="profile-settings-page__error">
                    {actionData.errors.map((error, index) => (
                        <p key={index} className="error-message">{error}</p>
                    ))}
                </div>
            )}

            <EditProfileForm />
        </div>
    );
}
