import { useEffect, useState } from "react";

function OrderManagement() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  // ✅ Update order status
  const updateOrderStatus = (id, status) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  // ✅ Remove order completely
  const removeOrder = (id) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center sm:text-left">
        Order Management
      </h1>

      {orders.length === 0 ? (
        <p className="text-gray-600 text-center">No orders yet</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="border rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <h2 className="font-bold text-lg">
                  Order ID: <span className="text-orange-600">{order.id}</span>
                </h2>
                <span className="text-sm text-gray-500 mt-1 sm:mt-0">
                  {order.time}
                </span>
              </div>

              {/* User + Total */}
              <div className="mt-2 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <p className="text-gray-700">
                  <span className="font-semibold">User:</span> {order.userName}
                </p>
                <p className="font-semibold text-green-700">
                  Total: ₹{order.total}
                </p>
              </div>

              {/* Items */}
              <div className="mt-3">
                <h3 className="font-semibold">Items:</h3>
                <ul className="list-disc ml-5 space-y-1 text-sm sm:text-base">
                  {order.items.map((item) => (
                    <li key={item.id}>
                      <span className="font-medium">{item.name}</span> (x
                      {item.quantity}) – ₹
                      {item.price * item.quantity}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Status + Actions */}
              <div className="mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                {/* Current Status */}
                <p
                  className={`font-semibold ${
                    order.status === "Delivered"
                      ? "text-green-600"
                      : order.status === "Cancelled"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  Status: {order.status || "Pending"}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => updateOrderStatus(order.id, "Delivered")}
                    className="px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600 transition"
                  >
                    Delivered
                  </button>
                  <button
                    onClick={() => updateOrderStatus(order.id, "Cancelled")}
                    className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 transition"
                  >
                    Cancel Order
                  </button>
                  <button
                    onClick={() => removeOrder(order.id)}
                    className="px-3 py-1 rounded bg-gray-600 text-white hover:bg-gray-700 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default OrderManagement;
