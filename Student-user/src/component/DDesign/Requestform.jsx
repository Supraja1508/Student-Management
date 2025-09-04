import { useNavigate } from "react-router-dom";
import { LiaPrayingHandsSolid } from "react-icons/lia";
const Requestform = () => {
const navigate = useNavigate();
  const forms = [
    {name: "Leave Form",description:"Use this form to apply for leave due to health issues or emergency situations.",path:"/dashboardlayout/requestform/LeaveApplication"},
    {name: "Internship Form",description:"This form is required to get approval for internships through our institute.",path:"/dashboardlayout/requestform/Internshipform"},
    {name: "ID Card Form",description:"Apply here if you have lost your ID card and need a duplicate.",path:"/dashboardlayout/requestform/IDcard"},
    {name: "Placement Registration Form",description:"Students interested in campus placement must register using this form.",path:"/dashboardlayout/requestform/placementform"},
    {name: "Bus Pass Form",description:"Apply for a bus pass if you want to use the institute’s transportation facility.",path:"/dashboardlayout/requestform/Buspassform"},
    {name: "Library Card Form",description:"Use this form to apply for a library card to access institute library services.",path:"/dashboardlayout/requestform/Librarycard"},
    {name: "Hostel Admission Form",description:"Students who want hostel accommodation should fill out this form.",path:"/dashboardlayout/requestform/Hostelform"},
    {name: "Scholarship Form",description:"Eligible students can apply for available scholarships using this form.",path:"/dashboardlayout/requestform/Scholarshipform"},
    {name: "Migration Form",description:"Use this form if you are transferring to another university.",path:"/dashboardlayout/requestform/Migrationform"},
    {name: "Bonofide Form",description:"Use this form if you are transferring to another university.",path:"/dashboardlayout/requestform/Bonofideform"},
  ];
  
  
  return (
    <>
      <div className="font-serif">
        <div className="mt-20 max-w-5xl mx-auto shadow-2xl rounded-2xl p-8">
          <div className="flex justify-center items-center gap-4 mb-6">
            <LiaPrayingHandsSolid className="text-cyan-900" size={30} />
            <h1 className="text-2xl uppercase font-bold bg-gradient-to-b from-green-500 to-cyan-500 text-transparent bg-clip-text">Request Forms</h1>
          </div>
          <h2 className="text-center uppercase text-xl font-bold text-red-700 mb-6">Select Your Form</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {forms.map((form, index) => (
              <button key={index} 
               onClick={() => navigate(form.path)}
              className="w-full text-left p-5 rounded-2xl shadow-md bg-gradient-to-r from-green-50 to-cyan-50 hover:from-green-100 hover:to-cyan-100 transition-all duration-200">
                <h3 className="text-lg font-semibold text-cyan-900">
                  {form.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {form.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Requestform;
