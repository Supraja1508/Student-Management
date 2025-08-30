import { useState } from "react";
import clg from "../image/clg.jpg";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DashboardDesign = () => {
  // Performance data per semester per subject
  const performanceData = {
    "Sem 1": { Math: 85, Physics: 78, Chemistry: 92, English: 88 },
    "Sem 2": { Math: 82, Physics: 80, Chemistry: 85, English: 90 },
    "Sem 3": { Math: 90, Physics: 85, Chemistry: 88, English: 92 },
    "Sem 4": { Math: 88, Physics: 82, Chemistry: 90, English: 87 },
    "Sem 5": { Math: 75, Physics: 80, Chemistry: 85, English: 78 },
    "Sem 6": { Math: 95, Physics: 92, Chemistry: 90, English: 94 },
    "Sem 7": { Math: 88, Physics: 90, Chemistry: 92, English: 89 },
    "Sem 8": { Math: 90, Physics: 88, Chemistry: 85, English: 91 },
  };

  // Faculty details for each semester
  const facultyData = {
    "Sem 1": [
      {
        name: "Dr. Suresh Kumar",
        subject: "Math",
        degree: "PhD (Mathematics)",
        email: "suresh@college.edu",
        phone: "9876543210",
      },
      {
        name: "Ms. Priya",
        subject: "Physics",
        degree: "M.Sc Physics",
        email: "priya@college.edu",
        phone: "9876501234",
      },
      {
        name: "Mr. Anbu",
        subject: "Chemistry",
        degree: "M.Sc Chemistry",
        email: "anbu@college.edu",
        phone: "9123456789",
      },
      {
        name: "Ms. Rekha",
        subject: "English",
        degree: "MA English",
        email: "rekha@college.edu",
        phone: "9988776655",
      },
    ],
    "Sem 2": [
      {
        name: "Dr. Ramesh",
        subject: "Math",
        degree: "PhD (Applied Maths)",
        email: "ramesh@college.edu",
        phone: "9876512345",
      },
      {
        name: "Mr. Karthik",
        subject: "Physics",
        degree: "M.Sc Physics",
        email: "karthik@college.edu",
        phone: "9876501122",
      },
    ],
    // Add for Sem 3 - Sem 8
  };

  const hodDetails = {
    name: "Dr. Meena Lakshmi",
    degree: "PhD (Computer Science)",
    email: "hodcse@college.edu",
    phone: "9000012345",
  };

  // Dummy upcoming events
  const events = [
    {
      title: "Tech Fest 2025",
      date: "Sep 15, 2025",
      desc: "Annual inter-college technical festival.",
    },
    {
      title: "Workshop on AI",
      date: "Oct 5, 2025",
      desc: "Hands-on session with AI experts.",
    },
    {
      title: "Sports Meet",
      date: "Nov 20, 2025",
      desc: "Inter-department sports competition.",
    },
  ];

  const semesters = Object.keys(performanceData);
  const [selectedSem, setSelectedSem] = useState("Sem 1");
  const [expandedFaculty, setExpandedFaculty] = useState(null);

  const selectedData = performanceData[selectedSem];
  const selectedFaculty = facultyData[selectedSem] || [];

  return (
    <>
      <div className="font-serif ">
        {/* Top Section */}
        <div className="grid justify-center items-center mt-10 mx-auto max-w-5xl p-8">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            {/* HELLO Box */}
            <div className="p-8 text-black shadow-2xl flex-1 bg-white rounded-xl">
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-2xl">HELLO!</h1>
                <img
                  src={clg}
                  alt="clg logo"
                  className="w-20 h-20 shadow-lg rounded-full"
                />
              </div>
              <h2 className="mt-4 capitalize text-gray-700">
                Welcome to Mangayarkarasi College of Engineering, Paravai,
                Madurai.
              </h2>
            </div>

            {/* Calendar Box */}
            <div className="p-4 text-black shadow-2xl bg-white rounded-xl flex-1 flex flex-col items-center">
              <h2 className="font-bold text-xl mb-4">CALENDAR</h2>
              <Calendar
                onChange={(date) => console.log("Selected Date:", date)}
                className="rounded-2xl pb-2 w-full
    !border-0 
      [&_.react-calendar__navigation]:flex 
      [&_.react-calendar__navigation]:justify-between 
      [&_.react-calendar__navigation]:items-center
      [&_.react-calendar__navigation]:mb-4
      [&_.react-calendar__navigation button]:text-gray-700
      [&_.react-calendar__navigation button]:text-lg
      [&_.react-calendar__month-view__weekdays]:uppercase
      [&_.react-calendar__month-view__weekdays]:text-gray-500
      [&_.react-calendar__month-view__weekdays]:text-xs
      [&_.react-calendar__tile]:p-3
      [&_.react-calendar__tile]:rounded-lg
      [&_.react-calendar__tile--now]:bg-green-100
      [&_.react-calendar__tile--active]:bg-green-500
      [&_.react-calendar__tile--active]:text-white
      [&_.react-calendar__tile:hover]:bg-gray-200"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Semester Selector */}
      <div className="mt-12 max-w-5xl mx-auto p-6 bg-white shadow-2xl rounded-xl">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
          <h1 className="font-bold text-2xl text-gray-800">
            STUDENT PERFORMANCE
          </h1>

          <select
            value={selectedSem}
            onChange={(e) => setSelectedSem(e.target.value)}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {semesters.map((sem) => (
              <option key={sem} value={sem}>
                {sem}
              </option>
            ))}
          </select>
        </div>

        {/* Bar Chart */}
        <div className="flex items-end justify-between gap-4 h-64">
          {Object.entries(selectedData).map(([subject, score]) => (
            <div key={subject} className="flex flex-col items-center w-16">
              <div
                className="w-full rounded-t-xl transition-all duration-500"
                style={{
                  height: `${score}%`,
                  background: `linear-gradient(to top, #4f46e5, #818cf8)`,
                }}
              ></div>
              <span className="mt-2 text-sm font-medium text-gray-700 text-center">
                {subject}
              </span>
              <span className="text-xs text-gray-500">{score}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Faculty + Events Section */}
      <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Faculty Section */}
        <div className="p-6 bg-gradient-to-r from-indigo-100 to-blue-50 shadow-xl rounded-xl">
          <h2 className="text-xl font-bold text-indigo-900 mb-6">
            Faculty Linked to {selectedSem}
          </h2>

          {/* Faculty Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {selectedFaculty.map((fac, idx) => (
              <div
                key={idx}
                onClick={() =>
                  setExpandedFaculty(expandedFaculty === idx ? null : idx)
                }
                className="p-4 bg-white shadow-md rounded-xl border border-indigo-200 cursor-pointer transition hover:shadow-lg"
              >
                <h3 className="font-semibold text-lg text-indigo-700">
                  {fac.name}
                </h3>
                <p className="text-sm text-gray-600">📘 {fac.subject}</p>

                {/* Expanded details */}
                {expandedFaculty === idx && (
                  <div className="mt-2 text-sm text-gray-600 space-y-1">
                    <p>🎓 {fac.degree}</p>
                    <p>✉️ {fac.email}</p>
                    <p>📞 {fac.phone}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* HOD Card */}
          <div className="mt-8 p-6 bg-indigo-600 text-white rounded-xl shadow-lg">
            <h3 className="font-bold text-lg">Head of Department</h3>
            <p className="text-sm mt-1">{hodDetails.name}</p>
            <p className="text-sm">{hodDetails.degree}</p>
            <p className="text-sm">✉️ {hodDetails.email}</p>
            <p className="text-sm">📞 {hodDetails.phone}</p>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="p-6 bg-gradient-to-r from-pink-100 to-purple-50 shadow-xl rounded-xl">
          <h2 className="text-xl font-bold text-purple-900 mb-6">
            Upcoming Events
          </h2>

          <div className="space-y-4">
            {events.map((ev, idx) => (
              <div
                key={idx}
                className="p-4 bg-white rounded-lg shadow-md border border-purple-200"
              >
                <h3 className="font-semibold text-lg text-purple-700">
                  {ev.title}
                </h3>
                <p className="text-sm text-gray-500">📅 {ev.date}</p>
                <p className="text-sm text-gray-600">{ev.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardDesign;
