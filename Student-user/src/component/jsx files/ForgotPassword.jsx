import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Send OTP function
  const sendOtp = () => {
    if (!phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }
    setError(""); // clear previous error
    console.log("Sending OTP to:", phone);
    setOtpSent(true);
  };

  // Verify OTP function
  const verifyOtp = () => {
    if (!otp.trim()) {
      alert("Please enter the OTP.");
      return;
    }

    console.log("Verifying OTP:", otp);
    // Simulate OTP verification success
    const otpIsValid = true;

    if (otpIsValid) {
      navigate("/dashboard"); // ✅ Redirect to Dashboard
    } else {
      alert("Invalid OTP, try again.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#021822] text-white">
      <div className="w-96 p-6 bg-[#081b29] rounded-lg shadow-lg">
        <h1 className="text-xl font-bold mb-4">Forgot Password</h1>

        {!otpSent ? (
          <>
            <input
              type="text"
              placeholder="Enter Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full mb-2 px-3 py-2 bg-transparent border-b border-cyan-400 focus:outline-none"
            />
            {/* Error Message */}
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

            <button
              onClick={sendOtp}
              className="w-full h-10 bg-cyan-500 hover:bg-cyan-600 rounded text-white font-semibold"
            >
              Get OTP
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full mb-4 px-3 py-2 bg-transparent border-b border-cyan-400 focus:outline-none"
            />
            <button
              onClick={verifyOtp}
              className="w-full h-10 bg-green-500 hover:bg-green-600 rounded text-white font-semibold"
            >
              Verify & Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
