import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Footer from '../elements/Footer';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


import { Link } from 'react-router-dom';





const Home = () => {
  return (
    <div>
       <Navbar expand="lg" className="bg-body-secondary">
      <Container>
      
          <Navbar.Brand href="#home">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/ab/ICT_Academy_Kerala.webp"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
        
        <Navbar.Brand href="#home">ICT Academy OF Kerala</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#courses">Courses</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <Container>
      <Row>
        <Col> <Carousel>
      <Carousel.Item interval={400}>
      <img src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010136.jpg?size=626&ext=jpg&ga=GA1.1.1709607965.1700568923&semt=ais" alt="First slide" />
        
        <Carousel.Caption>
          <h3>Unveiling Mastery</h3>
          <p>Navigating the Gateway to IT Proficiency</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={400}>
      <img src="https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150061967.jpg?size=626&ext=jpg&ga=GA1.1.1709607965.1700568923&semt=ais" alt="First slide" />
        
        <Carousel.Caption>
          <h3>Empowering Futures</h3>
          <p>Your Launchpad to Technological Proficiency</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={400}>
      <img src="https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg?size=626&ext=jpg&ga=GA1.1.1709607965.1700568923&semt=ais" alt="First slide" />
        <Carousel.Caption>
          <h3>Charting Success</h3>
          <p>
          Transforming Ambitions into IT Expertise
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={400}><img src="https://img.freepik.com/free-photo/business-concept-glass-world-laptop_1150-17691.jpg?size=626&ext=jpg&ga=GA1.1.1709607965.1700568923&semt=ais" alt="First slide" />
        
          <div className='C-cap'>
        <h1 className="animated-text">ICT Academy Of Kerala</h1>
        </div>
          
        
      </Carousel.Item>
    </Carousel>
    </Col>


        <Col className='entry'>
        
        <br/>
        <br/>
        <br/>
        <br/>
        <h3 style={{color:"white"}}>Welcome! <br/>Login to your account</h3>
        <Button variant="info"><Link to="/stdlogin" style={{color:"Black",textDecoration:"none"}}>Login</Link></Button>{' '}
        <br/>
        

        
          </Col>
      </Row>
     
    </Container>
    <div className='lastdiv'>
      <br/>
      <h1 className="typewriter">Why should you Choose ICT Academy for Your IT Training?</h1>
    <h6 className="typewriter">At ICT Academy, our commitment to excellence in IT education sets us apart. With a relentless focus on empowering individuals with cutting-edge skills.<br/>At ICT Academy, we don't just offer courses; we offer a transformative experience that equips you with the skills and confidence to thrive in the dynamic world of technology.<br/> Choose us for an unmatched IT learning journey.</h6>
    <br/></div>
    
    <section id="courses" className='courses'>
      <br/>
      <h1>Courses We Offer..</h1>
      <Container>
      <Row xs="auto">
        <Col> 
        
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/robot-working-office-instead-humans_23-2150912065.jpg?ga=GA1.1.1709607965.1700568923&semt=ais_ai_generated" />
      <Card.Body>
        <Card.Title>Artificial Intelligence</Card.Title>
        <Card.Text>
        Unlock the future with our cutting-edge Artificial Intelligence course - where innovation meets opportunity, paving the way for tomorrow's tech leaders. Register now to embark on a transformative journey into the realm of AI.
        </Card.Text>
        <Button variant="primary">Register</Button>
      </Card.Body>
      
    </Card>
    <br/>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/young-adult-businessman-sitting-desk-typing-generated-by-ai_188544-26243.jpg?ga=GA1.1.1709607965.1700568923&semt=ais_ai_generated"/>
      <Card.Body>
        <Card.Title>Cybersecurity</Card.Title>
        <Card.Text>
        Join our Cybersecurity course, fortify your digital prowess, and become the guardian of tomorrow's secure digital world. Enroll today to defend against evolving cyber threats and shape a safer online future.
        </Card.Text>
        <Button variant="primary">Register</Button>
      </Card.Body></Card>
      </Col>
        <Col><Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/beautiful-office-space-cartoon-style_23-2151043334.jpg?ga=GA1.1.1709607965.1700568923&semt=ais_ai_generated" />
      <Card.Body>
        <Card.Title>Web Development</Card.Title>
        <Card.Text>
        Embark on an immersive journey into the world of Web Development - where creativity meets technology. Build the digital landscapes of tomorrow; enroll now and bring your visions to life on the web.Master the languages of the web and craft digital experience. </Card.Text>
        <Button variant="primary">Register</Button>
      </Card.Body></Card>
      <br/>
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/glowing-blue-office-desk-with-modern-technology-generated-by-ai_188544-25964.jpg?ga=GA1.1.1709607965.1700568923&semt=ais_ai_generated" />
      <Card.Body>
        <Card.Title>Cloud Computing</Card.Title>
        <Card.Text>
        Step into the future of technology - explore our Cloud Computing course and elevate your skills to harness the limitless potential of the cloud. Enroll now to soar above traditional boundaries into a world of innovation.
        </Card.Text>
        <Button variant="primary">Register</Button>
      </Card.Body></Card>
      </Col>
        <Col><Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/laptop-with-graph-screen-that-says-29-it_1340-35885.jpg?ga=GA1.1.1709607965.1700568923&semt=ais_ai_generated" />
      <Card.Body>
        <Card.Title>Data Analytics</Card.Title>
        <Card.Text>
        Unleash the power of data; our Data Analytics course empowers you to transform information into actionable intelligence, driving innovation and strategic decision-making.Dive into the world of Data Analytics, uncover insights, and shape smarter decisions.
        </Card.Text>
        <Button variant="primary">Register</Button>
      </Card.Body>
      </Card>
      <br/>
      
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/glowing-circuit-board-complex-cyborg-brain-design-generated-by-ai_188544-36674.jpg?ga=GA1.1.1709607965.1700568923&semt=ais_ai_generated" />
      <Card.Body>
        <Card.Title>Machine Learning</Card.Title>
        <Card.Text>
        Enter the realm of intelligent systems with our Machine Learning course. Uncover the algorithms of tomorrow, shaping the future of innovation. Enroll today and become a pioneer in the era of AI-driven advancements.
        </Card.Text>
        <Button variant="primary">Register</Button>
      </Card.Body>
      </Card>
      </Col>
      </Row>
    </Container>
    
  
</section>
<br/>
<section id="about"  className='about animated'>

     
        <h1>About Us</h1>
      <p>ICT Academy of Kerala is a Social Enterprise created in a Public Private Partnership model (PPP) for imparting ICT skills to the youths of Kerala and improving their employability opportunities in the Industry. The Company is supported by Govt. of India, partnered by Govt. of Kerala and the IT industry.</p>
      <p>The ICT Academy of Kerala has emerged as a strategic partner for the industry, academia, and government in bridging the skills gap in the field of Information Communication Technology. Over the years, ICT Academy has successfully supported the industry and academia in talent needs and skills supply and has touched youths and professionals alike in fulfilling their career aspirations. We will continue to invest in building capabilities in the latest technology and business domains to help our beneficiaries. We shall work with the Government of Kerala in its mission for talent development and employment.</p>
  
   
      
</section>
<section id="contact" className='contact'>
  <br/>
      <h1>Contact Us</h1>
      <br/>
      <h6><FontAwesomeIcon icon={faPhone} />+91 75 940 51437 </h6>
      <h6><FontAwesomeIcon icon={faEnvelope} />info@ictkerala.org</h6>
      <h6><FontAwesomeIcon icon={faMapMarkerAlt} />Head Quarters<i>
G1, Ground Floor, Thejaswini, Technopark Campus
Thiruvananthapuram, Kerala, India - 695 581
Office: +91 471 270 0811</i></h6>
<h6><FontAwesomeIcon icon={faMapMarkerAlt} />Regional Centre (North)
<i>2nd Floor, UL Cyberpark Building, Nellikode Post
Kozhikode, Kerala, India - 673 016</i></h6>
<h6><FontAwesomeIcon icon={faMapMarkerAlt} />Regional Centre (Central)
<i>B-Wing, Kanikonna Villa, Infopark Campus
Koratty, Thrissur, Kerala, India - 680 308</i></h6>
      <br/>
      <div className="social-icons">
          <a href="https://www.facebook.com/ictkerala/"><FontAwesomeIcon icon={faFacebook} style={{ fontSize: '30px' }} /></a>
          <a href="https://www.linkedin.com/company/ictkerala"><FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '30px' }} /></a>
          <a href="https://www.instagram.com/ictkerala/"><FontAwesomeIcon icon={faInstagram} style={{ fontSize: '30px' }}/></a>
          <a href="https://www.youtube.com/user/ictkerala"><FontAwesomeIcon icon={faYoutube} style={{ fontSize: '30px' }} /></a>
        </div>

  
</section>

    <Footer/>
    
   

   </div> 
  )
}

export default Home