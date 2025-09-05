import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const LeaveApplication = () => {
  const [form, setForm] = useState({
    name: "",
    rollno: "",
    department: "",
    year: "",
    clgname: "",
    reason: "",
    date: "",
    place: "",
    to: "",
    subject: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const componentRef = useRef();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // 👉 Print function
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  // 👉 Save as PDF function
  const handleSavePDF = async () => {
    const element = componentRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Leave_Application.pdf");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-xl rounded-2xl mt-6 w-full font-sans">
      <h1 className="text-2xl font-bold text-center mb-4">Leave Application</h1>

      {!submitted ? (
        // 👉 Form
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
            type="text"
            name="rollno"
            placeholder="Roll Number"
            value={form.rollno}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={form.department}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="year"
            placeholder="Year"
            value={form.year}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="clgname"
            placeholder="College Name"
            value={form.clgname}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="to"
            placeholder="To (Ex: Principal)"
            value={form.to}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="year"
            placeholder="Year"
            value={form.year}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={form.department}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="clgname"
            placeholder="College Name"
            value={form.clgname}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
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
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="place"
            placeholder="Place"
            value={form.place}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Generate Letter
          </button>
        </form>
      ) : (
        <>
          {/* Letter */}
          <div
            ref={componentRef}
            className="bg-gray-50 p-6 rounded-lg border shadow-inner"
          >
            {/* From Section */}
            <p className="mb-2">From,</p>
            <p>{form.name}</p>
            <p>Roll No: {form.rollno}</p>
            <p>
              {form.department}, {form.year}
            </p>
            <p className="mb-6">{form.clgname}</p>

            {/* To Section */}
            <p className="mb-2">To,</p>
            <p>{form.to}</p>
            <p>
              {form.year}, {form.department},
            </p>
            <p className="mb-6">{form.clgname}</p>

            {/* Subject */}
            <p className="font-semibold underline mb-4">
              Subject: {form.subject}
            </p>

            {/* Salutation */}
            <p className="mb-4">Respected Sir/Madam,</p>

            {/* Body */}
            <p className="mb-6 text-justify indent-10">{form.reason}</p>

            {/* Closing */}
            <p className="mb-2 text-center">Thank you.</p>
            <div className="text-right py-4">
              <p>Yours obediently,</p>
              <p>{form.name}</p>
            </div>

            {/* Date & Place */}
            <div className="flex justify-between">
              <p>Date: {form.date}</p>
              <p>Place: {form.place}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={handlePrint}
              className="flex-1 bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition"
            >
              🖨️ Print
            </button>
            <button
              onClick={handleSavePDF}
              className="flex-1 bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition"
            >
              📄 Save as PDF
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default LeaveApplication;
