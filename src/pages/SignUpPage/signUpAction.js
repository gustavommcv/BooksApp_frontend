import { redirect } from "react-router-dom";
import axios from 'axios';

export async function signUpAction({ request }) {
    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('password');
    const userName = formData.get('username');

    try {
        // signup
        await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, 
            { 
                userName,
                email, 
                password
            }
        );

        // On success, redirect to login
        return redirect('/login');
    } catch (error) {
        console.error('Signup error:', error);

        let errors = ['Failed to sign up. Please try again later.']; // Default error

        console.log(error.response.data.errors)

        // If there are validation errors from the backend
        if (error.response && error.response.data.errors) {
            errors = error.response.data.errors.map(err => err.msg); // Collect error messages
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
