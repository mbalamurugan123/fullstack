import S3Uploader from '../components/S3Uploader.jsx';
import CustomNavbar from './Navbar.jsx';
import SideNav from './SideNav.jsx';

import '../assets/css/home.css'
import { useNavigate } from 'react-router-dom';


function Home(){
  const Navigate=useNavigate();
  const handleLets=()=>{
    Navigate('/login')
  }
  return(
    <>
    
    <CustomNavbar/>
    <div className='html-home'>
    {/* <S3Uploader/> */}
    <div className='container'>

      <p style={{fontSize:40,fontWeight:700,paddingTop:180,paddingLeft:50}}>
   

      Unlock Your Future, Enroll Today
         

      </p>

      <p style={{fontSize:60,paddingLeft:50,fontWeight:700}}>
               
      Your Journey Begins Here!
      </p>

      <button style={{width:150,height:50,color:'white',borderRadius:5,marginTop:40,marginLeft:50}} onClick={handleLets}>Lets Go</button>
    </div>

    </div>
    </>
  )
}
export default Home;