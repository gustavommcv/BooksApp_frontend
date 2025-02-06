import axios from "axios";

export default async function bookPageLoader({ params }) {
    const { bookId } = params;
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/books/${bookId}`);

        const bookData = response.data.book;
        return bookData;
    } catch (error) {
        console.error('Error loading book data:', error);
        throw new Response("Failed to load book", { status: 500 });
    }
}
