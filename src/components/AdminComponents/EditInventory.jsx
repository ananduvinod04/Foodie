// src/components/AdminComponents/EditInventory.jsx
import { useParams } from "react-router-dom";
import itemMaster from "../../Data/ItemMaster";

export default function EditInventory() {
  const { id } = useParams();
  const item = itemMaster.find((i) => i.id.toString() === id);

  if (!item) {
    return (
      <p className="p-6 text-red-600 dark:text-red-400 bg-[#fbe6d9] dark:bg-gray-900 min-h-screen">
        Item not found.
      </p>
    );
  }

  return (
    <div className="p-6 bg-[#fbe6d9] dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <h1 className="text-2xl font-bold mb-4 text-orange-600 dark:text-orange-400">
        Edit Item
      </h1>

      <form className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm font-medium text-gray-800 dark:text-gray-200">
            Name
          </label>
          <input
            type="text"
            defaultValue={item.name}
            className="w-full border border-gray-300 dark:border-gray-600 px-3 py-2 rounded 
                       bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800 dark:text-gray-200">
            Price
          </label>
          <input
            type="number"
            defaultValue={item.price}
            className="w-full border border-gray-300 dark:border-gray-600 px-3 py-2 rounded 
                       bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800 dark:text-gray-200">
            Description
          </label>
          <textarea
            defaultValue={item.description}
            className="w-full border border-gray-300 dark:border-gray-600 px-3 py-2 rounded 
                       bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
