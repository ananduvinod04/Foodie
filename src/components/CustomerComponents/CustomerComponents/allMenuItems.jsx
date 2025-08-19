import { useState } from "react";
import itemMaster from "../../../Data/ItemMaster";

const AllMenu = () => {
  // Initialize cart counters for each item
  const initialCounts = itemMaster.reduce((acc, item) => {
    acc[item.id] = 0;
    return acc;
  }, {});

  const [cartCounts, setCartCounts] = useState(initialCounts);

  const handleIncrement = (id) => {
    setCartCounts((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const handleDecrement = (id) => {
    setCartCounts((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Menu Items</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {itemMaster.map((food) => (
          <div
            key={food.id}
            className="p-4 border rounded shadow hover:shadow-lg transition flex flex-col justify-between"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-32 sm:h-40 md:h-48 object-cover mb-2 rounded"
            />
            <div className="mb-2">
              <h2 className="font-bold text-lg">{food.name}</h2>
              <p className="text-gray-700 text-sm">{food.description}</p>
              <p className="text-green-600 font-semibold">₹{food.price}</p>
            </div>

            <div className="mt-auto flex items-center justify-between">
              {/* Counter */}
              <div className="flex items-center border rounded overflow-hidden">
                <button
                  onClick={() => handleDecrement(food.id)}
                  className="px-2 py-1 bg-gray-200 hover:bg-gray-300 transition"
                >
                  -
                </button>
                <span className="px-3">{cartCounts[food.id]}</span>
                <button
                  onClick={() => handleIncrement(food.id)}
                  className="px-2 py-1 bg-gray-200 hover:bg-gray-300 transition"
                >
                  +
                </button>
              </div>

              {/* Add to Cart / Order Button */}
              <button
                onClick={() => console.log(`${food.name} ordered!`)}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMenu;
