import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./component/jsx files/Login";
import Signup from "./component/jsx files/Signup";
import ForgotPassword from "./component/jsx files/ForgotPassword";
import DashboardLayout from "./component/jsx files/DashboardLayout";
import DashboardDesign from "./component/DDesign/DashboardDesign";
import Attadance from "./component/DDesign/Attendance";
import { Timetable } from "./component/DDesign/Timetable";
import LeaveApplication from "./component/DDesign/LeaveApplication";
import Result from "./component/DDesign/Result";
import MaterialFlow from "./component/DDesign/MaterialPage";
import FacultyPage from "./component/DDesign/FacultyDetail";
import LibraryBooks from "./component/DDesign/LibraryBooks";
import SettingsPage from "./component/DDesign/SettingsPage";


function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      {/* nested route */}
       <Route path="/dashboardlayout" element={<DashboardLayout />}>
          <Route index element={<DashboardDesign />} /> 
          <Route path="attendance" element={<Attadance />} />
          <Route path="leave" element={<LeaveApplication />} />
          <Route path="timetable" element={<Timetable/>} />
          <Route path="result" element={<Result/>} />
          <Route path="materials" element={<MaterialFlow/>} />
          <Route path="faculty" element={<FacultyPage/>} />
          <Route path="library" element={<LibraryBooks/>} />
          <Route path="settings" element={<SettingsPage/>} />
          
           {/* add other routes here */}
        <Route path="*" element={<Login />} />
          </Route>
    </Routes>
    </BrowserRouter>
  )
} 
export default App