import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Footer from '../elements/Footer';
import Navbarstd from '../elements/Navbarstd';
import './Stdmain.css';
import axios from 'axios';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';




const Stdmain = () => {
const batchName = [
        "KKEM March CSA",
        "KKEM March DSA",
        "KKEM March MLAI",
        "KKEM March FSD",
        "KKEM March ST"
      ];
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    dob: '',
    batchName: '',
    gender: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      
      // Send POST request to the backend API
      const response = await axios.post('http://localhost:4000/api/students', formData);
      console.log('Form submitted:', response.data);
      // Here you might perform actions like sending data to a server, saving to a database, etc.
      console.log(formData); // For demonstration purposes, log the form data on submission
      console.log('Data Submitted Successfully')
      setSubmitted(true); // Set the submitted state to true to disable the form
      setSuccessMessage('Form submitted successfully!')// Display success message
      alert('Exit Exam Registeration confirmed Successfully')
    }
    catch(error){
      console.log('Error Submitting data:',error);
    }
    };

  return (
    <div>
      
      <Navbarstd />
      <br/>
      <div class='dashnav'>
      <h1 id='stdh'>Welcome to Student Dashboard!</h1>
      
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="upcoming exams" title="Upcoming Exams">
      <h6>Full Stack Developer Certification Exam(FSDCE)</h6><br/>
      <h6>Advanced Machine Learning Certification(AMLC)</h6><br/>
      <h6>Quality Assurance and Testing Exam.(QATE)</h6><br/>
      <h6>Automated Testing Proficiency Assessment(ATPA)</h6><br/>
      </Tab>
      <Tab eventKey="examschedules" title="Exam Schedules">
      <h6>FSDCE- 13th March 2024 Time 9:00 am to 11:30 am </h6><br/>
      <h6>AMLC- 14th March 2024 Time 1:00 pm to 2:00 pm</h6><br/>
      <h6>QATE- 17th March 2024 Time 2:00 pm to 3:00 pm</h6><br/>
      <h6>ATPA- 19th March 2024 Time 9:00 am to 11:30 am</h6><br/>
      </Tab>
      <Tab eventKey="notifications" title="Notifications">
      <p> we kindly request all students who are willing to appear for the upcoming exams to confirm their exam registration by filling out the <b>Exit Test Confirmation Form before February 13th, 2024</b>.<br/>

This <b>confirmation is mandatory</b> for all students intending to sit for the exams.<br/> Your prompt action will enable us to finalize the necessary arrangements and ensure that the examination process proceeds seamlessly.</p>
      </Tab>
     
    </Tabs>
    </div>
  
      <div className='regform'>
        
          <Form onSubmit={handleSubmit}  >
            <br/>
            <h1>Exit Test Confirmation Form</h1>
            <h5>Dear student please fill the registeration form below to confirm your test entry</h5>
            <Form.Group controlId="formName" id="tabs">
              <Form.Label><b>Name:</b></Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail" id="tabs">
              <Form.Label><b>Email:</b></Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPhoneNumber" id="tabs">
              <Form.Label><b>Phone Number:</b></Form.Label>
              <Form.Control
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formDob" id="tabs">
              <Form.Label><b>DOB:</b></Form.Label>
              <Form.Control
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBatchName" id="tabs">
              <Form.Label><b>Batch Name:</b></Form.Label>
              <Form.Control
                as="select"
                name="batchName"
                value={formData.batchName}
                onChange={handleChange}
                required
              >
                <option value=""><b>Select Batch Name</b></option>
                <option value="KKEM March CSA">KKEM March CSA</option>
                <option value="KKEM March DSA">KKEM March DSA</option>
                <option value="KKEM March MLAI">KKEM March MLAI</option>
                <option value="KKEM March FSD">KKEM March FSD</option>
                <option value="KKEM March ST">KKEM March ST</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formGender" id="tabs">
              <Form.Label><b>Gender:</b></Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Control>
            </Form.Group>
            <br/>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <br/>
            <br/>
          </Form>
       
          
        
      </div>
      <Footer />
    </div>
  );
};

export default Stdmain;
