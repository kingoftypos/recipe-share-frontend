import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import Header from "./components/Header";
function App() {
  return (
    <div className="">
      <Header />
      <Home/>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />;
        <Route path="/login" element={<LoginPage />} />;
      </Routes>
    </div>
  );
}

export default App;
