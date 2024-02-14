import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentProf from '../assets/images/student-prof.png'
import whatsapp from '../assets/images/whatsapp.svg';
import instagram from '../assets/images/instagram.svg';
import facebook from '../assets/images/facebook.svg'
import twitter from '../assets/images/twitter.svg'
import '../assets/css/Dashboard.css'
import '../assets/css/Login.css'
import CustomNavbar from './Navbar';
function EditProfile() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    file: yup.mixed().required(),
    terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
  });

  return (
    <>

    <div>
    <CustomNavbar/>
    </div>
    <div  className='Edit-profile'>

 
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
     
      initialValues={{
        firstName: '',
        lastName: '',
        username: '',
        city: '',
        state: '',
        zip: '',
        file: null,
        terms: false,
      }}
      >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <>
    
       
        <div className="dash-card" style={{marginTop:150}}>
        <img src={StudentProf} style={{width: '100%'}} />
        <h4>Name</h4>
        <a className='dash-ico'><img src={whatsapp}></img> </a>
        <a className='dash-ico'><img src={instagram}></img> </a>
        <a className='dash-ico'><img src={facebook}></img></a>
        <a className='dash-ico'><img src={twitter}></img> </a>
        <p><button className='con-but'>Student</button></p>
      </div>
      <div style={{width:'70%',marginLeft:350,paddingLeft:50,paddingTop:50}}>
        <Form noValidate onSubmit={handleSubmit} style={myprofilestyle}>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik101"
              className="position-relative"
              style={{marginBottom:25}}
              >
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
                />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik102"
              className="position-relative"
              style={{marginBottom:25}}
              >
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
                />

              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername2"
                 style={{marginBottom:25}}>
              <Form.Label>Mobile Number</Form.Label>
              <InputGroup hasValidation>
                {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                <Form.Control
                  type="text"
                  placeholder="Mobile Number"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                  />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername2"      style={{marginBottom:25}}>
              <Form.Label>Age</Form.Label>
              <InputGroup hasValidation>
                {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                <Form.Control
                  type="text"
                  placeholder="Age"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                  />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername2"
                 style={{marginBottom:25}}>
              <Form.Label>Gender</Form.Label><br></br>
              <select name="role" id="role">
          <option>Choose</option>
            <option>Male</option>
            <option >Female</option>
          </select>
            </Form.Group>
            
            <Form.Group as={Col} md="4" controlId="validationFormikUsername2"
                 style={{marginBottom:25}}>
              <Form.Label>Date of Birth</Form.Label>
              <InputGroup hasValidation>
                {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                <Form.Control
                  type="date"
                  placeholder="Father Name"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                  />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername2"
                 style={{marginBottom:25}}>
              <Form.Label>Father Name</Form.Label>
              <InputGroup hasValidation>
                {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                <Form.Control
                  type="text"
                  placeholder="Father Name"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                  />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername2"
                 style={{marginBottom:25}}>
              <Form.Label>Mother Name</Form.Label>
              <InputGroup hasValidation>
                {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                <Form.Control
                  type="text"
                  placeholder="Mother Name"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                  />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername2" style={{width:'100%',marginBottom:25}}>
              <Form.Label>Address</Form.Label>
              <InputGroup hasValidation>
                {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                <Form.Control
                  type="text"
                  placeholder="Address"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                  style={{height:100}}
                  />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik103"
     
              className="position-relative"
              style={{marginBottom:25}}
              >
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
                />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik104"
              className="position-relative"
              style={{marginBottom:25}}
              >
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
                />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik105"
              className="position-relative"
              style={{marginBottom:25}}
              >
              <Form.Label>Pin Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Pin Code"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
                />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
            
          </Row>
        <Row>
        <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik105"
              className="position-relative"
              style={{marginBottom:25}}
              >
              <Form.Label>HSC Mark in %</Form.Label>
              <Form.Control
                type="text"
                
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
                />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik105"
              className="position-relative"
              style={{marginBottom:25}}
              >
              <Form.Label>SSLC Mark in %</Form.Label>
              <Form.Control
                type="text"
                
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
                />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik105"
              className="position-relative"
              style={{marginBottom:25}}
              >
              <Form.Label>Eligibility</Form.Label>
              <Form.Control
                type="text"
          
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
                />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
        </Row>
          <Form.Group className="position-relative mb-3" style={{margin:40,marginLeft:300,marginTop:50}}>
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik106"
              feedbackTooltip
              />
          </Form.Group>
          <div style={{padding:50,textAlign:'center'}}>

          <Button type="submit" style={{width:'20%'}}>Edit Profile</Button>
          </div>
        </Form>
      </div>
      </>
      )}
    </Formik>
    </div>
    </>
  );
}
const myprofilestyle={
  width: '90%',
  // backgroundColor: 'orange',
  paddingTop:100,
}

export default EditProfile;