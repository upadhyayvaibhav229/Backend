import React, { useState } from "react";
import Login from "./Pages/Login";
import RegistrationForm from "./Pages/RegisterationForm";


const Button = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      {showLogin ? <Login /> : <RegistrationForm />}
      <div className="flex justify-center p-3">
        <button
          onClick={() => setShowLogin(false)}
          className={`px-4 py-2 rounded-lg mx-2 ${
            !showLogin ? "bg-yellow-400 text-black" : "bg-gray-700 text-white"
          }`}
        >
          Register
        </button>
        <button
          onClick={() => setShowLogin(true)}
          className={`px-4 py-2 rounded-lg mx-2 ${
            showLogin ? "bg-yellow-400 text-black" : "bg-gray-700 text-white"
          }`}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Button;
