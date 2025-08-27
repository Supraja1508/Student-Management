import React, { useState } from "react";
import {
  MdDashboard,
  MdSchedule,
  MdBlock,
  MdLibraryBooks,
} from "react-icons/md";
import {
  FaClipboardCheck,
  FaGraduationCap,
  FaUserTie,
  FaBook,
} from "react-icons/fa";
import { AiOutlineFileText } from "react-icons/ai";
import { FiSettings, FiLogOut, FiMenu } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false); // for mobile toggle

  const menuItems = [
    { name: "Dashboard", icon: MdDashboard },
    { name: "Attendance", icon: FaClipboardCheck },
    { name: "Timetable", icon: MdSchedule },
    { name: "Result", icon: FaGraduationCap },
    { name: "Materials", icon: MdLibraryBooks },
    { name: "Faculty", icon: FaUserTie },
    { name: "Request Form", icon: AiOutlineFileText },
    { name: "No Due", icon: MdBlock, disabled: true },
    { name: "Library Books", icon: FaBook },
    { name: "Settings", icon: FiSettings },
  ];

  return (
    <>
      {/* Mobile burger toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white bg-gray-800 p-2 rounded shadow"
        >
          <FiMenu size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white flex flex-col justify-between transition-all duration-300
          ${isOpen ? "w-52" : "w-16"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          z-40
        `}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Menu Items */}
        <div className="mt-16 flex flex-col space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              disabled={item.disabled}
              className={`flex items-center gap-4 px-3 py-2 hover:bg-gray-700 transition rounded ${
                item.disabled ? "opacity-40 cursor-not-allowed" : ""
              }`}
            >
              <item.icon size={24} />
              {isOpen && <span className="whitespace-nowrap">{item.name}</span>}
            </button>
          ))}
        </div>

        {/* Logout */}
        <div className="mb-6 px-3">
          <button className="flex items-center gap-4 w-full hover:bg-gray-700 px-3 py-2 rounded">
            <FiLogOut size={24} />
            {isOpen && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
