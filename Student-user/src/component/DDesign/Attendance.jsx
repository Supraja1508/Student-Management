import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Card = ({ children, className, onClick }) => (
  <div
    onClick={onClick}
    className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer ${className}`}
  >
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-4 sm:p-6 ${className}`}>{children}</div>
);

const AttendancePage = () => {
  const navigate = useNavigate();

  // Mentor details
  const mentor = {
    name: "Anna Arasu",
    email: "mceadmin@gmail.com",
    phone: "+91 9455826541",
    image: "https://via.placeholder.com/150",
  };

  // Attendance data
  const totalDays = 120;
  const totalPresent = 100;
  const totalLeave = totalDays - totalPresent;
  const attendancePercentage = ((totalPresent / totalDays) * 100).toFixed(1);

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const periodsPerDay = 8;
  const getRandomStatus = () => (Math.random() > 0.3 ? "Present" : "Absent");
  const timetable = days.map(() =>
    Array.from({ length: periodsPerDay }, () => getRandomStatus())
  );

  return (
    <div className="max-w-7xl mx-auto mt-16 sm:mt-20 p-4 sm:p-6 font-sans">
      {/* ===== Attendance Overview ===== */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-left text-blue-600 uppercase">
        Attendance Overview
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
  {/* Total Days */}
  <Card className="text-center border-t-4 border-blue-400">
    <CardContent>
      <p className="text-gray-500 text-sm sm:text-base font-semibold">Total Days</p>
      <p className="text-2xl sm:text-3xl font-bold text-blue-600">{totalDays}</p>
    </CardContent>
  </Card>

  {/* Present Days */}
  <Card className="text-center border-t-4 border-green-400">
    <CardContent>
      <p className="text-gray-500 text-sm sm:text-base font-semibold">Present</p>
      <p className="text-2xl sm:text-3xl font-bold text-green-600">{totalPresent}</p>
      <p className="text-xs text-green-500 mt-1">
        ({((totalPresent / totalDays) * 100).toFixed(1)}%)
      </p>
    </CardContent>
  </Card>

  {/* Leaves */}
  <Card className="text-center border-t-4 border-red-400">
    <CardContent>
      <p className="text-gray-500 text-sm sm:text-base font-semibold">Leaves</p>
      <p className="text-2xl sm:text-3xl font-bold text-red-500">{totalLeave}</p>
      <p className="text-xs text-red-500 mt-1">
        ({((totalLeave / totalDays) * 100).toFixed(1)}%)
      </p>
    </CardContent>
  </Card>

  {/* Attendance % */}
  <Card className="text-center border-t-4 border-blue-600">
    <CardContent>
      <p className="text-gray-500 text-sm sm:text-base font-semibold">Attendance %</p>
      <p className="text-2xl sm:text-3xl font-bold text-blue-700">{attendancePercentage}%</p>
    </CardContent>
  </Card>
</div>


      {/* ===== Weekly Timetable ===== */}
      <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-700">Weekly Timetable</h3>
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border border-gray-200 text-center text-xs sm:text-sm">
          <thead className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
            <tr>
              <th className="py-2 sm:py-3 px-2 sm:px-4 border">Day</th>
              {Array.from({ length: periodsPerDay }, (_, i) => (
                <th key={i} className="py-2 sm:py-3 px-2 sm:px-4 border">
                  P{i + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {days.map((day, i) => (
              <tr key={day} className="odd:bg-blue-50 even:bg-white">
                <td className="py-2 sm:py-3 px-2 sm:px-4 border font-semibold">{day}</td>
                {timetable[i].map((st, j) => (
                  <td key={j} className="py-2 sm:py-3 px-2 sm:px-4 border">
                    {st === "Present" ? (
                      <FaCheckCircle className="text-green-500 mx-auto text-base sm:text-xl" />
                    ) : (
                      <FaTimesCircle className="text-red-500 mx-auto text-base sm:text-xl" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===== Mentor Section ===== */}
      <motion.div
        className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-4 sm:p-6 mt-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col sm:flex-row items-center sm:space-x-6 text-center sm:text-left">
          <img
            src={mentor.image}
            alt="Mentor"
            className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border-4 border-blue-500 shadow-lg mb-4 sm:mb-0"
          />
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{mentor.name}</h2>
            <p className="text-sm sm:text-base text-gray-600">{mentor.email}</p>
            <p className="text-sm sm:text-base text-gray-600">{mentor.phone}</p>
          </div>
        </div>
      </motion.div>

      {/* ===== Options Cards ===== */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        {/* Leave Application */}
        
        <Card className="border-t-4 border-red-500" onClick={() => navigate("/leave")}>
          <CardContent className="flex flex-col items-center text-center">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="bg-red-500 text-white w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full shadow-lg mb-3"
            >
              📝
            </motion.div>
            <h3 className="font-semibold text-base md:text-lg">Leave Application</h3>
            <p className="text-xs sm:text-sm text-gray-500">Submit or view leave requests</p>
          </CardContent>
        </Card>

        {/* Class Representatives */}
        <Card className="border-t-4 border-green-500" onClick={() => navigate("/representatives")}>
          <CardContent className="flex flex-col items-center text-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-green-500 text-white w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full shadow-lg mb-3"
            >
              👥
            </motion.div>
            <h3 className="font-semibold text-base md:text-lg">Class Representatives</h3>
            <p className="text-xs sm:text-sm text-gray-500">View CR (Boys & Girls) details</p>
          </CardContent>
        </Card>

        {/* Assignments */}
        <Card className="border-t-4 border-blue-500" onClick={() => navigate("/assignments")}>
          <CardContent className="flex flex-col items-center text-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-blue-500 text-white w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full shadow-lg mb-3"
            >
              📚
            </motion.div>
            <h3 className="font-semibold text-base md:text-lg">Assignments</h3>
            <p className="text-xs sm:text-sm text-gray-500">Check daily assignment updates</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default AttendancePage;
