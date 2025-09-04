import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./component/jsx files/Login";
import Signup from "./component/jsx files/Signup";
import ForgotPassword from "./component/jsx files/ForgotPassword";
import DashboardLayout from "./component/jsx files/DashboardLayout";
import DashboardDesign from "./component/DDesign/DashboardDesign";
import Attendance from "./component/DDesign/Attendance";
import { Timetable } from "./component/DDesign/Timetable";
import Result from "./component/DDesign/Result";
import MaterialFlow from "./component/DDesign/MaterialPage";
import FacultyPage from "./component/DDesign/FacultyDetail";
import LibraryBooks from "./component/DDesign/LibraryBooks";
import SettingsPage from "./component/DDesign/SettingsPage";
import Requestform from "./component/DDesign/Requestform";
import LeaveApplication from "./component/formscollection/LeaveApplication";
import Buspassform from "./component/formscollection/Buspassform";
function App(){
  return(
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />

    {/* nested route */}
    <Route path="/dashboardlayout" element={<DashboardLayout />}>
      <Route index element={<DashboardDesign />} />
      <Route path="attendance" element={<Attendance />} />
      <Route path="timetable" element={<Timetable />} />
      <Route path="result" element={<Result />} />
      <Route path="materials" element={<MaterialFlow />} />
      <Route path="faculty" element={<FacultyPage />} />
      <Route path="library" element={<LibraryBooks />} />
      <Route path="settings" element={<SettingsPage />} />
      <Route path="requestform" element={<Requestform />} />
      <Route path="/dashboardlayout/requestform/LeaveApplication" element={<LeaveApplication />} />
      <Route path="/dashboardlayout/requestform/Buspass" element={<Buspassform />} />
      
    </Route>
  </Routes>
</BrowserRouter>

  )
} 
export default App