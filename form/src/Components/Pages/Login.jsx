import React, { useState } from "react";
import axios from "axios";
const Login = () => {
    const api = "https://api-server-o2u1.onrender.com/user";
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoggedIn) return;
    try {
      const { data: users } = await axios.get(api);
      const user = users.find(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );
      if (user) {
        setIsLoggedIn(true);
        alert(`Welcome, ${user.firstName} ${user.lastName}! Login Successful`);
      } else {
        alert("Invalid email or password.");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
    setFormData({ email: "", password: "" });
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-5">
      <div className="bg-gray-800 text-white p-8 rounded-xl shadow-lg w-96 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit} target="_blank">
          {/* Email */}
          <div className="flex flex-col">
            <label className="font-semibold">Email:</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              className="mt-1 px-3 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Password */}
          <div className="mt-5 flex flex-col">
            <label className="font-semibold">Password:</label>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              className="mt-1 px-3 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full bg-yellow-400 text-black font-bold px-5 py-2 rounded-lg hover:bg-yellow-500 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
