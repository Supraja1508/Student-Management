import { useState } from "react";

const Scholarshipform = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    registerNo: "",
    department: "",
    yearOfStudy: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    familyIncome: "",
    parentOccupation: "",
    scholarshipType: "",
    casteCategory: "",
    scholarshipAmount: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    documents: null,
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
    alert("✅ Scholarship Application Submitted Successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 rounded-3xl shadow-2xl bg-white text-black border border-gray-300">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-green-700 uppercase">
          Scholarship Application Form
        </h1>
        <p className="text-gray-600 mt-2">
          (To be submitted to the Scholarship / Student Welfare Cell)
        </p>
      </div>

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
              placeholder="E.g., 2nd Year"
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

        {/* Gender */}
        <div>
          <label className="block font-medium mb-1">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 rounded-lg border border-gray-300"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
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

        {/* Address */}
        <div>
          <label className="block font-medium mb-1">Residential Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter full address"
            className="w-full p-2 rounded-lg border border-gray-300 resize-none max-h-40"
            required
          />
        </div>

        {/* Family Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium mb-1">
              Parent / Guardian Occupation
            </label>
            <input
              type="text"
              name="parentOccupation"
              value={formData.parentOccupation}
              onChange={handleChange}
              placeholder="E.g., Farmer, Teacher"
              className="w-full p-2 rounded-lg border border-gray-300"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">
              Annual Family Income (₹)
            </label>
            <input
              type="number"
              name="familyIncome"
              value={formData.familyIncome}
              onChange={handleChange}
              placeholder="Enter income"
              className="w-full p-2 rounded-lg border border-gray-300"
              required
            />
          </div>
        </div>

        {/* Scholarship Type */}
        <div>
          <label className="block font-medium mb-1">Scholarship Type</label>
          <select
            name="scholarshipType"
            value={formData.scholarshipType}
            onChange={handleChange}
            className="w-full p-2 rounded-lg border border-gray-300"
            required
          >
            <option value="">Select Scholarship</option>
            <option value="Merit">Merit-Based</option>
            <option value="Need">Need-Based</option>
            <option value="Sports">Sports Quota</option>
            <option value="Caste">Caste / Government Scholarship</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Caste & Amount Section (For Govt. Scholarships) */}
        {formData.scholarshipType === "Caste" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-1">Caste Category</label>
              <select
                name="casteCategory"
                value={formData.casteCategory}
                onChange={handleChange}
                className="w-full p-2 rounded-lg border border-gray-300"
              >
                <option value="">Select Category</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
                <option value="OBC">OBC</option>
                <option value="EWS">EWS</option>
                <option value="General">General</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">
                Scholarship Amount (₹)
              </label>
              <input
                type="number"
                name="scholarshipAmount"
                value={formData.scholarshipAmount}
                onChange={handleChange}
                placeholder="Enter sanctioned amount"
                className="w-full p-2 rounded-lg border border-gray-300"
              />
            </div>
          </div>
        )}

        {/* Bank Details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label className="block font-medium mb-1">Bank Name</label>
            <input
              type="text"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
              placeholder="Enter bank name"
              className="w-full p-2 rounded-lg border border-gray-300"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Account Number</label>
            <input
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              placeholder="Enter account number"
              className="w-full p-2 rounded-lg border border-gray-300"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">IFSC Code</label>
            <input
              type="text"
              name="ifscCode"
              value={formData.ifscCode}
              onChange={handleChange}
              placeholder="Enter IFSC"
              className="w-full p-2 rounded-lg border border-gray-300"
              required
            />
          </div>
        </div>

        {/* Document Upload */}
        <div>
          <label className="block font-medium mb-1">
            Upload Required Documents (PDF)
          </label>
          <input
            type="file"
            name="documents"
            onChange={handleChange}
            className="w-full p-2 rounded-lg border border-gray-300 bg-white"
            accept=".pdf"
            required
          />
          <p className="text-xs text-gray-600 mt-1">
            * Attach Income Certificate
          </p> <br />
          <input
            type="file"
            name="documents"
            onChange={handleChange}
            className="w-full p-2 rounded-lg border border-gray-300 bg-white"
            accept=".pdf"
            required
          />
          <p className="text-xs text-gray-600 mt-1">
            * Attach Birth Certificate
          </p> <br />
          <input
            type="file"
            name="documents"
            onChange={handleChange}
            className="w-full p-2 rounded-lg border border-gray-300 bg-white"
            accept=".pdf"
            required
          />
          <p className="text-xs text-gray-600 mt-1">
            * Attach Community Certificate,
          </p> <br />
          <input
            type="file"
            name="documents"
            onChange={handleChange}
            className="w-full p-2 rounded-lg border border-gray-300 bg-white"
            accept=".pdf"
            required
          />
          <p className="text-xs text-gray-600 mt-1">
            * Attach Marksheet 
          </p> <br />
          <input
            type="file"
            name="documents"
            onChange={handleChange}
            className="w-full p-2 rounded-lg border border-gray-300 bg-white"
            accept=".pdf"
            required
          />
          <p className="text-xs text-gray-600 mt-1">
            * Attach School transfer certificate
          </p> <br />
          <input
            type="file"
            name="documents"
            onChange={handleChange}
            className="w-full p-2 rounded-lg border border-gray-300 bg-white"
            accept=".pdf"
            required
          />
          <p className="text-xs text-gray-600 mt-1">
            * Attach Aadhar
          </p>
        </div>

        {/* Declaration */}
        <div className="border rounded-lg p-4 bg-gray-50 text-sm">
          <p className="font-semibold">Student Declaration:</p>
          <p className="mt-2 text-gray-700">
            I hereby declare that the information provided above is true to the
            best of my knowledge. I agree to submit all the required documents
            for verification.
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

        {/* Verification */}
        <div className="border rounded-md p-6 bg-gray-50">
  <p className="font-semibold mb-6">For Office Use Only:</p>

  {/* Seal at center */}
  <div className="flex justify-center mb-10">
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 flex items-center justify-center text-xs text-black">
        College Seal
      </div>
    </div>
  </div>

  {/* Signatures */}
  <div className="grid grid-cols-3 gap-6 text-center">
    <div>
      <div className="border-t border-gray-700 w-32 mx-auto"></div>
      <p className="mt-2 text-sm font-medium">Principal Seal & sign</p>
    </div>
    <div>
      <div className="border-t border-gray-700 w-32 mx-auto"></div>
      <p className="mt-2 text-sm font-medium">HOD</p>
    </div>

    <div>
      <div className="border-t border-gray-700 w-32 mx-auto"></div>
      <p className="mt-2 text-sm font-medium">Class Mentor</p>
    </div>

  </div>
</div>


        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-700 text-white font-bold py-3 rounded-lg hover:bg-green-800 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default Scholarshipform;
