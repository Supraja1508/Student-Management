import { FiBell, FiMoreVertical, FiMenu } from "react-icons/fi";


const Navbar = ({ showBack, onBack }) => {
  return (
    
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-600 shadow-lg flex justify-between items-center px-20 md:px-6 py-2 z-40">
      {/* Left: Burger menu + Logo */}
      <div className="flex items-center gap-x-3">

        {/* Logo / Portal Name */}
        <h1 className="text-white text-xl font-bold tracking-wider drop-shadow-md">
          College Portal
        </h1>
      </div>

      {/* Right: Actions */}
      <div className="flex  items-center gap-x-3">
        {/* Language Selector */}
        <select className="border rounded-2xl border-white bg-white/20 text-black  px-2 py-1 text-l backdrop-blur-sm">
          <option>English</option>
          <option>Tamil</option>
          <option>Hindi</option>
        </select>

        {/* Notification */}
        <button className="relative text-white p-2 rounded hover:bg-white/20 transition">
          <FiBell size={22} />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
        </button>

        {/* More */}
        <button className="text-white p-2 rounded hover:bg-white/20 transition">
          <FiMoreVertical size={22} />
        </button>

        {/* Profile */}
        <img
          src=""
          alt="profile"
          className="h-10 w-10 rounded-full object-cover border-2 border-white shadow-md mr-1"
        />
      </div>
    </nav>
  );
};

export default Navbar;
