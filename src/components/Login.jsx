import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("customer");
  const [isSignup, setIsSignup] = useState(false);
  const [errors, setErrors] = useState({}); // store form errors

  const navigate = useNavigate();

  const defaultUsers = [
    {
      name: "anandu",
      email: "anandu22@test.in",
      userId: "dev@7",
      password: "admin",
      role: "admin",
    },
    {
      name: "testCustomer",
      email: "Customer@test.in",
      userId: "cust@7",
      password: "admin",
      role: "customer",
    },
  ];

  if (!localStorage.getItem("userInfo")) {
    localStorage.setItem("userInfo", JSON.stringify(defaultUsers));
  }

  const validateLogin = () => {
    let tempErrors = {};
    if (!userId.trim()) tempErrors.userId = "User ID is required.";
    if (!password.trim()) tempErrors.password = "Password is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const validateSignup = () => {
    let tempErrors = {};
    if (!name.trim()) tempErrors.name = "Full name is required.";
    if (!email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Email is invalid.";
    }
    if (!userId.trim()) tempErrors.userId = "User ID is required.";
    if (!password.trim()) {
      tempErrors.password = "Password is required.";
    } else if (password.length < 4) {
      tempErrors.password = "Password must be at least 4 characters.";
    }
    if (!role) tempErrors.role = "Role is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleLogin = () => {
    if (!validateLogin()) return;

    const users = JSON.parse(localStorage.getItem("userInfo"));
    const foundUser = users.find(
      (u) => u.userId === userId && u.password === password
    );

    if (foundUser) {
      localStorage.setItem("user", JSON.stringify(foundUser));
      navigate(foundUser.role === "admin" ? "/admin" : "/customer", {
        replace: true,
      });
    } else {
      alert("Invalid credentials!");
    }
  };

  const handleSignup = () => {
    if (!validateSignup()) return;

    const users = JSON.parse(localStorage.getItem("userInfo"));
    if (users.find((u) => u.userId === userId)) {
      alert("User ID already exists!");
      return;
    }

    const newUser = { name, email, userId, password, role };
    const updatedUsers = [...users, newUser];
    localStorage.setItem("userInfo", JSON.stringify(updatedUsers));
    localStorage.setItem("user", JSON.stringify(newUser));

    navigate(role === "admin" ? "/admin" : "/customer", { replace: true });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4">
      <div className="container flex flex-col sm:flex-row items-center justify-center gap-3">
        <div className="w-fit">
          <img src={logo} alt="logo" className="w-[400px]" />
        </div>

        <div className="bg-orange-100 shadow-md rounded-xl p-6 w-full max-w-xs sm:max-w-sm">
          <h1 className="text-xl font-bold text-center text-gray-800 mb-4">
            {isSignup ? "Sign Up" : "Login"}
          </h1>

          <form
            className="flex flex-col gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            {isSignup && (
              <>
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 p-2 rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs">{errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 p-2 rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email}</p>
                  )}
                </div>

                <div>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="border border-gray-300 p-2 rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                  >
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                  </select>
                  {errors.role && (
                    <p className="text-red-500 text-xs">{errors.role}</p>
                  )}
                </div>
              </>
            )}

            <div>
              <input
                type="text"
                placeholder="User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="border border-gray-300 p-2 rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              {errors.userId && (
                <p className="text-red-500 text-xs">{errors.userId}</p>
              )}
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 p-2 rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              {errors.password && (
                <p className="text-red-500 text-xs">{errors.password}</p>
              )}
            </div>

            <button
              type="button"
              onClick={isSignup ? handleSignup : handleLogin}
              className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 rounded-md transition duration-200 text-sm"
            >
              {isSignup ? "Sign Up" : "Login"}
            </button>
          </form>

          <p className="text-xs text-center mt-3">
            {isSignup ? "Already have an account?" : "Don’t have an account?"}{" "}
            <button
              className="text-orange-600 hover:underline"
              onClick={() => {
                setErrors({});
                setIsSignup(!isSignup);
              }}
            >
              {isSignup ? "Login" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
