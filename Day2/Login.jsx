import { Link } from 'react-router-dom';
import '../assets/css/Login.css';
import { useNavigate } from "react-router-dom";
export default function Login(){
  const navigate=useNavigate();
  const handlesubmit=()=>{
    navigate('/home');
  }
  return(

    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handlesubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" className="form-control"  />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="form-control" />
          </div>
          <button type="submit" className="btn-primary1"><Link to={'/institute'} style={{color: 'whitesmoke'}}>Login</Link></button>
        </form>
        <p className="register-link1" id='reg-link'>Forget Password</p>
        <p className="register-link2">Create an account</p>
      </div>
    </div>

  );
}