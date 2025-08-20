import { useParams } from "react-router-dom";
import itemMaster from "../../Data/ItemMaster";

export default function CategoryDisplay() {
  const { categoryName } = useParams();

  // Filter items by category
  const filteredItems = itemMaster.filter(
    (item) => item.category === categoryName
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{categoryName} Items</h2>
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="mt-2 font-bold">₹{item.price}</p>
               <button
                onClick={() => console.log(`${food.name} ordered!`)}
                className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-sm sm:text-base"
              >
                Add
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No items available in this category.</p>
      )}
    </div>
  );
}
