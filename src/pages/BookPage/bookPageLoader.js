import axios from "axios";

export default async function bookPageLoader({ params }) {
    const { bookId } = params;
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/books/${bookId}`);
        const responseReviews = await axios.get(`${import.meta.env.VITE_API_URL}/reviews/book/${bookId}`);

        const bookData = response.data.book;
        return { bookData, reviews: responseReviews.data.reviews};
    } catch (error) {
        console.error('Error loading book data:', error);
        throw new Response("Failed to load book", { status: 500 });
    }
}
