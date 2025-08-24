import { useSelector, useDispatch } from "react-redux";
import { addItem, decrementItem, removeItem, clearCart } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return <h2 className="text-center mt-10 text-lg">Your cart is empty</h2>;
  }

  const handleCheckout = () => {
    // ✅ Get current user from localStorage (set in Login.jsx)
    const currentUser = JSON.parse(localStorage.getItem("user")) 

    const newOrder = {
      id: `ORD-${Date.now()}`,
      items: cartItems,
      total: totalPrice,
      time: new Date().toLocaleString(),
      userName: currentUser.name, // 🔥 from logged in user
      userId: currentUser.userId,
      role: currentUser.role,
    };

    // ✅ Save persistently in localStorage
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    savedOrders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(savedOrders));

    // Navigate
    navigate("/customer/checkout");

    // Clear cart
    dispatch(clearCart());
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Your Cart</h1>
      <div className="space-y-4">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between border rounded p-2">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p>₹{item.price}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => dispatch(decrementItem(item.id))}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => dispatch(addItem(item))}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                +
              </button>
              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="px-2 py-1 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-between items-center gap-2">
        <h2 className="font-bold text-lg">Total: ₹{totalPrice}</h2>
        <div className="flex gap-2">
          <button
            onClick={() => dispatch(clearCart())}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Clear Cart
          </button>
          <button
            onClick={handleCheckout}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
