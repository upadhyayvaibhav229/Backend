import React, { useState } from "react";
import axios from "axios"; // ✅ Import axios

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
    gender: "",
    maritalStatus: false,
  });
  const [isSubmited, setIsSubmited] = useState(false);

  const api = "https://api-server-o2u1.onrender.com/user";

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    let newValue = value;

    if (name === "maritalStatus") {
      newValue = value === "true";
    }

    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmited) return;

    setIsSubmited(true);
    try {
      const { data: users } = await axios.get(api);
      const emailExists = users.some((user) => user.email === formData.email);

      if (emailExists) {
        alert("Email already exists");
        setIsSubmited(false);
        return;
      }

      // Corrected: Post new user data
      const response = await axios.post(api, formData);
      console.log("User registered:", response.data);
      alert("User Registered Successfully");

     

    } catch (error) {
      console.error("Failed to register user", error);
    }

    setIsSubmited(false);
     // Reset form after successful submission
     setFormData({
      firstName: "",
      middleName: "",
      lastName: "",
      dob: "",
      email: "",
      password: "",
      gender: "",
      maritalStatus: false,
    });
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-5">
      <div className="bg-gray-800 text-white p-8 rounded-xl shadow-lg w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6">
          User Registration Form
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {["firstName", "middleName", "lastName"].map((name, index) => (
              <div key={index} className="flex flex-col">
                <label className="font-semibold">
                  {name.replace(/([A-Z])/g, " $1")}:
                </label>
                <input
                  type="text"
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="mt-1 px-3 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            ))}
          </div>

          {/* Date of Birth */}
          <div className="mt-5">
            <label className="font-semibold">Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={formData.dob} // ✅ Correct state reference
              onChange={handleChange}
              className="mt-1 px-3 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
            />
          </div>

          {/* Email and Password */}
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label className="font-semibold">Email:</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 px-3 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold">Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 px-3 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>

          {/* Gender Selection */}
          <div className="mt-5">
            <label className="font-semibold">Gender:</label>
            <div className="flex space-x-5 mt-2">
              {["Male", "Female", "Other"].map((gender, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    checked={formData.gender === gender}
                    onChange={handleChange}
                    className="w-4 h-4 accent-yellow-400"
                  />
                  <span>{gender}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Marital Status Selection */}
          <div className="mt-5">
            <label className="font-semibold">Marital Status:</label>
            <div className="flex space-x-5 mt-2">
              {[
                { label: "Single", value: false },
                { label: "Married", value: false },
              ].map((status, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="maritalStatus"
                    value={status.value}
                    checked={formData.maritalStatus === status.value}
                    onChange={handleChange}
                    className="w-4 h-4 accent-yellow-400"
                  />
                  <span>{status.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full bg-yellow-400 text-black font-bold px-5 py-2 rounded-lg hover:bg-yellow-500 transition"
          >
            {isSubmited ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
