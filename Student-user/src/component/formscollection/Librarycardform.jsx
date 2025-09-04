import { useState } from "react";

const Librarycardform = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    department: "",
    year: "",
    semester: "",
    dob: "",
    phone: "",
    email: "",
    address: "",
    reason: "",
    amount: 50, // fixed library card fee
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Library Card Application Submitted ✅\n` +
      `Name: ${formData.name}\nRoll No: ${formData.rollNo}\nDept: ${formData.department}\nAmount: ₹${formData.amount}`
    );
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 rounded-3xl shadow-xl bg-white text-black">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
        📚 Library Card Application Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
            className="w-full p-2 rounded-lg border border-gray-300"
            required
          />
        </div>

        {/* Roll No & Department */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Roll Number</label>
            <input
              type="text"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
              placeholder="Enter roll number"
              className="w-full p-2 rounded-lg border border-gray-300"
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
              className="w-full p-2 rounded-lg border border-gray-300"
              required
            />
          </div>
        </div>

        {/* Year & Semester */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Year</label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full p-2 rounded-lg border border-gray-300"
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
            <label className="block font-medium mb-1">Semester</label>
            <select
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              className="w-full p-2 rounded-lg border border-gray-300"
              required
            >
              <option value="">Select Semester</option>
              {[1,2,3,4,5,6,7,8].map((sem) => (
                <option key={sem} value={sem}>{sem} Sem</option>
              ))}
            </select>
          </div>
        </div>

        {/* Contact Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full p-2 rounded-lg border border-gray-300"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full p-2 rounded-lg border border-gray-300"
              required
            />
          </div>
        </div>

        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="w-full p-2 rounded-lg border border-gray-300"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter residential address"
            className="w-full p-2 rounded-lg border border-gray-300 resize-none max-h-40"
            maxLength={300}
            required
          />
        </div>

        {/* Reason */}
        <div>
          <label className="block font-medium mb-1">Reason for Applying</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="E.g., New Card / Lost Card / Renewal"
            className="w-full p-2 rounded-lg border border-gray-300 resize-none max-h-40"
            maxLength={200}
            required
          />
        </div>

        {/* Fixed Amount */}
        <div className="text-lg font-semibold">
          📌 Library Card Fee: ₹{formData.amount}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default Librarycardform;
