// src/component/pages/MaterialFlow.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../jsx files/Navbar";

// Dummy student info
const student = {
  currentSem: 3, // student can only access upto sem 3
};

// Dummy materials by department & sem
const allMaterials = {
  CSE: {
    1: [
      { type: "PDF Notes", title: "CSE Sem1 Basics", file: "/sample-files/cse-sem1.pdf" },
      { type: "Class Notes", title: "CSE Sem1 Notes", file: "/sample-files/cse-sem1-notes.pdf" },
    ],
    2: [
      { type: "Class Test", title: "CSE Sem2 Test", file: "/sample-files/cse-sem2-test.pdf" },
      { type: "Class Notes", title: "CSE Sem2 Notes", file: "/sample-files/cse-sem2-notes.pdf" },
    ],
    3: [
      { type: "Previous Year Questions", title: "CSE Sem3 PYQ", file: "/sample-files/cse-sem3-pyq.pdf" },
      { type: "Class Notes", title: "CSE Sem3 Notes", file: "/sample-files/cse-sem3-notes.pdf" },
    ],
    4: [
      { type: "Handwritten Notes", title: "CSE Sem4 Notes", file: "/sample-files/cse-sem4-notes.pdf" },
    ],
  },
  EEE: {
    1: [
      { type: "PDF Notes", title: "EEE Sem1 Basics", file: "/sample-files/eee-sem1.pdf" },
      { type: "Class Notes", title: "EEE Sem1 Notes", file: "/sample-files/eee-sem1-notes.pdf" },
    ],
    2: [
      { type: "Class Test", title: "EEE Sem2 Test", file: "/sample-files/eee-sem2-test.pdf" },
      { type: "Class Notes", title: "EEE Sem2 Notes", file: "/sample-files/eee-sem2-notes.pdf" },
    ],
  },
};

// ---------------- Department Selection ----------------
const DepartmentSelect = ({ onSelect }) => {
  const departments = ["CSE", "EEE", "MECH", "ECE", "AGRI", "AI/ML"];
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Select Your Department</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {departments.map((dept) => (
          <motion.div
            key={dept}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-blue-700 via-blue-800 to-cyan-700 text-white rounded-3xl shadow-xl px-8 py-6 text-center cursor-pointer font-semibold hover:shadow-2xl transition"
            onClick={() => onSelect(dept)}
          >
            {dept}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// ---------------- Semester Selection ----------------
const SemSelect = ({ department, onSelect }) => {
  const availableSems = Object.keys(allMaterials[department] || {}).map(Number);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6 text-center">
        Select Semester for <span className="text-cyan-700">{department}</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {availableSems.map((sem) => {
          const disabled = sem > student.currentSem;
          return (
            <motion.div
              key={sem}
              whileHover={{ scale: disabled ? 1 : 1.05 }}
              className={`${
                disabled
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-700 via-blue-800 to-cyan-700 text-white cursor-pointer hover:shadow-2xl"
              } rounded-3xl shadow-xl px-8 py-6 text-center font-semibold transition`}
              onClick={() => !disabled && onSelect(sem)}
              title={disabled ? "Access Restricted" : ""}
            >
              Semester {sem}
            </motion.div>
          );
        })}
      </div>
      {student.currentSem < availableSems.length && (
        <p className="mt-4 text-sm text-gray-500 text-center">
          * You can only access up to semester {student.currentSem}
        </p>
      )}
    </div>
  );
};

// Material Page
const MaterialPage = ({ department, sem, onBack }) => {
  const materials = allMaterials[department]?.[sem] || [];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Back button will call onBack(), which you pass from MaterialFlow */}
      <Navbar showBack={true} onBack={onBack} />

      <div className="flex-1 flex flex-col items-center justify-start pt-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6 text-center">
          Materials for <span className="text-cyan-700">{department}</span> - Sem {sem}
        </h2>

        {materials.length === 0 ? (
          <p className="text-gray-500 text-center">No materials uploaded yet.</p>
        ) : (
          <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
            {materials.map((m, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-r from-blue-700 via-blue-800 to-cyan-700 text-white rounded-2xl shadow-xl overflow-hidden flex flex-col"
              >
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-gray-200">{m.type}</p>
                    <h3 className="font-semibold text-white mt-1">{m.title}</h3>
                  </div>
                  <a
                    href={m.file}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-sm bg-white text-blue-800 px-4 py-2 rounded-xl text-center hover:scale-105 transition font-semibold"
                    download
                  >
                    Download
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

    // Material Flow
   
const MaterialFlow = () => {
  const [selectedDept, setSelectedDept] = useState("");
  const [selectedSem, setSelectedSem] = useState(null);

  // Step 1: Department selection
  if (!selectedDept)
    return <DepartmentSelect onSelect={setSelectedDept} />;

  // Step 2: Semester selection
  if (!selectedSem)
    return (
      <SemSelect
        department={selectedDept}
        onSelect={setSelectedSem}
        onBack={() => setSelectedDept("")} // ← Back goes to department selection
      />
    );

  // Step 3: Material page
  return (
    <MaterialPage
      department={selectedDept}
      sem={selectedSem}
      onBack={() => setSelectedSem(null)} // ← Back goes to semester selection
    />
  );
};

export default MaterialFlow;
