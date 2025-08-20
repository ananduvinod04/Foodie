import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store"; // Redux store

import App from "./App";
import Login from "./components/Login";
import AdminLayout from "./components/AdminComponents/AdminLayout";
import CustomerLayout from "./components/CustomerComponents/CustomerLayout";
import ProtectedRoute from "./routes/ProtectedRoute";
import CustomerDashboard from "./components/CustomerComponents/CustomerDashboard";
import CategoryDisplay from "./components/CustomerComponents/CategoryDisplay";


import './index.css';
import Cart from "./components/CustomerComponents/cart";

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
        children: [
          { index: true, element: <CustomerDashboard /> },
          {
            path: "category/:categoryName", // dynamic route
            element: <CategoryDisplay />,
          },
          { path: "cart", element: <Cart /> }
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}> {/* Redux Provider */}
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
