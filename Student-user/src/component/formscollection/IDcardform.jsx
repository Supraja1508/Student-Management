import { useState } from "react";

const IDcardform = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    department: "",
    year: "",
    blood_group: "",
    mobilenumber: "",
    Address: "",
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
    <div className="max-w-2xl mx-auto mt-10 p-8 font-serif rounded-3xl shadow-2xl bg-green-600 backdrop-blur-lg text-black">
      <h2 className="text-4xl font-extrabold text-center mb-6 text-white">
        ID Card Request Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Reusable input style */}
        {/** Full Name */}
        <div>
          <label className="block font-semibold mb-1 text-white">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
            className="w-full p-3 rounded-lg border border-white/40 focus:border-pink-500 focus:ring-2 focus:ring-pink-400 bg-white/80 shadow-md outline-none transition"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block font-semibold mb-1 text-white">Roll Number</label>
            <input
              type="text"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
              placeholder="Enter roll number"
              className="w-full p-3 rounded-lg border border-white/40 focus:border-pink-500 focus:ring-2 focus:ring-pink-400 bg-white/80 shadow-md outline-none transition"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-white">Department</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="Enter department"
              className="w-full p-3 rounded-lg border border-white/40 focus:border-purple-500 focus:ring-2 focus:ring-purple-400 bg-white/80 shadow-md outline-none transition"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block font-semibold mb-1 text-white">Year</label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-white/40 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 bg-white/80 shadow-md outline-none transition"
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
            <label className="block font-semibold mb-1 text-white">Blood Group</label>
            <input
              name="blood_group"
              value={formData.blood_group}
              onChange={handleChange}
              placeholder="Eg: O+"
              className="w-full p-3 rounded-lg border border-white/40 focus:border-red-500 focus:ring-2 focus:ring-red-400 bg-white/80 shadow-md outline-none transition"
              required
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1 text-white">Mobile Number</label>
          <input
            className="w-full p-3 rounded-lg border border-white/40 focus:border-green-500 focus:ring-2 focus:ring-green-400 bg-white/80 shadow-md outline-none transition"
            name="mobilenumber"
            value={formData.mobilenumber}
            onChange={handleChange}
            placeholder="Enter mobile number"
            required
          />
        </div>

        <div>
          <label className="font-semibold mb-1 block text-white">Address</label>
          <textarea
            className="w-full p-3 rounded-lg border border-white/40 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400 bg-white/80 shadow-md outline-none transition"
            name="Address"
            value={formData.Address}
            onChange={handleChange}
            placeholder="Enter full address"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1 text-white">Reason for ID Card</label>
          <input
            type="text"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Eg: Lost card"
            className="w-full p-3 rounded-lg border border-white/40 focus:border-pink-500 focus:ring-2 focus:ring-pink-400 bg-white/80 shadow-md outline-none transition"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1 text-white">Amount to Pay (₹)</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            className="w-full p-3 rounded-lg bg-gray-200 font-bold text-gray-800 shadow-inner"
            readOnly
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white font-bold py-3 rounded-xl shadow-lg hover:opacity-90 transition"
        >
          Submit Form 🚀
        </button>
      </form>
    </div>
  );
};

export default IDcardform;
