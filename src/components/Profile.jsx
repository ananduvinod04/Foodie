import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Profile() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/login"); // if not logged in → go to login
    } else {
      setCurrentUser(user);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  if (!currentUser) {
    return null; // while loading
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#fbe6d9] dark:bg-gray-900 px-4 transition-colors duration-500">
      <div className="bg-[#fbe6d9] dark:bg-gray-800 shadow-lg rounded-2xl p-6 w-full max-w-md transition-colors duration-500">
        <h1 className="text-2xl font-bold text-center mb-6 text-orange-600 dark:text-orange-400">
          Profile
        </h1>

        <div className="space-y-4 text-black dark:text-white">
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Full Name</p>
            <p className="text-lg font-semibold">{currentUser.name}</p>
          </div>

          <div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Email</p>
            <p className="text-lg">{currentUser.email || "N/A"}</p>
          </div>

          <div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">User ID</p>
            <p className="text-lg">{currentUser.userId}</p>
          </div>

          <div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Role</p>
            <p className="text-lg capitalize">{currentUser.role}</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
