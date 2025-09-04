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
import Hostelform from "./component/formscollection/Hostelform";
import Internshipform from "./component/formscollection/Internshipform";
import IDcardform from "./component/formscollection/IDcardform";
import Librarycardform from "./component/formscollection/Librarycardform";
import Migrationform from "./component/formscollection/Migrationform";
import Placementform from "./component/formscollection/Placementform";
import Scholarshipform from "./component/formscollection/Scholarshipform";
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
      <Route path="/dashboardlayout/requestform/Buspassform" element={<Buspassform />} />
      <Route path="/dashboardlayout/requestform/Hostelform" element={<Hostelform/>} />
      <Route path="/dashboardlayout/requestform/Internshipform" element={<Internshipform/>} />
      <Route path="/dashboardlayout/requestform/IDcard" element={<IDcardform/>} />
      <Route path="/dashboardlayout/requestform/Librarycard" element={<Librarycardform/>} />
      <Route path="/dashboardlayout/requestform/Migrationform" element={<Migrationform/>} />
      <Route path="/dashboardlayout/requestform/placementform" element={<Placementform/>} />
      <Route path="/dashboardlayout/requestform/Scholarshipform" element={<Scholarshipform/>} />
      
    </Route>
  </Routes>
</BrowserRouter>

  )
} 
export default App