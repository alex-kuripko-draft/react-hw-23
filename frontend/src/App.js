import "./App.css";
import Register from "./pages/register";
import Login from "./pages/login";
import Profile from "./pages/profile";
import { Routes, Route, Link } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  return (
    <>
      <nav
        style={{
          display: "flex",
          gap: "15px",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/login">login</Link>
        <Link to="/register">register</Link>
        <Link to="/profile">profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default App;
