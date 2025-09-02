import { useState } from "react";
import categoryArray from "../../Data/category";

export default function CategoryManagement() {
  const [categories, setCategories] = useState(categoryArray);
  const [newCategory, setNewCategory] = useState({ name: "", icon: "" });
  const [editingId, setEditingId] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false); // modal state

  //  Open Form (for Add or Edit)
  const openForm = (id = null) => {
    if (id) {
      const cat = categories.find((c) => c.id === id);
      setNewCategory({ name: cat.categoryName, icon: cat.categoryIcon });
      setEditingId(id);
    } else {
      setNewCategory({ name: "", icon: "" });
      setEditingId(null);
    }
    setIsFormOpen(true);
  };

  // Add / Save Category
  const handleSaveCategory = () => {
    if (!newCategory.name.trim() || !newCategory.icon.trim()) return;

    if (editingId) {
      // update existing
      setCategories(
        categories.map((cat) =>
          cat.id === editingId
            ? {
                ...cat,
                categoryName: newCategory.name,
                categoryIcon: newCategory.icon,
              }
            : cat
        )
      );
    } else {
      // add new
      setCategories([
        ...categories,
        {
          id: Date.now(),
          categoryName: newCategory.name,
          categoryIcon: newCategory.icon,
        },
      ]);
    }

    setIsFormOpen(false);
    setEditingId(null);
    setNewCategory({ name: "", icon: "" });
  };

  // Delete Category
  const handleDelete = (id) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  return (
    <div className="p-6 text-black dark:text-white transition-colors duration-500">
      <h2 className="text-3xl font-bold mb-4 text-orange-600 dark:text-orange-400">
        Category Management
      </h2>

      {/* Add Button */}
      <button
        onClick={() => openForm()}
        className="mb-6 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
      >
        + Add Category
      </button>

      {/* Category List */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="flex flex-col items-center bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md transition-colors duration-500"
          >
            <span className="text-4xl">{cat.categoryIcon}</span>
            <p className="font-semibold mt-2">{cat.categoryName}</p>
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => openForm(cat.id)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(cat.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal (Form) */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 w-96 shadow-lg transition-colors duration-500">
            <h3 className="text-xl font-bold mb-4 text-orange-600 dark:text-orange-400">
              {editingId ? "Edit Category" : "Add New Category"}
            </h3>

            <input
              type="text"
              placeholder="Category Name"
              value={newCategory.name}
              onChange={(e) =>
                setNewCategory({ ...newCategory, name: e.target.value })
              }
              className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white p-2 rounded w-full mb-3"
            />
            <input
              type="text"
              placeholder="Icon (emoji)"
              value={newCategory.icon}
              onChange={(e) =>
                setNewCategory({ ...newCategory, icon: e.target.value })
              }
              className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white p-2 rounded w-full mb-4"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsFormOpen(false)}
                className="bg-gray-300 dark:bg-gray-700 dark:text-white px-4 py-2 rounded hover:bg-gray-400 dark:hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveCategory}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                {editingId ? "Save Changes" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
