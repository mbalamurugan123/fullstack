import { Link } from 'react-router-dom';
import '../assets/css/Login.css';
export default function Register(){
  return(

    <div className="login-container">
      <div className="login-form">
        <h2>Register</h2>
        <form >
          <div className="form-group">
            <label htmlFor="email">UserName</label>
            <input type="text" id="email" className="form-control"  />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" className="form-control"  />
          </div>
          <div className="form-group">
            <label htmlFor="email">Mobile Number</label>
            <input type="text" id="email" className="form-control"  />
          </div>
          <div className="form-group">
          <label for="role">Role </label>
          <select name="role" id="role">
          <option>Choose</option>
            <option>Student</option>
            <option >Teacher</option>
          </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Conform Password</label>
            <input type="password" id="password" className="form-control" />
          </div>
          <button type="submit" className="btn-primary1"><Link to={'/home'}>Register</Link></button>
        </form>
        
      </div>
    </div>

  );
}