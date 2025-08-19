import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const userInfo = [
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

  // save mock users in localStorage once
  if (!localStorage.getItem("userInfo")) {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("userInfo"));

    const foundUser = users.find(
      (u) => u.userId === userId && u.password === password
    );

    if (foundUser) {
      // save logged in user
      localStorage.setItem("user", JSON.stringify(foundUser));

      // navigate based on role
      if (foundUser.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/customer");
      }
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
  <div className="flex items-center justify-center min-h-screen bg-black px-4">
    <div className="container flex flex-col sm:flex-row items-center justify-center gap-3">
        <div className=" w-fit ">
         <img src={logo} alt=""className="w-[400px] "/> 
    </div>
    
  <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-xs sm:max-w-sm">
    
    <h1 className="text-xl font-bold text-center text-gray-800 mb-4">
     Login
    </h1>

    <form className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
      />

      <button
        type="button"
        onClick={handleLogin}
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md transition duration-200 text-sm"
      >
        Login
      </button>
    </form>
  </div>
    </div>
    
</div>


  );
}
