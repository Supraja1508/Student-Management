import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name:", name, "Password:", password);

    navigate("/dashboardLayout");
  };

  return (
    <div className="min-h-screen w-full font-serif flex justify-center items-center bg-[#021822] px-4">
      <div className="relative bg-transparent w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl h-auto mt-10 border border-cyan-400 shadow-[0_0_20px_cyan] overflow-hidden rounded-xl">
        
        {/* Gradient background */}
        <span className="absolute top-0 right-0 w-[300px] sm:w-[500px] md:w-[700px] lg:w-[850px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] 
          bg-gradient-to-tr from-[#081b29] to-[#0ef] 
          rotate-6 skew-y-12 origin-bottom-right border-b-[3px]"></span>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="relative z-10 w-full sm:w-1/2 h-full p-6 sm:p-10 flex flex-col justify-center"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6">
            Login
          </h1>

          {/* Username */}
          <div className="relative w-full mb-6">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder=" "
              className="peer bg-transparent w-full border-b border-gray-400 text-white font-medium focus:outline-none focus:border-cyan-400"
            />
            <label
              className="absolute left-0 top-2 text-gray-300 transition-all duration-300 ease-in-out 
                peer-placeholder-shown:-top-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                peer-focus:-top-4 peer-focus:text-sm peer-focus:text-cyan-300
                peer-valid:-top-4 peer-valid:text-sm peer-valid:text-cyan-300"
            >
              Username
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
            <label
              className="absolute left-0 top-2 text-gray-300 transition-all duration-300 ease-in-out 
                peer-placeholder-shown:-top-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                peer-focus:-top-4 peer-focus:text-sm peer-focus:text-cyan-300
                peer-valid:-top-4 peer-valid:text-sm peer-valid:text-cyan-300"
            >
              Password
            </label>
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-6">
            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="text-cyan-400 text-sm hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <div className="mt-4">
            <button
              type="submit"
              className="relative w-full h-10 sm:h-12 rounded-full font-bold text-white cursor-pointer outline-none 
                bg-gradient-to-r from-[#081b29] via-[#0ef] to-[#081b29] 
                hover:from-[#0ef] hover:via-[#081b29] hover:to-[#0ef] 
                transition-all duration-500"
            >
              Login
            </button>
          </div>

          {/* Signup Redirect */}
          <div
            onClick={() => navigate("/signup")}
            className="text-white text-center mt-5 text-sm sm:text-base"
          >
            <p>
              Don’t have an account?
              <a href="#" className="text-cyan-400 ml-2 font-semibold hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </form>

        {/* Welcome Message */}
        <div className="hidden sm:flex absolute top-0 right-0 h-full flex-col justify-center text-right p-6 sm:p-10 md:p-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-amber-50 leading-[1.3] uppercase pr-3">
            Welcome Back!
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-amber-50 pr-3">
            Log in to access<br /> your student portal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
