import { useState } from "react";

const Placementform = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    registerNo: "",
    department: "",
    yearOfStudy: "",
    dob: "",
    phone: "",
    email: "",
    cgpa: "",
    skills: "",
    interestedDomain: "",
    preferredLocation: "",
    internshipExperience: "",
    resume: null,
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
    alert(`✅ Placement Registration Submitted Successfully!`);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 rounded-3xl shadow-2xl bg-white text-black border border-gray-300">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-blue-700 uppercase">
          Placement Registration Form
        </h1>
        <p className="text-gray-600 mt-2">
          (To be submitted to the Training & Placement Cell)
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Student Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
          {/* Roll Number */}
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
          {/* Register Number */}
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
          {/* Department */}
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
          {/* Year */}
          <div>
            <label className="block font-medium mb-1">Year of Study</label>
            <input
              type="text"
              name="yearOfStudy"
              value={formData.yearOfStudy}
              onChange={handleChange}
              placeholder="E.g., Final Year"
              className="w-full p-2 rounded-lg border border-gray-300"
              required
            />
          </div>
          {/* DOB */}
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

        {/* Academic Details */}
        <div>
          <label className="block font-medium mb-1">Current CGPA</label>
          <input
            type="text"
            name="cgpa"
            value={formData.cgpa}
            onChange={handleChange}
            placeholder="Enter CGPA"
            className="w-full p-2 rounded-lg border border-gray-300"
            required
          />
        </div>

        {/* Skills */}
        <div>
          <label className="block font-medium mb-1">Key Skills</label>
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="E.g., Java, Python, React, Communication"
            className="w-full p-2 rounded-lg border border-gray-300 resize-none max-h-40"
            maxLength={300}
            required
          />
        </div>

        {/* Preferences */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium mb-1">Interested Domain</label>
            <input
              type="text"
              name="interestedDomain"
              value={formData.interestedDomain}
              onChange={handleChange}
              placeholder="E.g., Software Development, Data Science"
              className="w-full p-2 rounded-lg border border-gray-300"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">
              Preferred Job Location
            </label>
            <input
              type="text"
              name="preferredLocation"
              value={formData.preferredLocation}
              onChange={handleChange}
              placeholder="E.g., Chennai, Bangalore"
              className="w-full p-2 rounded-lg border border-gray-300"
              required
            />
          </div>
        </div>

        {/* Internship Experience */}
        <div>
          <label className="block font-medium mb-1">
            Internship / Project Experience
          </label>
          <textarea
            name="internshipExperience"
            value={formData.internshipExperience}
            onChange={handleChange}
            placeholder="Briefly describe internship or projects"
            className="w-full p-2 rounded-lg border border-gray-300 resize-none max-h-40"
            maxLength={300}
          />
        </div>

        {/* Resume Upload */}
        <div>
          <label className="block font-medium mb-1">Upload Resume (PDF)</label>
          <input
            type="file"
            name="resume"
            onChange={handleChange}
            className="w-full p-2 rounded-lg border border-gray-300 bg-white"
            accept=".pdf"
            required
          />
        </div>

        {/* Declaration */}
        <div className="border rounded-lg p-4 bg-gray-50 text-sm">
          <p className="font-semibold">Student Declaration:</p>
          <p className="mt-2 text-gray-700">
            I hereby declare that all the above details are true and correct. I
            agree to abide by the rules of the Training & Placement Cell and
            will actively participate in campus placement activities.
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

        {/* TPO Approval */}
        <div className="border rounded-lg p-4 bg-gray-50 text-sm">
          <p className="font-semibold">For TPO / College Use Only:</p>
          <p className="mt-2 text-gray-700">Verified & Approved by:</p>
          <div className="flex justify-between mt-6">
            <div>
              <p>______________________</p>
              <p className="text-xs">Placement Officer’s Signature</p>
            </div>
            <div>
              <p>______________________</p>
              <p className="text-xs text-center">College Seal</p>
            </div>
            <div>
              <p>______________________</p>
              <p className="text-xs">Principal's Signature</p>
            </div>
            <div>
              <p>______________________</p>
              <p className="text-xs text-center">Office Seal</p>
            </div>
          </div>
        </div>

        {/* HOD & Class Mentor Approval */}
        <div className="border rounded-lg p-4 bg-gray-50 text-sm">
          <p className="font-semibold">Faculty Verification:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-6">
            <div>
              <p>______________________</p>
              <p className="text-xs">Class Mentor’s Signature</p>
            </div>
            <div>
              <p>______________________</p>
              <p className="text-xs">HOD’s Signature</p>
            </div>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-700 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default Placementform;
