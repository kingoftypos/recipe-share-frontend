import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
