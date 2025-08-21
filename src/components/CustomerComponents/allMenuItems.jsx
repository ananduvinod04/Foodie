import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import itemMaster from "../../Data/ItemMaster";
import { addItem, decrementItem } from "../../redux/cartSlice";

const AllMenu = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [openSort, setOpenSort] = useState(false); // STATE HANDLS SORTING OF ALL ITEMS
  const sortRef = useRef(null);//CLOSE SORT DROPDOWN WHILE CLICKS ON OUTSIDE

  // Redux hooks
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setOpenSort(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Helper: get quantity of an item in cart
  const getQuantity = (id) => {
    const item = cartItems.find(i => i.id === id);
    return item ? item.quantity : 0;
  };

  const handleIncrement = (food) => {
    dispatch(addItem(food));
  };

  const handleDecrement = (id) => {
    dispatch(decrementItem(id));
  };

  // Filter items by search
  let filteredItems = itemMaster.filter(
    (food) =>
      food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      food.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort items
  if (sortBy === "name") {
    filteredItems = [...filteredItems].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "priceLowHigh") {
    filteredItems = [...filteredItems].sort((a, b) => a.price - b.price);
  } else if (sortBy === "priceHighLow") {
    filteredItems = [...filteredItems].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="p-4">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center sm:text-left">
        All Menu Items
      </h1>

      {/* Search + Sort Controls */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6 items-stretch sm:items-center">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search food..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 w-full sm:w-72 bg-white border rounded-full shadow-md focus:ring-2 focus:ring-orange-400 outline-none text-gray-700 placeholder-gray-400"
        />

        {/* Sort Dropdown */}
        <div ref={sortRef} className="relative w-full sm:w-[200px]">
          <button
            onClick={() => setOpenSort(!openSort)}
            className="w-full flex items-center justify-between px-4 py-2 bg-orange-500 text-white font-medium rounded-full shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
          >
            {sortBy === "name"
              ? "Name (A–Z)"
              : sortBy === "priceLowHigh"
              ? "Price (Low → High)"
              : sortBy === "priceHighLow"
              ? "Price (High → Low)"
              : "Sort By"}
            <svg
              className={`w-4 h-4 ml-2 transform transition-transform ${
                openSort ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {openSort && (
            <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg z-10">
              <button
                onClick={() => { setSortBy("name"); setOpenSort(false); }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-100 rounded-t-lg"
              >
                Name (A–Z)
              </button>
              <button
                onClick={() => { setSortBy("priceLowHigh"); setOpenSort(false); }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-100"
              >
                Price (Low → High)
              </button>
              <button
                onClick={() => { setSortBy("priceHighLow"); setOpenSort(false); }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-100 rounded-b-lg"
              >
                Price (High → Low)
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredItems.map((food) => (
          <div
            key={food.id}
            className="p-4 border rounded shadow hover:shadow-lg transition flex flex-col bg-white"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-40 sm:h-48 md:h-56 object-cover mb-3 rounded"
            />
            <div className="flex-1">
              <h2 className="font-bold text-lg">{food.name}</h2>
              <p className="text-gray-700 text-sm line-clamp-2">{food.description}</p>
              <p className="text-green-600 font-semibold mt-1">₹{food.price}</p>
            </div>

            <div className="mt-3 flex items-center justify-between">
              {/* Counter */}
              <div className="flex items-center border rounded overflow-hidden">
                <button
                  onClick={() => handleDecrement(food.id)}
                  className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition"
                >
                  -
                </button>
                <span className="px-4">{getQuantity(food.id)}</span>
                <button
                  onClick={() => handleIncrement(food)}
                  className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition"
                >
                  +
                </button>
              </div>

              {/* Add to Cart */}
              <button
                onClick={() => handleIncrement(food)}
                className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-sm sm:text-base"
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMenu;
