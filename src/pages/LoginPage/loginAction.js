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

        if (error.response && error.response.status === 401) {
            return new Response(JSON.stringify({ error: 'Invalid email or password' }), {
                status: 401,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }

        return new Response(JSON.stringify({ error: 'Something went wrong. Please try again later.' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
