import { Navigate } from "react-router-dom";
import styles from "./styles.module.css";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  return token ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
