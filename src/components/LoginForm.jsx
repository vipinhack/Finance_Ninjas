import React, { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-sm mx-auto p-6 bg-white shadow-lg rounded-lg"
    >
      <label className="flex flex-col">
        <span className="text-lg font-semibold text-gray-700">Username:</span>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </label>
      <label className="flex flex-col">
        <span className="text-lg font-semibold text-gray-700">Password:</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </label>
      <button
        type="submit"
        className="bg-primary text-white py-2 px-4 rounded-md hover:bg-green-600"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
