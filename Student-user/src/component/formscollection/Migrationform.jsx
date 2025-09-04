import { useState } from "react";

const Migrationform = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    registerNo: "",
    department: "",
    yearOfStudy: "",
    dob: "",
    phone: "",
    email: "",
    reason: "",
    universityName: "",
    documents: null,
    amount: 200,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Application Submitted for Migration Certificate`);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 rounded-3xl shadow-2xl bg-white text-black border border-gray-300">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-purple-700 uppercase">
          Migration Certificate Application
        </h1>
        <p className="text-gray-600 mt-2">
          (To be filled by the student & verified by the Principal)
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Student Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
            <label className="block font-medium mb-1">Register Number</label>
            <input
              type="text"
              name="registerNo"
              value={formData.registerNo}
              onChange={handleChange}
              placeholder="Enter register number"
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
          <div>
            <label className="block font-medium mb-1">Year of Study</label>
            <input
              type="text"
              name="yearOfStudy"
              value={formData.yearOfStudy}
              onChange={handleChange}
              placeholder="E.g., 2021 - 2025"
              className="w-full p-2 rounded-lg border border-gray-300"
              required
            />
          </div>
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
        </div>

        {/* Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
          <div>
            <label className="block font-medium mb-1">Email ID</label>
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
        </div>

        {/* Migration Details */}
        <div>
          <label className="block font-medium mb-1">Reason for Migration</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="E.g., Admission to another university"
            className="w-full p-2 rounded-lg border border-gray-300 resize-none max-h-40"
            maxLength={300}
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">
            University / Institution Applying To
          </label>
          <input
            type="text"
            name="universityName"
            value={formData.universityName}
            onChange={handleChange}
            placeholder="Enter university name"
            className="w-full p-2 rounded-lg border border-gray-300"
            required
          />
        </div>

        {/* Documents Upload */}
        <div>
          <label className="block font-medium mb-1">Upload Documents</label>
          <input
            type="file"
            name="documents"
            onChange={handleChange}
            className="w-full p-2 rounded-lg border border-gray-300 bg-white"
            accept=".pdf,.jpg,.png"
            required
          />
          <p className="text-sm text-gray-500 mt-1">
            Attach: Transfer Certificate 
          </p>
          <br />
             
             <input
            type="file"
            name="documents"
            onChange={handleChange}
            className="w-full p-2 rounded-lg border border-gray-300 bg-white"
            accept=".pdf,.jpg,.png"
            required
          />
          <p className="text-sm text-gray-500 mt-1">
            Attach: No Dues   </p>
         <br />

          <input
            type="file"
            name="documents"
            onChange={handleChange}
            className="w-full p-2 rounded-lg border border-gray-300 bg-white"
            accept=".pdf,.jpg,.png"
            required
          />
          <p className="text-sm text-gray-500 mt-1">
            Attach: Previous Marksheets
          </p>
        </div>

        {/* Fee
        <div className="text-lg font-semibold bg-gray-100 p-3 rounded-lg border">
          📌 Migration Certificate Fee: ₹{formData.amount}
        </div> */}

        {/* Declaration */}
        <div className="border rounded-lg p-4 bg-gray-50 text-sm">
          <p className="font-semibold">Student Declaration:</p>
          <p className="mt-2 text-gray-700">
            I hereby declare that all the above information is true to the best
            of my knowledge. I request the college to issue my Migration
            Certificate at the earliest.
          </p>
          <div className="flex justify-between mt-4">
            <div>
              <p>______________________</p>
              <p className="text-xs">Student Signature</p>
            </div>
            <div>
              <p>Date: ____ / ____ / ______</p>
            </div>
          </div>
        </div>

        {/* Principal Approval */}
        <div className="border rounded-lg p-4 bg-gray-50 text-sm">
          <p className="font-semibold">For Office Use Only:</p>
          <p className="mt-2 text-gray-700">Verified & Approved by:</p>
          <div className="flex justify-between mt-6">
            <div>
              <p>______________________</p>
              <p className="text-xs">Principal’s Signature & Seal</p>
            </div>
            <div>
              <p>______________________</p>
              <p className="text-xs">Office Superintendent</p>
            </div>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-purple-700 text-white font-bold py-3 rounded-lg hover:bg-purple-800 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default Migrationform;
