import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate a successful login and redirect to profile
    navigate("/profile");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Login</h2>
      <form onSubmit={handleLogin} className="mt-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mt-2 p-2 border rounded"
        />
        <button type="submit" className="w-full mt-4 bg-blue-600 text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
