import { Nav, Navbar } from "rsuite";

import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import 'rsuite/dist/rsuite.min.css';
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  return (
  <Navbar>
    <Navbar.Brand href="#">RSUITE</Navbar.Brand>
    <Nav>
      <Nav.Item icon={<HomeIcon />}>Home</Nav.Item>
      <Nav.Item><Link to={'/about'}>about</Link></Nav.Item>
      <Nav.Item>Products</Nav.Item>
      <Nav.Item><Link to={'/login'}>Log in</Link></Nav.Item>
      <Nav.Menu title="About">
        <Nav.Item>Company</Nav.Item>
        <Nav.Item>Team</Nav.Item>
        <Nav.Menu title="Contact">
          <Nav.Item>Via email</Nav.Item>
          <Nav.Item></Nav.Item>
        </Nav.Menu>
      </Nav.Menu>
    </Nav>
    <Nav pullRight>
      <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
    </Nav>
  </Navbar>
);
  }
export default CustomNavbar;