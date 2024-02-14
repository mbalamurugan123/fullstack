import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/Login.css';
import { signIn } from '../services/Auth'; // Import signIn function from API file

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();
  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setLoading(true); // Set loading state to true while awaiting response

    try {
      // Call signIn function from API with email and password data
      const response = await signIn({ email, password });
      const token = response.data.token;
      const user = response.data.userResponse;
      const name=response.data.name;
      localStorage.setItem('jwtToken', token);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('username', email);

      navigate('/home');
    } catch (error) {
      console.error("Error: ", error);
      alert("Password is Incorrect");
    }

    setLoading(false); // Reset loading state after response is received
    setEmailError('');
    // Clear form fields after submission
    setEmail('');
    setPassword('');
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn-primary1" disabled={loading}> {/* Disable button during loading */}
            {loading ? 'Loading...' : 'Login'}
          </button>
        </form>
        <p className="register-link1" id='reg-link'>Forget Password</p>
        <Link to={'/register'}><p className="register-link2" style={{ color: 'black' }}>Create an account</p></Link>
      </div>
    </div>
  );
}
