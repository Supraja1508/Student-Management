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
import { NavLink } from "react-router-dom";  // 👈 use NavLink

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // desktop hover expand
  const [mobileOpen, setMobileOpen] = useState(false); // mobile toggle

  const menuItems = [
    { name: "Dashboard", icon: MdDashboard, path: "/dashboardlayout" },
    { name: "Attendance View", icon: FaClipboardCheck, path: "/dashboardlayout/attendance" },
    { name: "Timetable", icon: MdSchedule, path: "/dashboardlayout/timetable" },
    { name: "Result", icon: FaGraduationCap, path: "/dashboardlayout/result" },
    { name: "Materials", icon: MdLibraryBooks, path: "/dashboardlayout/materials" },
    { name: "Faculty", icon: FaUserTie, path: "/dashboardlayout/faculty" },
    { name: "Request Form", icon: AiOutlineFileText, path: "/dashboardlayout/request-form" },
    { name: "No Due", icon: MdBlock, disabled: true },
    { name: "Library Books", icon: FaBook, path: "/dashboardlayout/library" },
    { name: "Settings", icon: FiSettings, path: "/dashboardlayout/settings" },
  ];

  return (
    <>
      {/* Mobile burger toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white pb-2 rounded focus:outline-none"
        >
          <FiMenu size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-blue-700 via-blue-500 to-blue-900 text-white flex flex-col justify-between
          transition-all duration-300 ease-in-out
          rounded-tr-3xl rounded-br-3xl
          ${isOpen || mobileOpen ? "w-56" : "w-16"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          z-40
        `}
        onMouseEnter={() => !mobileOpen && setIsOpen(true)}
        onMouseLeave={() => !mobileOpen && setIsOpen(false)}
      >
        {/* Menu Items */}
        <div className="mt-16 flex flex-col space-y-2 px-1">
          {menuItems.map((item, index) =>
            item.disabled ? (
              <div
                key={index}
                className="flex items-center gap-4 px-3 py-2 rounded-l-full opacity-50 cursor-not-allowed"
              >
                <item.icon size={22} />
                {(isOpen || mobileOpen) && (
                  <span className="whitespace-nowrap text-sm font-medium">
                    {item.name}
                  </span>
                )}
              </div>
            ) : (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-3 py-2 rounded-l-full transition-all duration-200 focus:outline-none
                  ${
                    isActive
                      ? "bg-blue-500 text-white shadow-md"
                      : "hover:bg-amber-50 text-black hover:shadow-md"
                  }`
                }
                onClick={() => setMobileOpen(false)} // close sidebar on mobile
              >
                <item.icon size={22} />
                {(isOpen || mobileOpen) && (
                  <span className="whitespace-nowrap text-sm font-medium">
                    {item.name}
                  </span>
                )}
              </NavLink>
            )
          )}
        </div>

        {/* Logout */}
        <div className="mb-6 px-3">
          <button
            type="button"
            className="flex items-center gap-4 w-full px-3 py-2 rounded-l-full transition-all duration-200 focus:outline-none hover:bg-red-600"
            onClick={() => alert("Logout clicked!")}
          >
            <FiLogOut size={22} />
            {(isOpen || mobileOpen) && (
              <span className="text-sm font-medium">Logout</span>
            )}
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
