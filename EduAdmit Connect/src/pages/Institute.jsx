import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CustomNavbar from './Navbar';
import '../assets/css/Institute.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Institute() {
  const institutes = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGxlmU_mz4mYAYF0ULIUeaABi45SoK_ZpXNA&usqp=CAU",
      name: "SRM Easwari Engineering College",
      description1: "Address: 162, Bharathi Salai, Ramapuram, Chennai, Tamil Nadu 600089",
      description2: "Phone: 044 4392 3041",
      course:10
    },
    {
      src: "https://www.cit.edu.in/images/homepage/cit-hm-1.jpg",
      name: "Coimbatore Institute of Technology",
      description1: "Address: Avinashi Rd, Civil Aerodrome Post, Coimbatore, Tamil Nadu 641014",
      description2: "Phone: 0422 257 4071",
      course:9
    },
    {
      src: "https://www.highereducationdigest.com/wp-content/uploads/2019/04/Img-1_800x480-3-550x330.jpg",
      name: "PSG college of Technology",
      description1: "Address: Avinashi Rd, Civil Aerodrome Post, Coimbatore, Tamil Nadu Address: Avinashi Rd, Peelamedu, Coimbatore, Tamil Nadu 641004",
      description2: "Phone: 0422 257 2177",
      course:15

    },
    {
      src: "https://www.collegebatch.com/static/clg-gallery/sri-ramakrishna-engineering-college-coimbatore-217778.jpg",
      name: "Sri Ramakrishna Engineering College",
      description1: "Address:  NGGO Colony, Vattamalaipalayam, Coimbatore, Tamil Nadu 641022",
      description2: "Phone: 075300 89996",
      course:7
    },
    {
      src: "https://www.highereducationdigest.com/wp-content/uploads/2019/04/Img-1_800x480-3-550x330.jpg",
      name: "PSG college of Technology",
      description1: "Address: Avinashi Rd, Civil Aerodrome Post, Coimbatore, Tamil Nadu Address: Avinashi Rd, Peelamedu, Coimbatore, Tamil Nadu 641004",
      description2: "Phone: 0422 257 2177",
      course:15

    },
    {
      src: "https://www.highereducationdigest.com/wp-content/uploads/2019/04/Img-1_800x480-3-550x330.jpg",
      name: "PSG college of Technology",
      description1: "Address: Avinashi Rd, Civil Aerodrome Post, Coimbatore, Tamil Nadu Address: Avinashi Rd, Peelamedu, Coimbatore, Tamil Nadu 641004",
      description2: "Phone: 0422 257 2177",
      course:15
    }

  ];
  const [searchQuery, setSearchQuery] = useState('');

  const filteredInstitutes = institutes.filter(institute =>
    institute.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };
  return (
    <>
    <CustomNavbar/>
      <div>
      <div className="course-bar">
          <p className="course-text">Institutes</p>
          <div className="search-box">
            <input
              className="input-search-box"
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="search-button">Search</button>
          </div>
        </div>
        <div>
        

       <Link to={'/courses'}>
         <div className='Institutes' >

        {filteredInstitutes.map((institute, index) => (
          <Card className='card-institute' style={{ width: '18rem',float:'left' ,margin:30,textAlign:'center',height:500,marginBottom:100}} key={index}>
            <Card.Img variant="top" src={institute.src}  />
            <Card.Body>
              <Card.Title>
                {institute.name}
              </Card.Title>
              <Card.Text>
                <div style={{marginTop:20}}>
                {institute.description1}
                <br></br><br></br>
                {institute.description2}
                </div>
                <br></br>
                <div style={{marginTop:20}}>
                Avalible Course:
                {institute.course}
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
     
      </div>
      </Link>
        </div>
        </div>

    </>
  );
}

export default Institute;
