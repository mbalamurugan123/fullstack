import React from 'react';
import '../assets/css/DashBoard.css'
import whatsapp from '../assets/images/whatsapp.svg';
import instagram from '../assets/images/instagram.svg';
import facebook from '../assets/images/facebook.svg'
import twitter from '../assets/images/twitter.svg'
import telegram from '../assets/images/telegram.svg'
import Navbar from './Navbar';
import Chart from 'react-apexcharts'
import StudentProf from '../assets/images/student-prof.png'
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';

// import axios from 'axios';
function DashBoard(){
  const [users, setUsers] = useState([]);

  const options={
  chart: {
    id: 'apexchart-example'
  },
  xaxis: {
    categories: ['January', 'February', 'March', 'April', 'May', 'June']
  },
  colors: ['#FB8833', '#17A8F5']
}

const series = [
  {
    name: 'Developnment',
    data: [21, 35, 75, 51, 41, 47]
  },
  {
    name: 'Active',
    data: [41, 79, 57, 47, 63, 71]
  }
]

  // const user=useSelector(state => state.user.value)?
  const card=[
    {
      title: 'Machine Learning',
      tutor: 'Arya',
      time: '23/07/2023'
    },
    {
      title: 'Data Structures',
      tutor: 'Sam',
      time: '18/07/2023'
    },
    {
      title: 'Java Script',
      tutor: 'Balaji',
      time: '18/07/2023'
    }
  ];
  return(
    <div>
      <Navbar/>
      <div className='body-card'>
        <div className='body-upper-part'>

      <div className="dash-card">
        <img src={StudentProf} style={{width: '100%'}} />
        <p className="title">B.Tech - Artifical Intelligence and Data Science</p>
        <p>Krishna College</p>
        <a className='dash-ico'><img src={whatsapp}></img> </a>
        <a className='dash-ico'><img src={instagram}></img> </a>
        <a className='dash-ico'><img src={facebook}></img></a>
        <a className='dash-ico'><img src={twitter}></img> </a>
        <p><Link to={'/editProfile'}><button className='con-but'>Edit Profile</button></Link></p>
      </div>
    <div className='mini-card'>
      <h3 className='class-text'>Dashboard</h3>
      <div className='card1'>
      <div className='h4'>
        
        <h4>Unleash Your Potential: EduAdmit ConnectS Admissions, Where Aspirations Soar!</h4>
      </div>
     
      </div>
      
    </div>
    <div className='part1'>
        <h3>Notifications</h3>
        <div className='card3'>
          {card.map((cardvar,index)=>(
            <div className='sub-card3' key={index}>

            <div className='sh-class-name'>
              <h4>{cardvar.tutor}</h4> <p> posted a new assignment on {cardvar.title}</p>
            <div className='sh-time'>
              <h5>Due date :</h5>
              <p>{cardvar.time}</p>
            </div>
            </div>
            </div>
          )
          )}

        </div>
      </div>
    </div>
    <div className='body-lower-part'>
      <div className='card2'>
        <h4>Edit Profile</h4>
      </div>
     
    <div className='card2'>
        <h4>View Institute</h4>
      </div>
      <div className='card2'>
        <h4>View Courses</h4>
      </div>
      <div className='card2'>
        <h4>Make Payments</h4>
      </div>
      <div className='card2'>
        <h4>Check Admission Details</h4>
      </div>
      <div className='card2'>
        <h4>History</h4>
      </div>
    </div>
</div>
</div>
  );
}
export default DashBoard