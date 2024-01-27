import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Stdlogin.css'
import  { useState } from 'react'
//import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axiosInterceptor from '../axiosInterceptor';







const Stdlogin = () => {
  //const history = useHistory();
  


    const [user,setUser]=useState({ email: '', password: '' });
    const navigate = useNavigate();





  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      axiosInterceptor.post('http://localhost:4000/auth/login',user)
      // axiosInst.post('http://localhost:4000/user/login',user)
      .then((res)=>{
        if (res.data.message === 'userlogin') {
          sessionStorage.setItem("userToken", res.data.token);  
          navigate('/stdmain');            
        }else if(res.data.message === 'adminlogin'){
          sessionStorage.setItem("adminToken", res.data.token);
          navigate('/admmain');
        } else {
          console.error('Login failed');
          alert('invalid credentials')
        
        }})
      
    } catch (error) {
      console.error('Error during login:', error);
      if (error.response && error.response.status === 404) {
        alert('Invalid login credentials');
    } else {
      alert('Error during login');
  }

    }





  };





  return (
    <div>
<Form className='stdlogin' onSubmit={handleSubmit}>
    <br/>
    <h1>Login</h1>
    <br/>
    <p><i>Please login with the credentials provided by ICT Academy</i></p>
      <Form.Group className="mb-3" controlId="formBasicEmail" id='emailbox'>
        <Form.Label >Username</Form.Label>
        <Form.Control name="email" onChange={inputHandler} type="email"  placeholder="Enter Username"  />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" id='password'>
        <Form.Label >Password</Form.Label>
        <Form.Control name="password" onChange={inputHandler} type="password" placeholder="Password"  />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Login
      </Button>
      <br/>
      <br/>
    </Form>
    
    </div>
  )
}

export default Stdlogin