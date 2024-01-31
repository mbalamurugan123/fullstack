import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CustomNavbar from './Navbar';
import EnrollForm from './EnrollForm';
import { useState } from 'react';

function Courses() {
  const courses = [
    {
    name : 'Computer Science',
    description: "A bachelor's degree in computer science is a four-year program combining general education with computer science, mathematics, and technology coursework",
    fee:10000,
    seats : 10
    },
    {
    name: 'Artifical Intelligence and Data Science',
    description: "Artificial Intelligence and Data Science is a new branch of study that deals with scientific methodologies, processes, and techniques drawn from different domains like statistics, cognitive science",
    fee:17000,
    seats: 5,
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
        <CustomNavbar></CustomNavbar>
        {courses.map((course, index) => (
          <Card style={{ width: '25rem',float:'left' ,margin:30,marginTop:150,textAlign:'center',height:350}} key={index}>
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
