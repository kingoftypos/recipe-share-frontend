import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import Header from "./components/Header";
import RecipeDetailPage from "./pages/RecipeDetailPage";
function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />;
        <Route path="/login" element={<LoginPage />} />;
        <Route path="/" element={<Home />} />;
        <Route path="/recipe/:id" element={<RecipeDetailPage />} />;
      </Routes>
    </div>
  );
}

export default App;
