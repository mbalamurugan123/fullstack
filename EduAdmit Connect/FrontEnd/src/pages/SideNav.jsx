import React from 'react';
import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import StudentProf from '../assets/images/student-prof.png'
import PageEndIcon from '@rsuite/icons/PageEnd';
import { Link } from 'react-router-dom';


class SideNav extends React.Component {
  render() {
    return (
      <div >
    <Sidenav defaultOpenKeys={['3', '4']} className='sideNav'>
      
      <Sidenav.Body style={{textAlign:'center',marginTop:'20%',color:'white'}}>
        <img src={StudentProf} style={{width: '70%',height:'70%',borderRadius:100}} />
        <Nav activeKey="1" style={{marginTop:'10%'}} >
          <Nav.Item eventKey="1"style={{paddingLeft:0,backgroundColor:'transparent'}}>
            <Link to={'/dashboard'}>

            Dashboard
            </Link>
          </Nav.Item>
          <Nav.Item eventKey="2"style={{paddingLeft:0,backgroundColor:'transparent'}}>
            Courses
          </Nav.Item>
          <Nav.Item eventKey="3"style={{paddingLeft:0,backgroundColor:'transparent'}}>
            Institute
          </Nav.Item>
          </Nav>
          <Nav style={{marginTop:"90%"}}>
          <Nav.Item eventKey="4"style={{paddingLeft:0,backgroundColor:'transparent'}} >
            Sign Out
          </Nav.Item>
          </Nav>
      </Sidenav.Body>
    </Sidenav>
  </div>
    );

  }
  
}

export default SideNav;
