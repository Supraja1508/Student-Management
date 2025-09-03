import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Navbar from "../jsx files/Navbar";
import Sidebar from "../jsx files/Sidebar";

// ... your existing student, subjects, marks, helpers ...
const completedSems = [1,2,3,4,5,6,7,8];

// ===== Dummy Student & Result Data (replace with real data later) =====
const student = {
  name: "Supraja R",
  regNo: "923821104051",
  rollNo: "52382110451",
  dob: "2003-08-17",
  batch: "2021 – 2025",
  currentSem: 8, // show "Last Sem CGPA" only if this is 8
  lastSemCGPA: 8.72, // last (8th) sem CGPA
//   photo:
//     "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&q=80&auto=format&fit=crop",
};

// Subjects for this sem (you can reorder/add as needed)
const subjects = [
  { code: "MA801", name: "Mathematics" },
  { code: "PH802", name: "Physics" },
  { code: "CH803", name: "Chemistry" },
  { code: "EN804", name: "English" },
  { code: "TA805", name: "Tamil" },
  { code: "CS806", name: "Python" },
];

// 3 Internals (IA1/IA2/IA3) – marks / 100 each (customize per your scheme)
const internalMarks = [
  { code: "MA801", IA1: 78, IA2: 82, IA3: 88 },
  { code: "PH802", IA1: 69, IA2: 74, IA3: 80 },
  { code: "CH803", IA1: 91, IA2: 86, IA3: 89 },
  { code: "EN804", IA1: 72, IA2: 76, IA3: 79 },
  { code: "TA805", IA1: 84, IA2: 88, IA3: 90 },
  { code: "CS806", IA1: 95, IA2: 93, IA3: 97 },
];

// Last semester final (external) scores (example)
const lastSemFinals = [
  { code: "MA801", total: 186, outOf: 200 },
  { code: "PH802", total: 168, outOf: 200 },
  { code: "CH803", total: 192, outOf: 200 },
  { code: "EN804", total: 160, outOf: 200 },
  { code: "TA805", total: 178, outOf: 200 },
  { code: "CS806", total: 195, outOf: 200 },
];

// Activities & Conduct
const activities = [
  "Won 1st place in Coding Hackathon (Dept Fest)",
  "Organized Tech Talk on Modern JS Tooling",
  "Active member, College Coding Club",
];
const conduct = "Excellent"; // Good / Satisfactory / Needs Improvement

// ===== Helpers =====
const getSubjectName = (code) =>
  subjects.find((s) => s.code === code)?.name ?? code;

// Internals → each IA out of 50
const computeTotals = (arr) =>
  arr.map((r) => {
    const total = r.IA1 + r.IA2 + r.IA3; // total raw marks (/150)
    const percent = (total / 150) * 100; // percentage
    const avg = percent / 10; // GPA-like scale (out of 10)
    return { ...r, total, percent, avg };
  });

const gradeFromPercent = (p) => {
  if (p >= 90) return "A+";
  if (p >= 80) return "A";
  if (p >= 70) return "B+";
  if (p >= 60) return "B";
  if (p >= 50) return "C";
  return "F";
};

