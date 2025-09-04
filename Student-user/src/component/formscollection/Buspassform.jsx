import { useState } from "react";
import jsPDF from "jspdf";

const Buspassform = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    department: "",
    year: "",
    route: "",
    address: "",
    cancelBus: false,
    reason: "",
    semester: "",
    feesPending: false,
    officeAcknowledged: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    // Title & Logo
    doc.setFontSize(16);
    doc.text("🏫 College Logo", 105, 20, { align: "center" });
    doc.setFontSize(14);
    doc.text("Bus Cancellation Request Form", 105, 30, { align: "center" });

    // Content Box
    doc.setDrawColor(0);
    doc.rect(15, 35, 180, 110); // Main content box

    let y = 45;
    doc.setFontSize(12);
    doc.text(`Name: ${formData.name}`, 20, y);
    doc.text(`Roll No: ${formData.rollNo}`, 120, y);
    y += 10;
    doc.text(`Department: ${formData.department}`, 20, y);
    doc.text(`Year: ${formData.year}`, 120, y);
    y += 10;
    doc.text(`Semester: ${formData.semester}`, 20, y);
    doc.text(`Bus Route: ${formData.route}`, 120, y);
    y += 10;
    doc.text(`Address: ${formData.address}`, 20, y);
    y += 10;
    doc.text(`Reason: ${formData.reason}`, 20, y);
    y += 10;
    doc.text(`Fees Pending: ${formData.feesPending ? "Yes" : "No"}`, 20, y);
    doc.text(
      `Office Acknowledged: ${formData.officeAcknowledged ? "Yes" : "No"}`,
      120,
      y
    );

    // Signature & Symbol Box
    y += 20;
    doc.setFontSize(12);
    doc.text("Signatures & College Symbol:", 20, y);

    // College Symbol / Stamp Box
    doc.rect(140, y + 5, 50, 20);
    doc.text("College Symbol", 155, y + 18);

    // Signature Boxes
    doc.rect(20, y + 5, 50, 20); // HOD
    doc.text("HOD", 40, y + 20);

    doc.rect(80, y + 5, 50, 20); // Vice Principal
    doc.text("Vice Principal", 90, y + 20);

    doc.rect(20, y + 30, 50, 20); // Principal
    doc.text("Principal", 40, y + 45);

    doc.save(`BusCancellation_${formData.rollNo}.pdf`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.cancelBus) {
      generatePDF();
      alert("Bus cancellation request submitted and PDF downloaded ✅");
    } else {
      alert("Bus pass request submitted ✅");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-2xl p-6 mt-10 sm:mt-6 sm:px-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
        College Bus Pass Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Basic Fields */}
        <div>
          <label className="block font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 mt-1 focus:outline-blue-500"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Roll Number</label>
          <input
            type="text"
            name="rollNo"
            value={formData.rollNo}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 mt-1 focus:outline-blue-500"
            placeholder="Enter your roll number"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Department</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 mt-1 focus:outline-blue-500"
            placeholder="e.g. Computer Science"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Year</label>
          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 mt-1 focus:outline-blue-500"
            required
          >
            <option value="">Select year</option>
            <option value="1st">1st Year</option>
            <option value="2nd">2nd Year</option>
            <option value="3rd">3rd Year</option>
            <option value="4th">4th Year</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Bus Route</label>
          <input
            type="text"
            name="route"
            value={formData.route}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 mt-1 focus:outline-blue-500"
            placeholder="Enter your bus route"
            required={!formData.cancelBus}
          />
        </div>

        <div>
          <label className="block font-medium">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 mt-1 focus:outline-blue-500"
            placeholder="Enter your full address"
            rows="3"
            required={!formData.cancelBus}
          />
        </div>

        {/* Cancel Bus Checkbox */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="cancelBus"
            checked={formData.cancelBus}
            onChange={handleChange}
            className="w-4 h-4 accent-blue-600"
          />
          <label className="font-medium">Request Bus Cancellation</label>
        </div>

        {/* Extra Fields for Cancellation */}
        {formData.cancelBus && (
          <div className="space-y-3 mt-2 p-3 border rounded-lg bg-gray-50">
            <div>
              <label className="block font-medium">Reason for Cancellation</label>
              <input
                type="text"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 mt-1 focus:outline-blue-500"
                placeholder="Enter reason"
                required
              />
            </div>

            <div>
              <label className="block font-medium">Semester</label>
              <select
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 mt-1 focus:outline-blue-500"
                required
              >
                <option value="">Select Semester</option>
                <option value="1st Sem">1st Semester</option>
                <option value="2nd Sem">2nd Semester</option>
                <option value="3rd Sem">3rd Semester</option>
                <option value="4th Sem">4th Semester</option>
                <option value="5th Sem">5th Semester</option>
                <option value="6th Sem">6th Semester</option>
                <option value="7th Sem">7th Semester</option>
                <option value="8th Sem">8th Semester</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="feesPending"
                checked={formData.feesPending}
                onChange={handleChange}
                className="w-4 h-4 accent-blue-600"
              />
              <label className="font-medium">Bus Fees Pending</label>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="officeAcknowledged"
                checked={formData.officeAcknowledged}
                onChange={handleChange}
                className="w-4 h-4 accent-blue-600"
              />
              <label className="font-medium">Acknowledged by Office</label>
            </div>
            {/* Acknowledgement / Signature Box */}
<div className="mt-4 p-4 border-2 border-dashed border-gray-400 rounded-lg bg-gray-50">
  <h3 className="font-semibold mb-2 text-center text-gray-700">
    College Acknowledgement
  </h3>
  
  <div className="flex justify-between mt-4">
    <div className="flex flex-col items-center w-1/3">
      <div className="w-full h-12 border-b-2 border-gray-600"></div>
      <span className="text-sm mt-1">HOD Signature</span>
    </div>
    
    <div className="flex flex-col items-center w-1/3">
      <div className="w-full h-12 border-b-2 border-gray-600"></div>
      <span className="text-sm mt-1">Vice Principal Signature</span>
    </div>
    
    <div className="flex flex-col items-center w-1/3">
      <div className="w-full h-12 border-b-2 border-gray-600"></div>
      <span className="text-sm mt-1">Principal Signature</span>
    </div>
  </div>

  <div className="flex justify-center mt-4">
    <div className="flex flex-col items-center w-1/2">
      <div className="w-full h-12 border-2 border-gray-600 flex items-center justify-center">
        College Stamp / Seal
      </div>
    </div>
  </div>
</div>

          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {formData.cancelBus ? "Submit Cancellation" : "Submit Request"}
        </button>
      </form>
    </div>
  );
};

export default Buspassform;
