import React from 'react';
import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import StudentProf from '../assets/images/student-prof.png'
import PageEndIcon from '@rsuite/icons/PageEnd';
import { Link } from 'react-router-dom';
const panelStyles = {
  padding: '15px 20px',
  color: '#aaa',
};

const headerStyles = {
  padding: 20,
  fontSize: 16,
  background: '#34c3ff',
  color: '#fff',
};

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.x = 0;
  }

  openNav() {
    document.getElementById('mySidenav').style.width = '240px';
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
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
      <>
        <span className="span" style={{fontSize:25}} onClick={this.sidebtn} >
          &#9776;
        </span>
        <div
          className="mySidenav"
          id="mySidenav"
          style={{
            width: 0,
            position: 'fixed',
            zIndex: 1,
            left: 0,
            overflowX: 'hidden',
            paddingTop: 25,
            transition: '0.2s',
            textAlign: 'center',
          }}
        >
          <Sidenav defaultOpenKeys={['3', '4']} className='navstyle'>
            <Sidenav.Header>
            <img src={StudentProf} style={{width: '70%',borderRadius: 100}} />
            </Sidenav.Header>
            <Sidenav.Body>
              <Nav style={{color:'white',marginTop:20}}>
                <Nav.Item eventKey="1" active icon={<DashboardIcon />} style={{width:'100%'}}>
                  <Link to={'/dashboard'}>

                  Dashboard
                  </Link>
                </Nav.Item>
                <Nav.Item eventKey="2" icon={<GroupIcon />}style={{width:'100%'}}>
                  User Group
                </Nav.Item>
                <Nav.Menu eventKey="3" title="Advanced" icon={<MagicIcon />}>
                  <Nav.Item divider />
                  <Nav.Item eventKey="2"style={{width:'100%'}}>
                  Instutites
                </Nav.Item>
                <Nav.Item eventKey="2" style={{width:'100%'}}>
                  Payment Status
                </Nav.Item>
                </Nav.Menu>
              </Nav>
            </Sidenav.Body>
            <Nav.Item eventKey="2" icon={<PageEndIcon/>} style={{float:'right',position:'absolute',bottom:0,width:'100%'}}>
                Sign Out
            </Nav.Item>
          </Sidenav>
        </div>
      </>
    );

  }
  
}

export default SideNav;
