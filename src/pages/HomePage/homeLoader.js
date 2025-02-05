import axios from "axios";

export async function homeLoader() {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/books?random=true&limit=30`);
    return { books: response.data.books };
  } catch (error) {
    console.error("Failed to load books:", error);
    // throw new Response("Failed to load books", { status: 500 });
  }
}
