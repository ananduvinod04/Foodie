// CategoryBar.jsx
import { useNavigate } from "react-router-dom";
import categoryArray from "../../Data/category";// adjust path if needed

export default function CategoryBar() {
  const navigate = useNavigate();

  return (
    <>
     <h3>whats on your mind?</h3>
    <div className="flex gap-4 flex-wrap">
       
      {categoryArray.map((cat) => (
        <button
          key={cat.id}
          onClick={() => navigate(`/customer/category/${cat.categoryName}`)}
          className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-orange-200 transition"
        >
          <span className="text-lg">{cat.categoryIcon}</span>
          <span>{cat.categoryName}</span>
        </button>
      ))}
    </div>
    </>
  );
}
