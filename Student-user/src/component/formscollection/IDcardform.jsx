import { useState } from "react";

const IDcardform = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    department: "",
    year: "",
    reason: "",
    amount: 100, // Fixed amount
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted ✅\nAmount to pay: ₹${formData.amount}`);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 rounded-3xl shadow-xl bg-white/10 backdrop-blur-lg text-black">
      <h2 className="text-3xl font-bold text-center mb-6">ID Card Request Form</h2>

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
            className="w-full p-2 rounded-lg text-black"
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
              className="w-full p-2 rounded-lg text-black"
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
              className="w-full p-2 rounded-lg text-black"
              required
            />
          </div>
        </div>

        <div>
          <label className="block font-medium mb-1">Year</label>
          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="w-full p-2 rounded-lg text-black"
            required
          >
            <option value="">Select Year</option>
            <option value="1st">1st Year</option>
            <option value="2nd">2nd Year</option>
            <option value="3rd">3rd Year</option>
            <option value="4th">4th Year</option>
          </select>
        </div>

        {/* Reason for ID Card */}
        <div>
          <label className="block font-medium mb-1">Reason for ID Card</label>
          <input
            type="text"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Enter reason (e.g., lost card)"
            className="w-full p-2 rounded-lg text-black"
            required
          />
        </div>

        {/* Fixed Amount */}
        <div>
          <label className="block font-medium mb-1">Amount to Pay (₹)</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            className="w-full p-2 rounded-lg text-black bg-gray-100"
            readOnly
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-pink-500 text-white font-bold py-2 rounded-lg hover:bg-pink-600 transition"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default IDcardform;
