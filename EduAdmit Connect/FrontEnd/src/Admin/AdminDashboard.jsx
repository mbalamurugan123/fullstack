import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Panel, Row, Col } from 'rsuite';
import Navbar from '../pages/Navbar';
import LineChart from '../components/LineChart';
import Notify from '../components/Notify';
import '../assets/css/AdminDashboard.css';
import CustomNavbar from '../pages/Navbar';
import SideNav from '../pages/SideNav';
import { Sidenav, Nav } from 'rsuite';
import StudentProf from '../assets/images/student-prof.png'
import { Link } from 'react-router-dom';

function AdminDashBoard() {
  // Motion values for each number
  const count1 = useMotionValue(0);
  const count2 = useMotionValue(0);
  const count3 = useMotionValue(0);
  const count4 = useMotionValue(0);

  // Transformed values for each number
  const rounded1 = useTransform(count1, Math.round);
  const rounded2 = useTransform(count2, Math.round);
  const rounded3 = useTransform(count3, Math.round);
  const rounded4 = useTransform(count4, Math.round);

  useEffect(() => {
    // Animations for each number
    animate(count1, 7048, { duration: 1 });
    animate(count2, 6204, { duration: 1 });
    animate(count3, 5100, { duration: 1 });
    animate(count4, 644, { duration: 1 });
  }, []);

  return (
    <div>
      <div className='dash-sideNav'>
        <h4 style={{marginTop:20}}>EduAdmit Connect</h4>
        <div >
    <Sidenav defaultOpenKeys={['3', '4']} className='sideNav'>
      
      <Sidenav.Body style={{textAlign:'center',marginTop:'20%',color:'white'}}>
        <img src={StudentProf} style={{width: '70%',height:'70%',borderRadius:100}} />
        <br/>
        <label style={{fontWeight:'bolder',fontSize:30}}>Admin</label>
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
      </div>
      <div className='admin-body-card'>
      <div>

      <nav class="navbar bg-body-tertiary" style={{backgroundColor:'aliceblue',paddingTop:20,paddingBottom:20}}>
  <div class="container-fluid">
    <label style={{fontWeight:'bold',fontSize:30}}>
      Dashboard
    </label>
    <form class="d-flex" role="search" >
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
      </div>
        <div className='body-upper-part'>
          <Row style={{ marginLeft: 70 }}>
            <Col md={5} sm={10} style={{ marginRight: 30 }}>
              <Panel bordered header="Total User">
                <h3>
                  <motion.h1>{rounded1}</motion.h1>
                </h3>
              </Panel>
            </Col>
            <Col md={5} sm={10} style={{ marginRight: 30 }}>
              <Panel bordered header="Students Registered">
                <h3>
                  <motion.h1>{rounded2}</motion.h1>
                </h3>
              </Panel>
            </Col>
            <Col md={5} sm={10} style={{ marginRight: 30 }}>
              <Panel bordered header="Number of enroll">
                <h3>
                  <motion.h1>{rounded3}</motion.h1>
                </h3>
              </Panel>
            </Col>
            <Col md={5} sm={10} style={{ marginRight: 30 }}>
              <Panel bordered header="Live">
                <h3>
                  <motion.h1>{rounded4}</motion.h1>
                </h3>
              </Panel>
            </Col>
          </Row>
        </div>
        <div>
          <div style={{ width: '100%' }}>
            <LineChart />
            <Notify />
          </div>
        </div>
        <div className='body-lower-part'></div>
      </div>
    </div>
  );
}

export default AdminDashBoard;
