import { Link, Outlet } from "react-router-dom";

export default function CustomerLayout() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Customer Dashboard</h1>
      <nav className="flex gap-4 my-4">
        <Link to="products">Products</Link>
        <Link to="cart">Cart</Link>
      </nav>
      <Outlet />
    </div>
  );
}
