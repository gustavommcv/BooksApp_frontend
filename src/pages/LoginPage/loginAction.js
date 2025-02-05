import { redirect } from "react-router-dom";
import axios from 'axios';

export async function loginAction({ request }) {
    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('password');

    try {
        // Login API request
        await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, 
            { email, password }, 
            { withCredentials: true }
        );

        window.dispatchEvent(new Event('loginSuccess'));

        return redirect('/');
    } catch (error) {
        console.error('Error during login:', error);

        let errors = ['Something went wrong. Please try again later.']; // Default error

        // Handling backend errors
        if (error.response) {
            if (error.response.data.errors) {
                errors = error.response.data.errors.map(err => err.msg); // Collect error messages
            } else if (error.response.status === 401 || error.response.status === 400) {
                errors = ['Invalid email or password'];
            } else if (error.response.status === 404) {
                errors = ['User not found'];
            }
        }

        return new Response(JSON.stringify({ errors }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
