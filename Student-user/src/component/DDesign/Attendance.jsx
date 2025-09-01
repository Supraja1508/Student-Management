import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
const AttendanceForm = () => {
  const totalDays = "";
  const totalPresent = "";
  const totalLeave = "";
  const attendancePercentage = ((totalPresent / totalDays) * 100).toFixed(1);
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const periodsPerDay = 8;
  const getRandomStatus = () => (Math.random() > 0.3 ? "Present" : "Absent");
  const timetable = days.map((day) =>
  Array.from({ length: periodsPerDay }, () => getRandomStatus())
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Attendance saved!\n📅 Date: ${date}\n📌 Status: ${status}`);
  };

  return (
    <div className="max-w-6xl mx-auto mt-24 p-6 font-serif">
      {/* ===== 4 Cards ===== */}
      <h2 className="text-3xl font-bold mb-8 text-left bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent uppercase">
        Attendance Overview
      </h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-lg font-semibold text-gray-600">Total Days</h3>
          <p className="text-3xl font-bold text-purple-600">{totalDays}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-lg font-semibold text-gray-600">Present Days</h3>
          <p className="text-3xl font-bold text-green-600">{totalPresent}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-lg font-semibold text-gray-600">Leaves</h3>
          <p className="text-3xl font-bold text-red-600">{totalLeave}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-lg font-semibold text-gray-600">Attendance %</h3>
          <p className="text-3xl font-bold text-blue-600">{attendancePercentage}%</p>
        </div>
      </div>
{/* ===== Weekly Timetable ===== */}
      <h3 className="text-2xl font-bold mb-6 text-left text-gray-700">Weekly Timetable</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-center">
          <thead className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <tr>
              <th className="py-3 px-4 border">Day</th>
              {Array.from({ length: periodsPerDay }, (_, i) => (
                <th key={i} className="py-3 px-4 border">
                  Period {i + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {days.map((day, i) => (
              <tr key={day} className="odd:bg-gray-50 even:bg-white">
                <td className="py-3 px-4 border font-semibold">{day}</td>
                {timetable[i].map((st, j) => (
                  <td key={j} className="py-3 px-4 border">
                    {st === "Present" ? (
                      <FaCheckCircle className="text-green-500 mx-auto text-xl" />
                    ) : (
                      <FaTimesCircle className="text-red-500 mx-auto text-xl" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceForm;
