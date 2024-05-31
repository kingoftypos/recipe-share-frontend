import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import Header from "./components/Header";
import Card from "./components/Card";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import { AuthContextProvider } from "./Context";
import CreatePostPage from "./pages/CreatePostPage";
import RecipesPage from "./pages/RecipesPage";
function App() {
  return (
    <div className="">
      <AuthContextProvider>
        <Header />
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />;
          <Route path="/login" element={<LoginPage />} />;
          <Route path="/" element={<Home />} />;
          <Route path="/recipes" element={<RecipesPage/>}/>;
          <Route path="/recipe/:id" element={<RecipeDetailPage />} />;
          <Route path="/create-recipe" element={<CreatePostPage />} />
        </Routes>
        {/* <Card id="6628fbee2c3b3029d8cc4a1b"/> */}
      </AuthContextProvider>
    </div>
  );
}

export default App;
