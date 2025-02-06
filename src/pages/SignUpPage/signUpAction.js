import axios from 'axios';

export async function signUpAction({ request }) {
    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('password');
    const userName = formData.get('username');
    const role = formData.get('role'); // Get role from the form

    try {
        // Sign up with all necessary fields
        await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, 
            { 
                userName,
                email, 
                password,
                role // Include role in the request payload
            }
        );

        // On success, redirect to login
        return { successMessage: `Verification email sent successfully to: ${email}` };
    } catch (error) {
        console.error('Signup error:', error);

        let errors = ['Failed to sign up. Please try again later.']; // Default error

        // Handle backend response errors
        if (error.response) {
            if (error.response.data.message) {
                errors = [error.response.data.message]; // Direct message from backend
            } else if (error.response.data.errors) {
                errors = error.response.data.errors.map(err => err.msg); // Validation errors
            }
        }

        // Return errors using new Response
        return new Response(JSON.stringify({ errors }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
