// src/component/SettingsPage.jsx
import React, { useState, useEffect } from "react";
import { FiUser, FiBell, FiBook, FiSun, FiMoon, FiEye } from "react-icons/fi";

const SettingsPage = () => {
  // ===== Profile & Account =====
  const [name, setName] = useState("John Doe");
  const [username, setUsername] = useState("johndoe123");
  const [email, setEmail] = useState("john@example.com");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [twoFA, setTwoFA] = useState(false);

  // ===== Notifications =====
  const [borrowReminder, setBorrowReminder] = useState(true);
  const [overdueDays, setOverdueDays] = useState(3);
  const [notifyVia, setNotifyVia] = useState("email");

  // ===== Library Preferences =====
  const [theme, setTheme] = useState("light");
  const [libraryView, setLibraryView] = useState("table");
  const [sortBy, setSortBy] = useState("mostBorrowed");
  const [hoverAnimation, setHoverAnimation] = useState(true);

  // ===== Accessibility =====
  const [fontSize, setFontSize] = useState("medium");
  const [colorBlindMode, setColorBlindMode] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  // ===== Academic Info =====
  const [marks, setMarks] = useState({ tenth: "", eleventh: "", twelfth: "" });
  const [percentages, setPercentages] = useState({ tenth: 0, eleventh: 0, twelfth: 0 });

  // ===== Marksheets Upload =====
  const [marksheets, setMarksheets] = useState({
    sem1: null,
    sem2: null,
    sem3: null,
    sem4: null,
    sem5: null,
    sem6: null,
    tenth: null,
    eleventh: null,
    twelfth: null,
  });

  const [saveMessage, setSaveMessage] = useState("");

const handleSave = () => {
  // simulate saving details
  setSaveMessage("✅ Your details have been saved successfully!");
  setTimeout(() => setSaveMessage(""), 3000); // hide after 3s
};

  useEffect(() => {
    const calcPercent = (m) => (m ? Math.min(Math.max(Number(m), 0), 100) : 0);
    setPercentages({
      tenth: calcPercent(marks.tenth),
      eleventh: calcPercent(marks.eleventh),
      twelfth: calcPercent(marks.twelfth),
    });
  }, [marks]);

  // ===== Theme Effect =====
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // ===== Daily Motivational Quote =====
  const [quote, setQuote] = useState("Knowledge is power!");

  const handleFileChange = (e, key) => {
    setMarksheets({ ...marksheets, [key]: e.target.files[0] });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center p-4 md:p-8 font-sans transition-colors duration-500">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">Student Settings</h1>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* =============== Existing Profile & Account ================= */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-indigo-700 flex items-center gap-2"><FiUser /> Profile</h2>

          <div className="flex flex-col items-center gap-4">
            <img src="/static/profile.png" alt="Profile" className="w-24 h-24 rounded-full border-2 border-indigo-300"/>
            <p className="text-gray-500 text-sm dark:text-gray-400">Profile picture cannot be changed</p>
          </div>

          <input type="text" placeholder="Full Name" value={name} onChange={(e)=>setName(e.target.value)}
            className="p-2 border rounded focus:ring-2 focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600"/>
          <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}
            className="p-2 border rounded focus:ring-2 focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600"/>
          <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}
            className="p-2 border rounded focus:ring-2 focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600"/>
          
          <div className="relative w-full">
            <input type={showPassword?"text":"password"} placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}
              className="p-2 border rounded w-full focus:ring-2 focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600"/>
            <button onClick={()=>setShowPassword(!showPassword)} className="absolute right-2 top-2 text-gray-500 dark:text-gray-300">
              <FiEye/>
            </button>
          </div>

          <label className="flex items-center gap-2">
            <input type="checkbox" checked={twoFA} onChange={()=>setTwoFA(!twoFA)} />
            Enable Two-Factor Authentication
          </label>
        </div>

        {/* =============== Existing Notifications ================= */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-indigo-700 flex items-center gap-2"><FiBell /> Notifications</h2>

          <label className="flex items-center gap-2">
            <input type="checkbox" checked={borrowReminder} onChange={()=>setBorrowReminder(!borrowReminder)}/>
            Borrow Reminders
          </label>

          <div className="flex flex-col gap-2">
            <label>Overdue Reminder (days)</label>
            <input type="number" min="1" value={overdueDays} onChange={e=>setOverdueDays(e.target.value)}
              className="p-2 border rounded focus:ring-2 focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600"/>
          </div>

          <div className="flex flex-col gap-2">
            <label>Notify via</label>
            <select value={notifyVia} onChange={e=>setNotifyVia(e.target.value)}
              className="p-2 border rounded focus:ring-2 focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600">
              <option value="email">Email</option>
              <option value="sms">SMS</option>
              <option value="inapp">In-app</option>
            </select>
          </div>
        </div>

        {/* =============== Existing Library Preferences ================= */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-indigo-700 flex items-center gap-2"><FiBook /> Library Preferences</h2>

          <div className="flex flex-col gap-2">
            <label>Theme</label>
            <select value={theme} onChange={e=>setTheme(e.target.value)}
              className="p-2 border rounded focus:ring-2 focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="mild">Elegant Mild</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label>Library View</label>
            <select value={libraryView} onChange={e=>setLibraryView(e.target.value)}
              className="p-2 border rounded focus:ring-2 focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600">
              <option value="table">Table</option>
              <option value="card">Card</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label>Default Sort</label>
            <select value={sortBy} onChange={e=>setSortBy(e.target.value)}
              className="p-2 border rounded focus:ring-2 focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600">
              <option value="mostBorrowed">Most Borrowed</option>
              <option value="newArrivals">New Arrivals</option>
              <option value="alphabetical">Alphabetical</option>
            </select>
          </div>

          <label className="flex items-center gap-2">
            <input type="checkbox" checked={hoverAnimation} onChange={()=>setHoverAnimation(!hoverAnimation)}/>
            Enable Row Hover Animation
          </label>
        </div>

        {/* =============== Accessibility & Academic Info ================= */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-indigo-700 flex items-center gap-2"><FiSun /> Accessibility & Academic</h2>

          <div className="flex flex-col gap-2">
            <label>Font Size</label>
            <select value={fontSize} onChange={e=>setFontSize(e.target.value)}
              className="p-2 border rounded focus:ring-2 focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          <label className="flex items-center gap-2">
            <input type="checkbox" checked={colorBlindMode} onChange={()=>setColorBlindMode(!colorBlindMode)}/>
            Color Blind Mode
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" checked={animationsEnabled} onChange={()=>setAnimationsEnabled(!animationsEnabled)}/>
            Enable Animations
          </label>

          {/* ===== Academic Marks ===== */}
          <div className="flex flex-col gap-2 mt-2">
            <h3 className="font-semibold">Academic Marks</h3>
            <div className="flex gap-2">
              <input type="number" placeholder="10th" value={marks.tenth} onChange={e=>setMarks({...marks, tenth:e.target.value})}
                className="p-2 border rounded w-1/3 dark:bg-gray-700 dark:border-gray-600"/>
              <input type="number" placeholder="11th" value={marks.eleventh} onChange={e=>setMarks({...marks, eleventh:e.target.value})}
                className="p-2 border rounded w-1/3 dark:bg-gray-700 dark:border-gray-600"/>
              <input type="number" placeholder="12th" value={marks.twelfth} onChange={e=>setMarks({...marks, twelfth:e.target.value})}
                className="p-2 border rounded w-1/3 dark:bg-gray-700 dark:border-gray-600"/>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Percentages → 10th: {percentages.tenth}%, 11th: {percentages.eleventh}%, 12th: {percentages.twelfth}%</p>
          </div>

          {/* ===== Marksheets Upload ===== */}
          <div className="flex flex-col gap-2 mt-4">
            <h3 className="font-semibold">Upload Marksheets</h3>
            {["tenth","eleventh","twelfth","sem1","sem2","sem3","sem4","sem5","sem6"].map((key) => (
              <input key={key} type="file" onChange={(e)=>handleFileChange(e,key)}
                className="p-2 border rounded focus:ring-2 focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600"/>
            ))}
          </div>
        </div>
      </div>

      {/* ================= Save Button ================= */}
      <div className="fixed bottom-4 md:bottom-8 w-full flex justify-center z-20">
        <button
          onClick={handleSave}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-colors duration-300"
        >
          Save Settings
        </button>
      </div>

      {/* ================= Save Message ================= */}
      {saveMessage && (
        <div className="fixed bottom-20 md:bottom-24 bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200 px-4 py-2 rounded-xl shadow-md z-30">
          {saveMessage}
        </div>
      )}

    </div>
  );
};

export default SettingsPage;
