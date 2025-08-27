import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./component/jsx files/Login";
import Signup from "./component/jsx files/Signup";
import ForgotPassword from "./component/jsx files/ForgotPassword";
import DashboardLayout from "./component/jsx files/DashboardLayout";
function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/dashboardLayout" element={<DashboardLayout/>}/>
    </Routes>
    </BrowserRouter>
  )
} 
export default App