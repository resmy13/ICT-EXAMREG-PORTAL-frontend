
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Navbar } from 'react-bootstrap';
import { useParams} from 'react-router-dom'; // Import useParams
import { Link } from 'react-router-dom';
import Footer from './Footer';
import EmailForm from './EmailForm';
import Navbarstd from './Navbarstd';


const StudentList = () => {

  
  

  const [selectedStudent, setSelectedStudent] = useState(null);

  const showEmailForm = (student) => {
    setSelectedStudent(student);
  };

  const hideEmailForm = () => {
    setSelectedStudent(null);
  };

  const { batchName } = useParams(); // Use useParams hook to get batchName
  const [students, setStudents] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/students/${batchName}`);

        setStudents(response.data); console.log('Response:', response.data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [batchName]);
  

  

  return (
    <div>
      <Navbarstd/>
      <h2>{batchName}</h2>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Batch Name</th>
            <th>Send Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.phoneNumber}</td>
              <td>{student.email}</td>
              <td>{student.dob}</td>
              <td>{student.batchName}</td>
              <td>
                <Button variant="primary" onClick={() => showEmailForm(student)}       style={{textDecoration:"none",color:"white"}}>
                
                  Send Result</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {selectedStudent && (
        <EmailForm
          studentEmail={selectedStudent.email}
          onHide={hideEmailForm}
        />
      )}
      <Footer />
    </div>
   
  );
};

export default StudentList;
