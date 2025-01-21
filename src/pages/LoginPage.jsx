
import React from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = ({ onLogin }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-primary mb-6">
          Login to Dashboard
        </h1>
        <LoginForm onLogin={onLogin} />
      </div>
    </div>
  );
};

export default LoginPage;
