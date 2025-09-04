import { useState } from "react";

const BonofideForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    course: "",
    year: "",
    purpose: "",
    otherPurpose: "",
  });

  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPreview(true); // Show preview modal
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 max-w-lg w-full">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
          College Bonafide Certificate Request
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Fill out the form below to request your official Bonafide Certificate.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your full name"
            />
          </div>

          {/* Roll Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Roll Number</label>
            <input
              type="text"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your roll number"
            />
          </div>

          {/* Course / Department */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Course / Department</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your course or department"
            />
          </div>

          {/* Year / Semester */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Year / Semester</label>
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your current year/semester"
            />
          </div>

          {/* Purpose */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Purpose</label>
            <select
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled>Select purpose</option>
              <option value="Passport">Passport</option>
              <option value="Scholarship">Scholarship</option>
              <option value="Bank">Bank Formalities</option>
              <option value="Hostel Admission">Hostel Admission</option>
              <option value="Event/Competition">Event/Competition</option>
              <option value="Internship/Job">Internship/Job</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Other Purpose Field */}
          {formData.purpose === "Other" && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Specify Purpose</label>
              <input
                type="text"
                name="otherPurpose"
                value={formData.otherPurpose}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your purpose"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-900 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-800 transition duration-200"
          >
            Submit Request
          </button>
        </form>

        {/* Preview Modal */}
        {showPreview && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
            <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-xl">
              <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">
                Bonafide Request Preview
              </h3>
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Roll No:</strong> {formData.rollNo}</p>
              <p><strong>Course:</strong> {formData.course}</p>
              <p><strong>Year:</strong> {formData.year}</p>
              <p>
                <strong>Purpose:</strong>{" "}
                {formData.purpose === "Other" ? formData.otherPurpose : formData.purpose}
              </p>
              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => {
                    setShowPreview(false);
                    alert("Bonafide request submitted!");
                    setFormData({
                      name: "",
                      rollNo: "",
                      course: "",
                      year: "",
                      purpose: "",
                      otherPurpose: "",
                    });
                  }}
                  className="bg-blue-900 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-800 transition duration-200"
                >
                  Confirm & Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BonofideForm;
