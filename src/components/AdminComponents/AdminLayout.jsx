import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Admin Panel</h1>
      <nav className="flex gap-4 my-4">
        <Link to="products">Products</Link>
        <Link to="orders">Orders</Link>
      </nav>
      <Outlet />
    </div>
  );
}
