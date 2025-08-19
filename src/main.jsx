
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import AdminLayout from "./components/AdminComponents/AdminLayout";
import CustomerLayout from "./components/CustomerComponents/CustomerLayout";
import ProtectedRoute from "./routes/ProtectedRoute";

import'./index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
            { index: true, element: <Login /> }, 
      { path: "login", element: <Login /> },

      // Admin routes
      {
        path: "admin/*",
        element: (
          <ProtectedRoute role="admin">
            <AdminLayout />
          </ProtectedRoute>
        ),
      },

      // Customer routes
      {
        path: "customer/*",
        element: (
          <ProtectedRoute role="customer">
            <CustomerLayout />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
