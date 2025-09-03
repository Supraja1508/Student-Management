// src/component/pages/FacultyPage.jsx
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiCalendar } from "react-icons/fi";
import Navbar from "../jsx files/Navbar";

// Dummy faculty data
const facultyList = [
  // -------- CSE Full Faculty --------
  { name: "Dr. Arun Kumar", designation: "Professor", department: "CSE", email: "arun.cse@university.edu", phone: "9876543210", office: "10 AM - 1 PM", bio: "Expert in AI and Machine Learning", subjects: ["Python Basics", "Data Structures"], semesters: [1, 2, 3] },
  { name: "Dr. Priya Sharma", designation: "Associate Professor", department: "CSE", email: "priya.cse@university.edu", phone: "9876543211", office: "11 AM - 2 PM", bio: "Specializes in DBMS", subjects: ["Database Systems", "SQL"], semesters: [2, 3] },
  { name: "Mr. Rajesh Singh", designation: "Assistant Professor", department: "CSE", email: "rajesh.cse@university.edu", phone: "9876543212", office: "2 PM - 5 PM", bio: "Focus on Web Development", subjects: ["HTML/CSS/JS", "React"], semesters: [1,2] },
  { name: "Ms. Kavitha R", designation: "Assistant Professor", department: "CSE", email: "kavitha.cse@university.edu", phone: "9876543213", office: "9 AM - 12 PM", bio: "Algorithms enthusiast", subjects: ["Algorithms", "Data Structures"], semesters: [1,2,3] },
  { name: "Dr. Suresh P", designation: "Professor", department: "CSE", email: "suresh.cse@university.edu", phone: "9876543214", office: "10 AM - 1 PM", bio: "Cybersecurity expert", subjects: ["Security", "Network"], semesters: [3] },
  { name: "Ms. Deepa N", designation: "Assistant Professor", department: "CSE", email: "deepa.cse@university.edu", phone: "9876543215", office: "1 PM - 4 PM", bio: "Cloud computing & ML", subjects: ["Cloud", "ML Basics"], semesters: [2,3] },
  { name: "Mr. Mohan K", designation: "Assistant Professor", department: "CSE", email: "mohan.cse@university.edu", phone: "9876543216", office: "11 AM - 2 PM", bio: "Mobile apps developer", subjects: ["Flutter", "Android Dev"], semesters: [1,2] },
  { name: "Dr. Anitha S", designation: "Professor", department: "CSE", email: "anitha.cse@university.edu", phone: "9876543217", office: "9 AM - 12 PM", bio: "AI & Robotics", subjects: ["AI Basics", "Robotics"], semesters: [3] },
  { name: "Mr. Vinod R", designation: "Assistant Professor", department: "CSE", email: "vinod.cse@university.edu", phone: "9876543218", office: "2 PM - 5 PM", bio: "DBMS & SQL", subjects: ["Database Systems"], semesters: [1,2] },
  { name: "Ms. Radhika P", designation: "Assistant Professor", department: "CSE", email: "radhika.cse@university.edu", phone: "9876543219", office: "10 AM - 1 PM", bio: "Cloud & DevOps", subjects: ["Cloud", "DevOps"], semesters: [2,3] },

  // -------- Other Departments (HOD only) --------
  { name: "Dr. Vijay Kumar", designation: "HOD", department: "EEE", email: "vijay.eee@university.edu", phone: "9876500010", office: "10 AM - 4 PM", bio: "Electrical systems expert", subjects: ["Circuit Theory"], semesters: [1,2,3] },
  { name: "Dr. Anita R", designation: "HOD", department: "MECH", email: "anita.mech@university.edu", phone: "9876500020", office: "9 AM - 3 PM", bio: "Thermodynamics & Materials", subjects: ["Thermodynamics"], semesters: [1,2] },
  { name: "Dr. Rohit S", designation: "HOD", department: "AI/ML", email: "rohit.ai@university.edu", phone: "9876500030", office: "11 AM - 5 PM", bio: "Machine Learning & AI", subjects: ["ML Basics"], semesters: [1,2,3] },
];

const FacultyPage = ({ filterDept }) => {
  const filteredFaculty = filterDept
    ? facultyList.filter(f => f.department === filterDept)
    : facultyList;

  return (
    <div className="min-h-screen bg-white flex flex-col font-serif">
      <Navbar showBack={true} onBack={() => window.history.back()} />
      <div className="flex-1 flex flex-col items-center justify-start pt-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-8 text-center">
          {filterDept ? `${filterDept} Department Faculty` : "Meet Our Faculty"}
        </h2>

        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {filteredFaculty.map((f, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="bg-gradient-to-br from-blue-700 via-blue-800 to-cyan-700 text-white rounded-2xl shadow-xl overflow-hidden flex flex-col p-6"
            >
              <div className="flex flex-col items-center">
                <div className="w-28 h-28 rounded-full border-4 border-white mb-4 bg-gray-200 flex items-center justify-center text-2xl font-bold">
                  {f.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="text-xl font-semibold">{f.name}</h3>
                <p className="text-sm text-gray-200">{f.designation}</p>
                <p className="text-sm text-gray-200 mb-2">{f.department}</p>
              </div>

              <p className="text-sm text-gray-200 mt-2 text-center">{f.bio}</p>
              <p className="text-sm text-gray-300 mt-2 font-semibold">Subjects:</p>
              <ul className="text-sm text-gray-200 list-disc list-inside">
                {f.subjects.map((sub, i) => <li key={i}>{sub}</li>)}
              </ul>
              <div className="flex flex-wrap justify-center mt-2 gap-2">
                {f.semesters.map((sem, i) => (
                  <span key={i} className="bg-white text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Sem {sem}
                  </span>
                ))}
              </div>

              <div className="flex justify-center gap-4 mt-4">
                <a href={`mailto:${f.email}`} className="bg-white text-blue-800 p-2 rounded-full hover:scale-110 transition">
                  <FiMail size={20} />
                </a>
                <a href={`tel:${f.phone}`} className="bg-white text-blue-800 p-2 rounded-full hover:scale-110 transition">
                  <FiPhone size={20} />
                </a>
                <button className="bg-white text-blue-800 p-2 rounded-full hover:scale-110 transition">
                  <FiCalendar size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultyPage;
