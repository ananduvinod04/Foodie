import { useState, useEffect } from "react";

export default function UserManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("userInfo")) || [];
    setUsers(storedUsers);
  }, []);

  const removeUser = (userId) => {
    const updatedUsers = users.filter((u) => u.userId !== userId);
    setUsers(updatedUsers);
    localStorage.setItem("userInfo", JSON.stringify(updatedUsers));
  };

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">User Management</h1>

      {users.length === 0 ? (
        <p className="text-gray-500 text-center">No users found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div
              key={user.userId}
              className="bg-white shadow-md rounded-lg p-4 border flex flex-col justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
                <p className="text-sm text-gray-600">{user.email}</p>
                <p className="text-sm text-gray-500">User ID: {user.userId}</p>
                <p
                  className={`text-sm mt-2 font-medium ${
                    user.role === "admin" ? "text-red-500" : "text-blue-500"
                  }`}
                >
                  Role: {user.role}
                </p>
              </div>

              <button
                onClick={() => removeUser(user.userId)}
                className="mt-4 bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md text-sm"
              >
                Remove User
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
