import { Route, Routes } from "react-router";
import Layout from "./pages/Shared/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<ErrorPage />} /> 
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
