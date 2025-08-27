import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [slide, setSlide] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name, "Email:", email, "Password:", password);
  };

  const handleLoginClick = () => {
    setSlide(true);
    setTimeout(() => navigate("/"), 700);
  };

  const handleForgotClick = () => {
    setSlide(true);
    setTimeout(() => navigate("/forgot-password"), 700);
  };

  return (
    <div className="min-h-screen w-full font-serif flex justify-center items-center bg-[#021822] overflow-hidden px-4">
      <div
        className={`relative bg-transparent w-full max-w-lg md:max-w-4xl h-auto mt-10 md:mt-24 p-6 md:p-8 border border-cyan-400 shadow-[0_0_20px_cyan] overflow-hidden transform transition-transform duration-700 ease-in-out ${
          slide ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
        }`}
      >
        {/* Gradient background */}
        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-cyan-500 to-cyan-950 transform skew-x-10 -skew-y-35 scale-145 origin-bottom-left"></span>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="relative z-10 flex flex-col justify-center w-full md:w-1/2 p-4 md:p-6"
        >
          <h1 className="text-xl md:text-2xl font-bold text-center text-white mb-6">
            Sign Up
          </h1>

          {/* Name */}
          <div className="relative w-full mb-6 md:mb-8">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder=" "
              className="peer bg-transparent w-full border-b border-gray-400 text-white font-medium focus:outline-none focus:border-cyan-400"
            />
            <label className="absolute left-0 top-2 text-gray-300 transition-all duration-300 ease-in-out 
                       peer-placeholder-shown:-top-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                       peer-focus:-top-4 peer-focus:text-sm peer-focus:text-cyan-300
                       peer-valid:-top-4 peer-valid:text-sm peer-valid:text-cyan-300">
              Full Name
            </label>
          </div>

          {/* Email */}
          <div className="relative w-full mb-6 md:mb-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder=" "
              className="peer bg-transparent w-full border-b border-gray-400 text-white font-medium focus:outline-none focus:border-cyan-400"
            />
            <label className="absolute left-0 top-2 text-gray-300 transition-all duration-300 ease-in-out 
                       peer-placeholder-shown:-top-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                       peer-focus:-top-4 peer-focus:text-sm peer-focus:text-cyan-300
                       peer-valid:-top-4 peer-valid:text-sm peer-valid:text-cyan-300">
              Email
            </label>
          </div>

          {/* Password */}
          <div className="relative w-full mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder=" "
              className="peer bg-transparent w-full border-b border-gray-400 text-white font-medium focus:outline-none focus:border-cyan-400"
            />
            <label className="absolute left-0 top-2 text-gray-300 transition-all duration-300 ease-in-out 
                       peer-placeholder-shown:-top-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                       peer-focus:-top-4 peer-focus:text-sm peer-focus:text-cyan-300
                       peer-valid:-top-4 peer-valid:text-sm peer-valid:text-cyan-300">
              Password
            </label>
          </div>

          {/* Buttons */}
          <div className="mt-6">
            <button
              type="submit"
              className="relative w-full h-9 rounded-full font-bold text-white cursor-pointer outline-none bg-gradient-to-r from-[#081b29] via-[#0ef] to-[#081b29] hover:from-[#0ef] hover:via-[#081b29] hover:to-[#0ef] transition-all duration-500"
            >
              Sign Up
            </button>

            <button
              type="button"
              onClick={handleForgotClick}
              className="mt-4 text-cyan-400 hover:underline text-sm w-full text-center"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login redirect */}
          <div
            onClick={handleLoginClick}
            className="text-white text-center mt-5 text-sm cursor-pointer"
          >
            <p>
              Already have an account?
              <span className="text-cyan-400 ml-2 font-semibold hover:underline">
                Login
              </span>
            </p>
          </div>
        </form>

        {/* Welcome message */}
        <div className="hidden md:flex absolute top-0 right-0 md:left-1/2 h-full flex-col justify-center text-right p-6 lg:p-10 z-0">
          <h2 className="text-xl md:text-2xl text-left text-amber-50 leading-[1.3] uppercase">
            Join Us!
          </h2>
          <p className="text-sm md:text-base text-amber-50 mt-2">
            Create your account and<br /> start your journey today
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
