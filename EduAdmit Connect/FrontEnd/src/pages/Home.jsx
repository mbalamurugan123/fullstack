import S3Uploader from '../components/S3Uploader.jsx';
import CustomNavbar from './Navbar.jsx';
import SideNav from './SideNav.jsx';
import { Nav, Navbar } from "rsuite";
import '../assets/css/home.css'
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import Institute from './Institute.jsx';
import Footer from '../components/Footer.jsx';

function Home(){
  const Navigate=useNavigate();

  const text1 = "Unlock Your Future, Enroll Today".split(" ");
  const text2 = "Your Journey Begins Here!".split(" ");


  const handleClick = () => {
  Navigate("/home");
  window.scrollTo({ left: 0, top: 700, behavior:"smooth" })
  };
  return(
    <div style={{width:'100%'}}>
    <div>
    <CustomNavbar/>
    </div>
    {/* <div style={{marginTop:81,color:'white',width:'20%',float:'left',position:'fixed'}}><SideNav/>
    </div> */}
    <div className='html-home'>
      <div style={{  backgroundColor: '#ede8e8',paddingTop:'10px',paddingBottom:'40px'}}>
    {/* <S3Uploader/> */}
    <div className='container' style={{marginTop:300,textAlign:'center',justifyContent:'center'}}>
    
    <div style={{fontSize:40,fontWeight:700}}>

      {text1.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.50,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}

      </div>

      <div style={{fontSize:60,fontWeight:700}}>
      {text1.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 4,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))} 

      </div>

      <button style={{width:150,height:50,color:'white',borderRadius:5,marginTop:40,marginLeft:50}} onClick={handleClick}>Lets Go</button>
    </div>
    </div>
    <div style={{position:'relative',zIndex:1}}>

    <Institute/>
    </div>
   
    <Footer/>
    </div>

    
    </div>
  )
}
export default Home;