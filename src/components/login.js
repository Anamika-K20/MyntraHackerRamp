import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for login authentication logic
    if (username === 'admin' && password === 'password') {
      // Successful login logic (redirect or set login state)
      alert('Login Successful!');
      navigate('/'); // Redirect to home page after successful login
    } else {
      setError('Invalid username or password.');
    }
  };

  const handleLoginWithGoogle = () => {
    // Placeholder for login with Gmail logic
    alert('Logging in with Google...');
    // Redirect to home page after successful login with Gmail
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-primary">Login</button>
        </form>
        <div className="google-login">
          <button className="btn-google" onClick={handleLoginWithGoogle}>
            Login with Gmail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
