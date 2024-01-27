import React from 'react'
import Footer from '../elements/Footer';
import Navbarstd from '../elements/Navbarstd';
import './Admmain.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';




const Admmain = () => {
    
  return (
    <div>
       <Navbarstd /> 
       <div className='admdash' >
       <h1>Welcome Admin</h1>
       
       <Button variant="primary">Course Management</Button>{' '}
       <Button variant="primary">Student Management</Button>{' '}
       <Button variant="primary">Feedback and Support</Button>{' '}
       <Button variant="primary">Schedule Exams</Button>{' '}<br/>
       
       <br/>
       </div>
       <div className='dashboard'>
       
       <Container>
      <Row>
        <Col>
        <ListGroup as="ul" className='batchlist'>
      <ListGroup.Item as="li" active>
        ICT Batches List
      </ListGroup.Item>
      <ListGroup.Item as="li"><Link to="/stdlist/KKEM March CSA" style={{textDecoration :"none"}} >KKEM March CSA</Link></ListGroup.Item>
      <ListGroup.Item as="li"><Link  to="/stdlist/KKEM March MLAI" style={{textDecoration :"none"}}>
      KKEM March MLAI
      </Link></ListGroup.Item>
      <ListGroup.Item as="li"><Link  to="/stdlist/KKEM March DSA" style={{textDecoration :"none"}}>KKEM March DSA</Link></ListGroup.Item>
      <ListGroup.Item as="li"><Link  to="/stdlist/KKEM March FSD" style={{textDecoration :"none"}}>
      KKEM March FSD
      </Link></ListGroup.Item>
      <ListGroup.Item as="li"><Link to="/stdlist/KKEM March ST" style={{textDecoration :"none"}}>KKEM March ST</Link></ListGroup.Item>
     </ListGroup>
        
        </Col>
      </Row>
    </Container>
    </div>
  
       <Footer />
    </div>
  )
  }

export default Admmain;