const Result = () => {
  const ia = useMemo(() => computeTotals(internalMarks), []);

  // Last Sem Finals → each subject out of 100
  const lastSemTotals = useMemo(() => {
    const total = lastSemFinals.reduce((a, b) => a + b.total, 0);
    const outOf = lastSemFinals.reduce((a, b) => a + b.outOf, 0);
    const percent = (total / outOf) * 100;
    const gpa = percent / 10; // convert to /10 scale
    return { total, outOf, percent, gpa, grade: gradeFromPercent(percent) };
  }, []);

  const overallIA = useMemo(() => {
    const total = ia.reduce((a, b) => a + b.total, 0);
    const outOf = ia.length * 150; // 3 internals * 50 each
    const percent = (total / outOf) * 100;
    const gpa = percent / 10;
    return { total, outOf, percent, gpa, grade: gradeFromPercent(percent) };
  }, [ia]);

  const isFinalSem = student.currentSem === 8;

  return (
    <div className="flex">
      {/* Sidebar (common) */}
      <Sidebar />

      {/* Main area */}
      <div className="flex-1 min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
        {/* Navbar (common) */}
        <Navbar />

        {/* Center-scroll container */}
        <div className="pt-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-5xl">
            {/* Header: Student Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/90 backdrop-blur rounded-2xl shadow-xl border border-blue-100 p-5 sm:p-6"
            >
              <div className="flex flex-col sm:flex-row items-center gap-5">
                <img
                  src={student.photo}
                  alt={student.name}
                  className="w-28 h-28 rounded-2xl object-cover ring-4 ring-blue-200"
                />
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Name
                    </p>
                    <p className="font-semibold text-blue-800">{student.name}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Register No
                    </p>
                    <p className="font-semibold">{student.regNo}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Roll No
                    </p>
                    <p className="font-semibold">{student.rollNo}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Date of Birth
                    </p>
                    <p className="font-semibold">
                      {new Date(student.dob).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Batch
                    </p>
                    <p className="font-semibold">{student.batch}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Semester
                    </p>
                    <p className="font-semibold">{student.currentSem}</p>
                  </div>
                </div>

                {/* Last Sem CGPA (only for 8th sem) */}
                <div className="w-full sm:w-auto">
                  <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-600 to-indigo-600 text-white px-5 py-4 text-center shadow-lg">
                    <p className="text-xs tracking-wider uppercase opacity-90">
                      {isFinalSem ? "Last Sem CGPA" : "CGPA (So Far)"}
                    </p>
                    <p className="text-3xl font-extrabold mt-1">
                      {student.lastSemCGPA.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links + Status */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="https://coe1.annauniv.edu/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white shadow-md border border-blue-100 p-5 hover:shadow-lg transition"
              >
                <p className="text-sm text-gray-600">Official Result</p>
                <p className="font-semibold text-blue-700">
                  Anna University – Results →
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  (Always available for verification)
                </p>
              </a>

              <div className="rounded-2xl bg-white shadow-md border border-blue-100 p-5">
                <p className="text-sm text-gray-600">Overall Internals</p>
                <p className="text-lg font-bold text-blue-700">
                  {overallIA.total} / {overallIA.outOf}{" "}
                  <span className="text-gray-500 text-sm">
                    ({overallIA.percent.toFixed(2)}% – {overallIA.grade})
                  </span>
                </p>
              </div>

              <div className="rounded-2xl bg-white shadow-md border border-blue-100 p-5">
                <p className="text-sm text-gray-600">Last Sem Final</p>
                <p className="text-lg font-bold text-blue-700">
                  {lastSemTotals.total} / {lastSemTotals.outOf}{" "}
                  <span className="text-gray-500 text-sm">
                    ({lastSemTotals.percent.toFixed(2)}% –{" "}
                    {lastSemTotals.grade})
                  </span>
                </p>
              </div>
            </div>

            {/* Internals Table */}
            <div className="mt-6 bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
              <div className="px-5 sm:px-6 py-4 border-b bg-blue-50/60">
                <h3 className="font-bold text-blue-800">
                  Internal Assessment (IA1, IA2, IA3)
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="p-3 text-xs sm:text-sm">Code</th>
                      <th className="p-3 text-xs sm:text-sm">Subject</th>
                      <th className="p-3 text-xs sm:text-sm">IA1</th>
                      <th className="p-3 text-xs sm:text-sm">IA2</th>
                      <th className="p-3 text-xs sm:text-sm">IA3</th>
                      <th className="p-3 text-xs sm:text-sm">Total / 300</th>
                      <th className="p-3 text-xs sm:text-sm">Avg</th>
                      <th className="p-3 text-xs sm:text-sm">Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ia.map((r) => {
                      const percent = (r.total / 300) * 100;
                      return (
                        <tr key={r.code} className="border-b hover:bg-blue-50">
                          <td className="p-3 text-sm">{r.code}</td>
                          <td className="p-3 text-sm">
                            {getSubjectName(r.code)}
                          </td>
                          <td className="p-3 text-sm">{r.IA1}</td>
                          <td className="p-3 text-sm">{r.IA2}</td>
                          <td className="p-3 text-sm">{r.IA3}</td>
                          <td className="p-3 text-sm font-semibold">
                            {r.total}
                          </td>
                          <td className="p-3 text-sm">{r.avg.toFixed(1)}</td>
                          <td
                            className={`p-3 text-sm font-bold ${
                              percent >= 90
                                ? "text-green-600"
                                : percent >= 70
                                ? "text-blue-700"
                                : percent >= 50
                                ? "text-amber-600"
                                : "text-red-600"
                            }`}
                          >
                            {gradeFromPercent(percent)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Last Semester Finals Table */}
            <div className="mt-6 bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
              <div className="px-5 sm:px-6 py-4 border-b bg-blue-50/60">
                <h3 className="font-bold text-blue-800">
                  Last Semester – Final Scores
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-indigo-600 text-white">
                      <th className="p-3 text-xs sm:text-sm">Code</th>
                      <th className="p-3 text-xs sm:text-sm">Subject</th>
                      <th className="p-3 text-xs sm:text-sm">Total</th>
                      <th className="p-3 text-xs sm:text-sm">Out Of</th>
                      <th className="p-3 text-xs sm:text-sm">Percentage</th>
                      <th className="p-3 text-xs sm:text-sm">Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lastSemFinals.map((r) => {
                      const percent = (r.total / r.outOf) * 100;
                      return (
                        <tr key={r.code} className="border-b hover:bg-indigo-50">
                          <td className="p-3 text-sm">{r.code}</td>
                          <td className="p-3 text-sm">
                            {getSubjectName(r.code)}
                          </td>
                          <td className="p-3 text-sm">{r.total}</td>
                          <td className="p-3 text-sm">{r.outOf}</td>
                          <td className="p-3 text-sm">
                            {percent.toFixed(2)}%
                          </td>
                          <td className="p-3 text-sm font-bold">
                            {gradeFromPercent(percent)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Overall last sem summary */}
              <div className="px-5 sm:px-6 py-4 bg-white flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <p className="text-sm text-gray-700">
  <span className="font-semibold">Overall:</span>{" "}
  {lastSemTotals.total} / {lastSemTotals.outOf} (
  {lastSemTotals.percent.toFixed(2)}% – GPA {lastSemTotals.gpa.toFixed(2)})
</p>

                <span className="inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-700">
                  Grade: {lastSemTotals.grade}
                </span>
              </div>
            </div>

            {/* Activities & Conduct */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-5">
                <h4 className="font-bold text-blue-800 mb-3">
                  Co-Curricular / Activities
                </h4>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                  {activities.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-5">
                <h4 className="font-bold text-blue-800 mb-3">Conduct</h4>
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                      conduct === "Excellent"
                        ? "bg-green-100 text-green-700"
                        : conduct === "Good"
                        ? "bg-blue-100 text-blue-700"
                        : conduct === "Satisfactory"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {conduct}
                  </span>
                  <p className="text-sm text-gray-600">
                    Maintains discipline, punctuality & teamwork.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Hint / Actions */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-gray-500">
                Tip: You can wire real data via API later—structure is ready.
              </p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="rounded-xl bg-blue-600 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-700 active:bg-blue-800 transition"
                >
                  Print / Save as PDF
                </button>
                <a
                  href="https://coe1.annauniv.edu/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-blue-300 text-blue-700 px-4 py-2 text-sm font-semibold hover:bg-blue-50 transition"
                >
                  Verify on AU site
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* end center-scroll container */}
      </div>
    </div>
  );
};

export default Result;
