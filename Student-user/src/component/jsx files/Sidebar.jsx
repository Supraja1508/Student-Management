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
  const [isOpen, setIsOpen] = useState(false); // desktop hover expand
  const [mobileOpen, setMobileOpen] = useState(false); // mobile toggle
  const [activeItem, setActiveItem] = useState("Dashboard"); // active highlight

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
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white  pb-2 rounded focus:outline-none"
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
          {menuItems.map((item, index) => (
            <button
              key={index}
              type="button"
              disabled={item.disabled}
              onClick={() => setActiveItem(item.name)}
              className={`flex items-center gap-4 px-3 py-2 rounded-l-full transition-all duration-200 focus:outline-none
                ${
                  item.disabled
                    ? "opacity-50 cursor-not-allowed"
                    : activeItem === item.name
                    ? "bg-blue-500 text-white shadow-md"
                    : "hover:bg-amber-50 text-black hover:shadow-md"
                }`}
            >
              <item.icon size={22} />
              {(isOpen || mobileOpen) && (
                <span className="whitespace-nowrap text-sm font-medium">
                  {item.name}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Logout */}
        <div className="mb-6 px-3">
          <button
            type="button"
            className={`flex items-center gap-4 w-full px-3 py-2 rounded-l-full transition-all duration-200 focus:outline-none
              hover:bg-red-600 ${activeItem === "Logout" ? "bg-red-600 text-white shadow-md" : ""}`}
            onClick={() => setActiveItem("Logout")}
          >
            <FiLogOut size={22} />
            {(isOpen || mobileOpen) && <span className="text-sm font-medium">Logout</span>}
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
