
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { DashboardDesign } from "./DashboardDesign";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen bg-gray-100">
        <Navbar />
        <div className="pt-16">{children}</div>
        <div><DashboardDesign/></div>
      </div>
    </div>
  );
};

export default DashboardLayout;
