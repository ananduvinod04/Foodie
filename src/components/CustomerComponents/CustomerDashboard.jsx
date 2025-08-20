
import Banner from "./Banner";
import CategoryBar from "./CategoryBar";
import AllMenu from "./allMenuItems";


export default function CustomerDashboard() {
  return (
    <div className="flex flex-col ">
      {/* Category bar on left, menu on right */}
      <div>
        <Banner/>
      </div>
      <div className="">
        <CategoryBar />
      </div>
      <div className="">
        <AllMenu />
      </div>
      
    </div>
  );
}
