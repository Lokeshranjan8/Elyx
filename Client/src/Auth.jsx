import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Button from "@mui/material/Button";

function Auth({ onClose, setSuccessMessage, setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [issignup, setissignup] = useState(false);
  const [error, setError] = useState("");

  const validate = () => {
    if (!email) return "Email is required.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return "Enter a valid email.";
    if (!password) return "Password is required.";
    if (password.length < 6) return "Password must be at least 6 characters.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");
    const BaseUrl ="http://localhost:3000";
    const url = issignup ? `${BaseUrl}/auth/signup` : `${BaseUrl}/auth/login`;
    const passeddata = { email, password };
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(passeddata),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Something went wrong");
        return;
      }
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("userEmail", email);
      setSuccessMessage(data.message || (issignup ? "Signup successful!" : "Login successful!"));
      if (!issignup) setIsLoggedIn(1);
  setTimeout(() => setSuccessMessage("") , 2000);
      onClose();
      setEmail("");
      setPassword("");
    } catch (err) {
      setError("Error: " + err.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-2xl p-6 sm:p-8 relative border border-gray-700">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 "
          onClick={onClose}
          aria-label="Close"
        >
          <CloseIcon />
        </button>
  <h2 className="text-center text-xl sm:text-2xl font-bold text-gray-100 mb-6">
          {issignup ? "Create Account 🚀" : "Welcome Back 👋"}
        </h2>
        <form method="post" className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
          <div className="flex items-center border-2 border-gray-700 rounded-xl px-3 sm:px-4 py-3 bg-gray-900/60 backdrop-blur-sm focus-within:border-gray-400 focus-within:ring-2 focus-within:ring-gray-400/20 transition-all duration-300">
            <label htmlFor="email" className="sr-only">Email</label>
            <EmailIcon className="text-gray-100 mr-2 text-xl sm:text-2xl" />
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              placeholder={!issignup ? "Enter your registered Email" : "Email"}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full focus:outline-none text-white bg-transparent placeholder-gray-400 font-medium text-sm sm:text-base"
              autoComplete="email"
              required
            />
          </div>
          <div className="flex items-center border-2 border-gray-700 rounded-xl px-3 sm:px-4 py-3 bg-gray-900/60 backdrop-blur-sm focus-within:border-gray-400 focus-within:ring-2 focus-within:ring-gray-400/20 transition-all duration-300">
            <label htmlFor="password" className="sr-only">Password</label>
            <LockOpenIcon className="text-gray-400 mr-2 text-xl sm:text-2xl" />
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              placeholder={!issignup ? "Enter your registered Password" : "Password"}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full focus:outline-none text-white bg-transparent placeholder-gray-400 font-medium text-sm sm:text-base"
              autoComplete="current-password"
              required
            />
          </div>
          {error && (
            <div className="text-red-400 text-sm text-center font-semibold">{error}</div>
          )}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gray-700 to-gray-900 text-gray-100 py-3 rounded-xl text-sm sm:text-base font-bold hover:from-gray-800 hover:to-gray-950 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gray-900/25"
          >
            ✨ {issignup ? "Create Account" : "Sign In"}
          </button>
        </form>
  <p className="text-center text-xs sm:text-sm text-gray-400 mt-4">
          {issignup ? "Already have an account?" : "Don't have an account?"}
          <Button className="text-cyan-600 hover:underline ml-1" onClick={() => setissignup(!issignup)}>
            {issignup ? "Login" : "Signup"}
          </Button>
        </p>
      </div>
    </div>
  );
}

export default Auth;
