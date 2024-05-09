import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />;
        <Route path="/login" element={<LoginPage />} />;
      </Routes>
    </div>
  );
}

export default App;
