import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./component/jsx files/Login";
import Signup from "./component/jsx files/Signup";
import ForgotPassword from "./component/jsx files/ForgotPassword";
import DashboardLayout from "./component/jsx files/DashboardLayout";
import DashboardDesign from "./component/DDesign/DashboardDesign";
import Attadance from "./component/DDesign/Attadance";
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
        </Route>
    </Routes>
    </BrowserRouter>
  )
} 
export default App