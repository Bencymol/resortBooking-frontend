import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResortsPage from "./pages/ResortsPage";
import UserSignup from "./pages/UserSignupPage";
import UserHome from "./pages/UserHome";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import ResortDetails from "./pages/ResortDetails";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resort-list" element={<ResortsPage />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/user/home" element={<UserHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/resort-details/:id" element={<ResortDetails />} />
      </Routes>
    </div>
  );
};

export default App;
