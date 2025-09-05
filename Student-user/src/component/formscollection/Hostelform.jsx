import { useState } from "react";

const Hostelform = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    department: "",
    year: "",
    studentPhone: "",
    parentName: "",
    parentPhone: "",
    hostelFee: "20000",
    messFee: "",
    securityDeposit: "",
    totalFee: "",
    cancelHostel: false,
    cancelReason: "",
    cancelSem: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const calculateTotal = () => {
    const total =
      Number(formData.hostelFee || 0) +
      Number(formData.messFee || 0) +
      Number(formData.securityDeposit || 0);
    setFormData({ ...formData, totalFee: total });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateTotal();
    alert(`Form Submitted ✅\nTotal Fee: ₹${formData.totalFee}`);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 rounded-3xl shadow-xl bg-black/10 backdrop-blur-lg text-black">
      <h2 className="text-3xl font-bold text-center mb-6 uppercase">Hostel Form</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Student Info */}
        <div>
          <label className="block font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
            className="w-full p-2 rounded-lg text-gray-900"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Roll Number</label>
            <input
              type="text"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
              placeholder="Enter roll number"
              className="w-full p-2 rounded-lg text-gray-900"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Department</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="Enter department"
              className="w-full p-2 rounded-lg text-gray-900"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Year</label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full p-2 rounded-lg text-gray-900"
              required
            >
              <option value="">Select Year</option>
              <option value="1st">1st Year</option>
              <option value="2nd">2nd Year</option>
              <option value="3rd">3rd Year</option>
              <option value="4th">4th Year</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">Student Phone</label>
            <input
              type="tel"
              name="studentPhone"
              value={formData.studentPhone}
              onChange={handleChange}
              placeholder="Enter student phone"
              className="w-full p-2 rounded-lg text-gray-900"
              required
            />
          </div>
        </div>

        {/* Parent Info */}
        <h3 className="mt-4 mb-2 text-xl font-semibold text-center">
          Parent Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Parent Name</label>
            <input
              type="text"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              placeholder="Enter parent name"
              className="w-full p-2 rounded-lg text-gray-900"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Parent Phone</label>
            <input
              type="tel"
              name="parentPhone"
              value={formData.parentPhone}
              onChange={handleChange}
              placeholder="Enter parent phone"
              className="w-full p-2 rounded-lg text-gray-900"
              required
            />
          </div>
        </div>

        {/* Fees Section */}
        <h3 className="mt-4 mb-2 text-xl font-semibold text-center">
          Fees Details (₹)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Hostel Fee</label>
            <input
              type="number"
              name="hostelFee"
              value={formData.hostelFee}
              min="20000"
              onChange={handleChange}
              className="w-full p-2 rounded-lg text-gray-900"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Mess Fee</label>
            <input
              type="number"
              name="messFee"
              value={formData.messFee}
              onChange={handleChange}
              className="w-full p-2 rounded-lg text-gray-900"
              required
            />
          </div>
        </div>

        <div>
          <label className="block font-medium mb-1">Security Deposit</label>
          <input
            type="number"
            name="securityDeposit"
            value={formData.securityDeposit}
            onChange={handleChange}
            className="w-full p-2 rounded-lg text-gray-900"
            required
          />
        </div>

        {/* Hostel Cancellation */}
        <div className="flex items-center space-x-2 mt-2">
          <input
            type="checkbox"
            name="cancelHostel"
            checked={formData.cancelHostel}
            onChange={handleChange}
            className="w-4 h-4 accent-pink-500"
          />
          <label className="font-medium">Request Hostel Cancellation</label>
        </div>

        {/* Show reason & semester if cancellation selected */}
        {formData.cancelHostel && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div>
              <label className="block font-medium mb-1">Reason for Cancellation</label>
              <input
                type="text"
                name="cancelReason"
                value={formData.cancelReason}
                onChange={handleChange}
                placeholder="Enter reason"
                className="w-full p-2 rounded-lg text-gray-900"
                required={formData.cancelHostel}
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Which Semester</label>
              <input
                type="text"
                name="cancelSem"
                value={formData.cancelSem}
                onChange={handleChange}
                placeholder="Enter semester"
                className="w-full p-2 rounded-lg text-gray-900"
                required={formData.cancelHostel}
              />
            </div>
          </div>
        )}

        {/* Total Fee */}
        {formData.totalFee && (
          <div className="text-center mt-2 font-semibold text-lg">
            Total Fee: ₹{formData.totalFee}
          </div>
        )}

        {/* Signature / Stamp Box */}
        <div className="mt-6 p-4 border-2 border-dashed rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-4 bg-black/10 text-gray-900">
          <div className="flex flex-col items-center p-2">
            <div className="border w-full h-12 mb-1 flex justify-center items-center">Parents</div>
            <span>Signature / Stamp</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <div className="border w-full h-12 mb-1 flex justify-center items-center">Class Mentor / HOD</div>
            <span>Signature</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <div className="border w-full h-12 mb-1 flex justify-center items-center">Vice Principal</div>
            <span>Signature</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <div className="border w-full h-12 mb-1 flex justify-center items-center">Principal</div>
            <span>Signature</span>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-pink-500 text-black font-bold py-2 rounded-lg hover:bg-pink-600 transition"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default Hostelform;
