import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthButtons from "./components/auth/AuthButtons";
import Profile from "./pages/Profile";
import Manager from "./pages/Manager";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthButtons />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/manager" element={<Manager/>} />
      </Routes>
    </Router>
  );
}

export default App;
