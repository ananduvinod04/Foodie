// src/components/AdminComponents/InventoryManagement.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import itemMaster from "../../Data/ItemMaster";

export default function InventoryManagement() {
  const [items] = useState(itemMaster);
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/admin/edit-inventory/${id}`); // ✅ Navigate to Edit Page with ID
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">Inventory Management</h1>

      {items.length === 0 ? (
        <p className="text-gray-500 text-center">No items available in inventory.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg border flex items-center p-3 gap-4 hover:shadow-lg transition"
            >
              {/* Thumbnail */}
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
              />

              {/* Details */}
              <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-center">
                  <h2 className="text-base font-semibold text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-sm font-bold text-gray-700">₹{item.price}</p>
                </div>

                <p className="text-xs text-gray-600 line-clamp-1">
                  {item.description}
                </p>

                <div className="flex justify-between items-center mt-2 text-xs">
                  <span
                    className={`px-2 py-0.5 rounded ${
                      item.foodType === "veg"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.foodType}
                  </span>
                  {item.offers && (
                    <span className="text-blue-500 font-medium">
                      {item.offers}
                    </span>
                  )}
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded text-xs"
                  >
                    Edit
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
