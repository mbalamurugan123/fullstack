import React from 'react';
import '../assets/css/SideNav.css';
import About from './About';
import { Link } from 'react-router-dom';

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.x = 0;
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";

  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";

  }

  sidebtn = () => {
    if (this.x === 0) {
      this.openNav();
      this.x++;
    } else {
      this.closeNav();
      this.x = 0;
    }
  };

  render() {
    return (
      <div>
        <div id="mySidenav" className="sidenav">
          <div className='side-btn'><Link to='/About'>About</Link> </div>
          <div className='side-btn'><Link to='/main'>Assignments</Link></div>
          <div className='side-btn'><Link to='/main'>Certification</Link></div>
          <div className='side-btn'><Link to='/class'>Virtual Classroom</Link></div>
          <div className='side-btn'><Link to='/main'>Drives</Link></div>
          <div className='side-btn'><Link to='/dash'>Dashboard</Link></div>
        </div>
        <span className='span' onClick={this.sidebtn}>
          &#9776;
        </span>
      </div>
    );
  }
}

export default SideNav;
