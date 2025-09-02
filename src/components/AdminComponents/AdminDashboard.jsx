import cartLogo from "../../assets/cartLogo.png";
import userMangementLogo from "../../assets/userMangementLogo.png";
import inventoryManagementLogo from "../../assets/inventoryManagementLogo.png";
import categoryManagementLogo from "../../assets/categoryManagementLogo.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


function AdminDashboard() {
      const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const navigate = useNavigate();
  let AdminDashboardComponents = [
    { id: 1, name: "Order management", logo: cartLogo,totalQuantity:totalQuantity ,path:"Orders"},
    { id: 2, name: "user management", logo: userMangementLogo,path:"UserManagement" },
    {
      name: "inventory management",
      logo: inventoryManagementLogo,
      path:"InventoryManagement"
    },
    { id: 3, name: "catagory management", logo: categoryManagementLogo ,path:"categoryManagement"},
  ];
  return (
    <div className="flex justify-center items-center flex-wrap ">
      {AdminDashboardComponents.map((dashBoardItem) => (
        <button 
                  onClick={() => navigate(`/admin/${dashBoardItem.path}`)}
        className="dashBoardItemContainer w-[200px] h-[200px] rounded shadow-md hover:scale-110 bg-[#f7cfad] text-orange-600 m-16 flex flex-col items-center justify-center">
          <div className="relative">
            <img src={dashBoardItem.logo} alt="" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {dashBoardItem.totalQuantity}
              </span>
          </div>
          <div className="font-bold   text-2xl">{dashBoardItem.name}</div>
        </button>
      ))}
    </div>
  );
}

export default AdminDashboard;
