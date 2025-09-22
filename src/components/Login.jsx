import React, { useState } from "react";
import '../assets/login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // validation function
  const validate = () => {
    let newErrors = {};

    if (!email) 
    {
      newErrors.email = "Email is required";
    } 
    else if (!/\S@\S+\.\S+/.test(email)) 
    {
      newErrors.email = "Enter a valid email";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) { 
      onLogin(); 
    }
  };

  return (
    <div className="loginContainer">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="inputGroup">
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="inputGroup">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <button type="submit" className="loginBtn">Hey! check the news 👉..</button>
      </form>
    </div>
  );
};

export default Login;
