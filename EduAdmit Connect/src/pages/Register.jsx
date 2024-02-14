import { useState } from 'react';
import { signUp } from '../services/Auth'; 
import '../assets/css/Login.css';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password === confirmPassword) {
        const response = await signUp({ name, email, mobileNumber, password });
        if (response.status === 202) {
          navigate('/login');
        }
      } else {
        setConfirmPasswordError("Your confirm password does not match");
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">UserName</label>
            <input type="text" id="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input type="text" id="mobileNumber" className="form-control" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select name="role" id="role" required>
              <option value="">Choose</option>
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            {confirmPasswordError && <p className="error-message" >{confirmPasswordError}</p>}
          </div>
          <button type="submit" className="btn-primary1">Register</button>
        </form>
      </div>
    </div>
  );
}
