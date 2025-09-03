import { useState } from "react";

const LeaveApplication = () => {
  const [form, setForm] = useState({
    name: "",
    reason: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Leave Submitted!\nName: ${form.name}\nReason: ${form.reason}\nDate: ${form.date}`
    );
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-xl mt-6 w-full ">
      <h1 className="text-2xl font-bold text-center mb-4">Leave Application</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <textarea
          name="reason"
          placeholder="Reason"
          value={form.reason}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="4"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Submit Leave
        </button>
      </form>
    </div>
  );
};

export default LeaveApplication;
