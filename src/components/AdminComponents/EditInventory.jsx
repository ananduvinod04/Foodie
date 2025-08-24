// src/components/AdminComponents/EditInventory.jsx
import { useParams } from "react-router-dom";
import itemMaster from "../../Data/ItemMaster";

export default function EditInventory() {
  const { id } = useParams();
  const item = itemMaster.find((i) => i.id.toString() === id);

  if (!item) {
    return <p className="p-6 text-red-500">Item not found.</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Item</h1>

      <form className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            defaultValue={item.name}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Price</label>
          <input
            type="number"
            defaultValue={item.price}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            defaultValue={item.description}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
