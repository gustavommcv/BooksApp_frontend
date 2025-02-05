import axios from "axios";

export async function homeLoader() {
  let randomBooks = [];
  let recommendedBooks = [];

  try {
    const responseRandomBooks = await axios.get(`${import.meta.env.VITE_API_URL}/books?random=true&limit=50`);
    randomBooks = responseRandomBooks.data.books;

    const authCheck = await axios.get(`${import.meta.env.VITE_API_URL}/auth/status`, {
      withCredentials: true,
    });

    if (authCheck.status === 200) {
      const responseRecommendations = await axios.get(`${import.meta.env.VITE_API_URL}/books/recommendations?limit=50`, {
        withCredentials: true,
      });
      recommendedBooks = responseRecommendations.data.books;
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.log("User not authenticated. Returning only random books.");
    } else {
      console.error("Error loading books or checking authentication.", error);
    }
  }

  return {
    books: randomBooks,
    recommendedBooks,
  };
}
