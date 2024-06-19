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
import Userprofilepage from "./pages/Userprofilepage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ForgetPassword from "./pages/ForgetPassword";

import Footer from "./components/Footer";
import EditRecipePage from "./pages/EditRecipePage";
function App() {
  return (
    <div className="">
      <AuthContextProvider>
        <Header />
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />;
          <Route path="/login" element={<LoginPage />} />;
          <Route path="/" element={<Home />} />;
          <Route path="/recipes" element={<RecipesPage />} />;
          <Route path="/recipe/:id" element={<RecipeDetailPage />} />;
          <Route path="/create-recipe" element={<CreatePostPage />} />
          <Route path="/profile" element={<Userprofilepage />} />
          <Route
            path="/reset-password/:id/:token"
            element={<ResetPasswordPage />}
          />
          <Route path="forget-password" element={<ForgetPassword />} />
          <Route path="/edit/recipe/:id" element={<EditRecipePage />} />
        </Routes>
        {/* <Footer /> */}
      </AuthContextProvider>
    </div>
  );
}

export default App;
