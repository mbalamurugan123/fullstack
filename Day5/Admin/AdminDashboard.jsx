import React from 'react';
import '../assets/css/AdminDashboard.css'
import whatsapp from '../assets/images/whatsapp.svg';
import instagram from '../assets/images/instagram.svg';
import facebook from '../assets/images/facebook.svg'
import twitter from '../assets/images/twitter.svg'
import telegram from '../assets/images/telegram.svg'
import Navbar from '../pages/Navbar';
import Chart from 'react-apexcharts'
import StudentProf from '../assets/images/student-prof.png'
import { Panel, Placeholder, Row, Col } from 'rsuite';



import  { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import LineChart from '../components/LineChart';
import Notify from '../components/Notify';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
// import axios from 'axios';


class AdminDashBoard extends Component{
  render(){
 
  // document.getElementById('mySidenav').style.width = '240px';
   
    
    return(
      <div>
      <Navbar/>
      <div className='body-card'>
        <h3 className='class-text' style={{padding:30}}>Dashboard</h3>
        <div className='body-upper-part'>
        <Row style={{marginLeft:70}}>
    <Col md={5} sm={10} style={{marginRight:30}}>
    <Panel bordered header="Total User">
   <h3>7048</h3>
  </Panel>
    </Col>
    <Col md={5} sm={10} style={{marginRight:30}}>
    <Panel bordered header="Students Registered">
   <h3>6204</h3>
  </Panel>
    </Col>
    <Col md={5} sm={10} style={{marginRight:30}}>
    <Panel bordered header="Number of Courses enrolled">
   <h3>5100</h3>
  </Panel>
    </Col>
    <Col md={5} sm={10} style={{marginRight:30}}>
    <Panel bordered header="Live">
   <h3>644</h3>
  </Panel>
    </Col>
  </Row>
        </div>
        <div>
	<div style={{width:'100%'}}>
    <LineChart/>
    <Notify/>
  </div>
      
		
   
    </div>
    <div className='body-lower-part'>
    
      </div>
      </div>
</div>

);
}
}
export default AdminDashBoard