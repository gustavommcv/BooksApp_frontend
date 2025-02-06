# 📚 BooksApp - Frontend Interface for Book Management

## 📖 Description
BooksApp Frontend is the user-facing interface of the BooksApp platform, allowing users to browse the book catalog, leave ratings, write reviews, and manage their profiles. The application integrates seamlessly with the backend API and external services to provide an interactive and personalized user experience.

---

## 📋 Table of Contents
- [🚀 Features](#-features)  
- [🛠 Technologies Used](#-technologies-used)  
- [📂 Project Structure](#-project-structure)  
- [🔗 Integration with Backend](#-integration-with-backend)  
- [💻 Running the Project Locally](#-running-the-project-locally)  
- [🌟 Main Technical Decisions](#-main-technical-decisions)  
- [🛡 Possible Future Improvements](#-possible-future-improvements)  
- [👤 Author](#-author)  

---

## 🚀 Features
- 🖥 **Responsive Design:** A mobile-first responsive design, ensuring a seamless experience across devices.
- 🔑 **Authentication:** Login, signup, and email verification workflows integrated with the backend API.
- 📚 **Book Catalog:** View detailed information about books, including reviews, ratings, and descriptions.
- 🌟 **Personalized Recommendations:** Display book suggestions based on user activity and reviews.
- ✍️ **Review and Rating System:** Users can leave ratings and comments on books directly through the frontend.
- 📂 **User Profile Management:** Users can view and update their profile information.

---

## 🛠 Technologies Used
- **Framework:** React with React Router  
- **State Management:** Context API  
- **CSS:** SCSS with modular and reusable components  
- **HTTP Requests:** Axios for backend communication  
- **Authentication:** JWT-based login integrated with backend  
- **Build Tool:** Vite (for development and production builds)  

---

## 📂 Project Structure

BooksAppFrontend/  
│  
├── **src/**  
│   ├── **assets/** — Static assets like images, icons, etc.  
│   ├── **components/** — Reusable UI components (buttons, forms, etc.)  
│   │   ├── **BookHome/** — Home page components for displaying books  
│   │   ├── **Button/** — Custom button component  
│   │   ├── **FloatingLabelInput/** — Custom floating label input  
│   │   ├── **FloatingLabelSelect/** — Custom floating label select  
│   │   ├── **Header/** — Navigation header  
│   │   ├── **LoginForm/** — Form for login  
│   │   ├── **ProtectedRoute/** — Route protection logic  
│   │   ├── **SignUpForm/** — Form for user signup  
│   │   └── **Spinner/** — Loading spinner component  
│  
│   ├── **context/** — Context providers for authentication and shared state  
│   ├── **pages/** — Main pages of the application  
│   ├── **styles/** — Global SCSS styles  
│   │   ├── **abstracts/** — SCSS variables, mixins, and functions  
│   │   └── **base/** — Base global styles  
│   ├── **main.jsx** — Entry point of the React application  
│   ├── **routes.jsx** — Application routes configuration  
│  
├── **public/** — Publicly accessible files (favicon, etc.)  
├── **.env** — Environment variables  
├── **.env.example** — Example environment variables  
├── **package.json** — Project dependencies and scripts  
├── **vite.config.js** — Vite configuration  
└── **README.md** — Project documentation

---

## 🔗 Integration with Backend
The frontend communicates with the backend via RESTful API requests using **Axios**. The backend handles authentication, book data retrieval, reviews, and more.

### **Environment variables setup (`.env`):**
```env
VITE_API_URL=https://localhost:3000/api
```
Ensure this URL points to your running backend instance.

---

## 🌟 Main Technical Decisions

- 🚀 React with React Router: Simplifies routing and navigation between pages.
- 🎨 SCSS for Styling: Provides modular and reusable styles using mixins and variables.
- 🔧 Context API: Manages global state like user authentication and dynamic components.
- ⚡ Vite as Build Tool: Chosen for its fast development server and optimized production builds.

---

## 🛡 Possible Future Improvements

- ✅ Implement a search feature to quickly find books by title, author, or genre.
- ✅ Add an offline-first capability for reading book details without internet.
- ✅ Improve performance by adding caching or lazy loading of book covers.
- ✅ Add PWA (Progressive Web App) support for an app-like experience.
- ✅ Include a dark mode toggle to enhance accessibility.

---

## 👤 Author
- **Developed by [Gustavo Monnerat da Costa Veronese]([https://your-portfolio-link.com](https://github.com/gustavommcv))**  
- 📧 **Contact me at:** monnerat.gustavo@outlook.com 
