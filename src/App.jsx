import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function App() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user) {
      // Redirect based on role
      if (user.userType === "admin") {
        navigate("/admin");
      } else if (user.userType === "customer") {
        navigate("/customer");
      }
    } else {
      // No user → go to login
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div>

      <Outlet />
    </div>
  );
}
