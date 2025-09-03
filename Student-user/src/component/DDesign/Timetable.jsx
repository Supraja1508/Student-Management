import React, { useState, useEffect } from "react";

// Dummy timetable data
const timetableData = {
  Monday: [
    { subject: "Math", faculty: "Anna Arasu" },
    { subject: "Physics", faculty: "Kumar" },
    { subject: "Chemistry", faculty: "Meena" },
    { subject: "English", faculty: "Rajesh" },
    { subject: "Biology", faculty: "Sundar" },
    { subject: "Math", faculty: "Anna Arasu" },
    { subject: "Physics", faculty: "Kumar" },
    { subject: "Chemistry", faculty: "Meena" },
  ],
  Tuesday: [
    { subject: "Physics", faculty: "Kumar" },
    { subject: "Math", faculty: "Anna Arasu" },
    { subject: "English", faculty: "Rajesh" },
    { subject: "Biology", faculty: "Sundar" },
    { subject: "Chemistry", faculty: "Meena" },
    { subject: "Physics", faculty: "Kumar" },
    { subject: "Math", faculty: "Anna Arasu" },
    { subject: "English", faculty: "Rajesh" },
  ],
  Wednesday: [
    { subject: "Chemistry", faculty: "Meena" },
    { subject: "Biology", faculty: "Sundar" },
    { subject: "Math", faculty: "Anna Arasu" },
    { subject: "Physics", faculty: "Kumar" },
    { subject: "English", faculty: "Rajesh" },
    { subject: "Chemistry", faculty: "Meena" },
    { subject: "Biology", faculty: "Sundar" },
    { subject: "Math", faculty: "Anna Arasu" },
  ],
  Thursday: [
    { subject: "English", faculty: "Rajesh" },
    { subject: "Math", faculty: "Anna Arasu" },
    { subject: "Physics", faculty: "Kumar" },
    { subject: "Biology", faculty: "Sundar" },
    { subject: "Chemistry", faculty: "Meena" },
    { subject: "English", faculty: "Rajesh" },
    { subject: "Math", faculty: "Anna Arasu" },
    { subject: "Physics", faculty: "Kumar" },
  ],
  Friday: [
    { subject: "Biology", faculty: "Sundar" },
    { subject: "Chemistry", faculty: "Meena" },
    { subject: "English", faculty: "Rajesh" },
    { subject: "Math", faculty: "Anna Arasu" },
    { subject: "Physics", faculty: "Kumar" },
    { subject: "Biology", faculty: "Sundar" },
    { subject: "Chemistry", faculty: "Meena" },
    { subject: "English", faculty: "Rajesh" },
  ],
};

// Updated period timings including morning break
const periodTimes = [
  "9:00-9:45",
  "9:50-10:35",
  "10:40-11:10",
  "11:10-11:30 (Break)",
  "11:30-12:15",
  "12:20-1:05",
  "1:10-1:55",
  "2:00-2:45",
  "2:50-3:35",
  "3:40-4:30",
];

// Dummy faculty details
const facultyDetails = [
  {
    name: "Anna Arasu",
    subjects: ["Math"],
    degree: "M.Sc Math",
    experience: 5,
    image: "https://via.placeholder.com/150",
    
  },
  {
    name: "Kumar",
    subjects: ["Physics"],
    degree: "M.Sc Physics",
    experience: 8,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Meena",
    subjects: ["Chemistry"],
    degree: "M.Sc Chemistry",
    experience: 6,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Rajesh",
    subjects: ["English"],
    degree: "M.A English",
    experience: 7,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Sundar",
    subjects: ["Biology"],
    degree: "M.Sc Biology",
    experience: 5,
    image: "https://via.placeholder.com/150",
  },
];


export const Timetable = () => {
  const [todayIndex, setTodayIndex] = useState(null);

  const days = Object.keys(timetableData);

  useEffect(() => {
    const today = new Date().getDay(); // Sunday = 0
    const dayMap = { 1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday" };
    setTodayIndex(days.indexOf(dayMap[today]));
  }, [days]);

  return (
    <div className=" bg-gray-50 min-h-screen p-4 flex flex-col md:flex-row-reverse gap-4 font-serif">
      {/* Faculty Panel on Right */}
      <div className="md:w-1/4 bg-white p-4 shadow-lg rounded-xl h-fit overflow-auto">
        <h2 className="text-lg font-bold mb-4 text-center">Faculty Details</h2>
        {facultyDetails.map((faculty, idx) => (
          <div className="flex justify-evenly items-center border-1 m-2">
          <div key={idx} className=" mb-3 p-2  rounded hover:shadow-md transition duration-200">
            <p className="font-semibold">{faculty.name}</p>
            <p className="text-sm text-gray-600">Subjects: {faculty.subjects.join(", ")}</p>
            <p className="text-sm text-gray-600">Degree: {faculty.degree}</p>
            <p className="text-sm text-gray-600">Experience: {faculty.experience} yrs</p>
          </div>
           <div className="w-28 h-28 rounded-full border-4 border-white mb-4 bg-gray-200 flex items-center justify-center text-sm font-bold">
            <img src={faculty.image} alt="mentors" />
            </div>
          </div>
        ))}
      </div>

      {/* Timetable Table */}
      <div className="md:w-3/4 overflow-x-auto">
        <div className="max-w-full shadow-xl bg-white rounded-xl overflow-auto p-6">
          <h1 className="text-2xl font-bold uppercase text-center bg-gradient-to-t from-blue-300 to-blue-800 bg-clip-text text-transparent">
            Student Timetable
          </h1>

          <div className="overflow-x-auto mt-8">
            <table className="min-w-full border border-gray-300 text-center">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="py-2 px-2 border">Time</th>
                  {days.map((day, idx) => (
                    <th
                      key={idx}
                      className={`py-2 px-4 border ${todayIndex === idx ? "animate-pulse bg-blue-300" : ""}`}
                    >
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {periodTimes.map((time, pIdx) => (
                  <tr key={pIdx} className={pIdx % 2 === 0 ? "bg-blue-50" : "bg-white"}>
                    <td className="py-2 px-2 border font-semibold text-sm">{time}</td>
                    {days.map((day, dIdx) => (
                      <td
                        key={dIdx}
                        className={`py-2 px-4 border ${
                          todayIndex === dIdx && !time.includes("Break")
                            ? "bg-gradient-to-r from-blue-200 to-blue-400 animate-pulse"
                            : ""
                        }`}
                      >
                        {time.includes("Break") ? (
                          <p className="italic text-gray-500 text-xs">Morning Break</p>
                        ) : (
                          <>
                            <p className="font-semibold text-blue-700 text-sm">
                              {timetableData[day][pIdx]?.subject || "-"}
                            </p>
                            <p className="text-gray-600 text-xs">
                              {timetableData[day][pIdx]?.faculty || "-"}
                            </p>
                          </>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
