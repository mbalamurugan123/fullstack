import { Nav, Navbar } from "rsuite";

import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import 'rsuite/dist/rsuite.min.css';
import { Link } from "react-router-dom";
import SideNav from "./SideNav";
import { ImShare } from "react-icons/im";
import { Button } from "react-bootstrap";
const CustomNavbar = () => {
  const handleClick = () => {
    Navigate("/home");
    window.scrollTo({ left: 0, top: 700, behavior:"smooth" })
    };
  return ( 

     
  <Navbar id="navStyle">
    {/* <Nav style={{marginTop:20,marginLeft:30,color:'white'}}><SideNav/></Nav> */}
    <Navbar.Brand href="#" style={{paddingTop:25,fontSize: 'x-large',fontWeight: "bold",color:'white'}}>EduAdmit Connect</Navbar.Brand>
    <Nav style={{padding:5,paddingTop:15,fontSize:'larger',textDecoration:'none'}}pullRight>

      <Nav.Item style={mynavstyle} className="navhover"><Link to={'/home'} style={textcss} >Home</Link></Nav.Item>
      <Nav.Item style={mynavstyle}><Link to={'/editProfile'} style={textcss} className="navhover">Student</Link></Nav.Item>
      <Nav.Item style={mynavstyle}><Link to={'/home'}  style={textcss} className="navhover">Institutes</Link></Nav.Item>
      <Nav.Item style={mynavstyle}><Link to={'/dashboard'} style={textcss} className="navhover">Dashboard</Link></Nav.Item>
      <Nav.Item style={mynavstyle} ><Link to={'/login'} style={textcss} className="navhover">Logout</Link></Nav.Item>
    </Nav>
  </Navbar>

);
}
const mynavstyle={
  paddingRight:40,
  paddingLeft:40,
  boderRadius:20
}
const textcss={
  color:"white",
  textDecoration:'none'
}

export default CustomNavbar;