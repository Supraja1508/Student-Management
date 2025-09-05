import { useState } from "react";

const Internshipform = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    department: "",
    year: "",
    semester: "",
    internshipType: "in-plant",
    companyName: "",
    location: "",
    role: "",
    stipend: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let message = `Form Submitted ✅\nInternship Type: ${formData.internshipType}\n`;
    if (formData.internshipType === "paid") {
      message += `Stipend: ₹${formData.stipend}\n`;
    }
    alert(message);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 rounded-3xl shadow-xl bg-white/10 backdrop-blur-lg text-white">
      <h2 className="text-3xl font-bold text-black text-center mb-6 uppercase">Internship Form</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block font-medium mb-1 text-black">Full Name</label>
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

        {/* Roll Number */}
        <div>
          <label className="block font-medium mb-1 text-black">Roll Number</label>
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

        {/* Department */}
        <div>
          <label className="block font-medium mb-1 text-black">Department</label>
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

        {/* Year */}
        <div>
          <label className="block font-medium mb-1 text-black">Year</label>
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

        {/* Semester */}
        <div>
          <label className="block font-medium mb-1 text-black">Semester</label>
          <select
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            className="w-full p-2 rounded-lg text-black"
            required
          >
            <option value="">Select Semester</option>
            <option value="1">1st Sem</option>
            <option value="2">2nd Sem</option>
            <option value="3">3rd Sem</option>
            <option value="4">4th Sem</option>
            <option value="5">5th Sem</option>
            <option value="6">6th Sem</option>
            <option value="7">7th Sem</option>
            <option value="8">8th Sem</option>
          </select>
        </div>

        {/* Internship Type */}
        <div>
          <label className="block font-medium mb-1 text-black">Internship Type</label>
          <select
            name="internshipType"
            value={formData.internshipType}
            onChange={handleChange}
            className="w-full p-2 rounded-lg text-black"
          >
             <option value="">Select Internship Type</option>
  <option value="in-plant">In-Plant</option>
  <option value="paid">Paid</option>
          </select>
        </div>

        {/* Company Name */}
        <div>
          <label className="block font-medium mb-1 text-black">Company Name</label>
          <textarea
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Enter company name"
            className="w-full p-2 rounded-lg text-black resize-y max-h-[500px]"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="block font-medium mb-1 text-black">Location</label>
          <textarea
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter location"
            className="w-full p-2 rounded-lg text-black resize-y max-h-[500px]"
            required
          />
        </div>

        {/* Role / Domain */}
        <div>
          <label className="block font-medium mb-1 text-black">Role / Domain</label>
          <textarea
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Enter role or domain"
            className="w-full p-2 rounded-lg text-black resize-y max-h-[500px]"
            required
          />
        </div>

        {/* Stipend if Paid */}
        {formData.internshipType === "paid" && (
          <div>
            <label className="block font-medium mb-1 text-black">Stipend (₹)</label>
            <input
              type="number"
              name="stipend"
              value={formData.stipend}
              onChange={handleChange}
              placeholder="Enter stipend amount"
              className="w-full p-2 rounded-lg text-black"
              min="0"
              required
            />
          </div>
        )}

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

export default Internshipform;
