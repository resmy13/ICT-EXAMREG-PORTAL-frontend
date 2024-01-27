
import './App.css';
import Home from './ui-components/Home'
import {Route, Routes } from 'react-router-dom'; // Updated import

import 'bootstrap/dist/css/bootstrap.min.css';
import Stdlogin from './ui-components/Stdlogin';
import Stdmain from './ui-components/Stdmain';
import Admmain from './ui-components/Admmain';
import StudentList from './elements/StudentList';
import EmailForm from './elements/EmailForm';

import {AdminAuth} from './adminToken';
import {UserAuth} from './userToken';
import { Logout } from './Logout.js';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/stdlogin" element={<Stdlogin />} />
        <Route path ="/logout" element={<Logout/>}></Route>
      
        <Route path="/stdmain" element={<UserAuth><Stdmain /></UserAuth>}/>
        <Route path="/admmain" element={<AdminAuth><Admmain/></AdminAuth>}/>
        <Route path="/stdlist/:batchName" element={<AdminAuth><StudentList /></AdminAuth>}/>
        <Route path="/api/send-email" element={<EmailForm />} />
        

      </Routes>
    </div>
  );
}

export default App;
