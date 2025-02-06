import axios from "axios";

export default async function booksPageLoader() {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/books?limit=40&page=1`);

        const books = response.data.books;
        return books;
    } catch (error) {
        console.error('Error loading book data:', error);
        throw new Response("Failed to load book", { status: 500 });
    }
}
