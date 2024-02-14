import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CustomNavbar from './Navbar';
import EnrollForm from './EnrollForm';
import { useState } from 'react';

function Courses() {
  const courses = [
    {
      name: 'Cybersecurity',
      description: "A bachelor's degree in cybersecurity focuses on protecting computer systems, networks, and data from cyber threats and attacks.",
      fee: 15000,
      seats: 8
    },
    {
      name: 'Software Engineering',
      description: "Software engineering involves designing, developing, and maintaining software systems, focusing on the principles and practices of engineering.",
      fee: 16000,
      seats: 7
    },
    {
      name: 'Information Technology',
      description: "Information technology encompasses the study of utilizing computers and telecommunications to store, retrieve, transmit, and manipulate data.",
      fee: 12000,
      seats: 12
    },
    {
      name: 'Computer Engineering',
      description: "Computer engineering integrates computer science and electrical engineering to design and develop computer hardware and software systems.",
      fee: 14000,
      seats: 9
    },
    {
      name: 'Machine Learning',
      description: "Machine learning focuses on developing algorithms and statistical models that enable computers to perform tasks without being explicitly programmed, with applications in data analysis, pattern recognition, and artificial intelligence.",
      fee: 18000,
      seats: 6
    },
    {
      name: 'Network Engineering',
      description: "Network engineering involves designing, implementing, and managing computer networks, including local area networks (LANs), wide area networks (WANs), and internet infrastructure.",
      fee: 15500,
      seats: 8
    }
    
    

  ];
  const [star, setStar] = useState(5);

  const onChange=(nextValue)=>{
      setStar(nextValue)
  }
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div>
        <CustomNavbar/>
        {courses.map((course, index) => (
          <Card style={{ width: '25rem',float:'left' ,margin:30,marginTop:100,textAlign:'center',height:350,paddingTop:30,paddingBottom:50}} key={index}>
            <Card.Body>
              <Card.Title>
                {course.name}
              </Card.Title>
              <Card.Text style={{marginTop:50}}>
                Course Description:
                {course.description}
                <br></br>
                <br></br>
                Course Fee:
                {course.fee}
                <br></br>
                Avalible Seats:
                {course.seats}
              </Card.Text>
              <Button onClick={handleToggle} variant="primary">Enroll Now</Button>
      {isOpen && <EnrollForm/>}
      
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Courses;
