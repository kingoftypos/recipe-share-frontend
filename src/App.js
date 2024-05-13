import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import Home from "./components/Home";
import Header from "./components/Header";
import Card from "./components/Card";
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
      <Card id="6628fbee2c3b3029d8cc4a1b"/>
    </div>
  );
}

export default App;
