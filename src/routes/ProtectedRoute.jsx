import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const user = JSON.parse(localStorage.getItem("user")); // fake auth

  if (!user) return <Navigate to="/login" replace />;

  if (user.role !== role) {
    // redirect to their own dashboard
    return <Navigate to={`/${user.role}`} replace />;
  }

  return children;
}
