import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import HomePage from './pages/homepage/HomePage';
import Login from "./pages/loginPage/Login";
import Password from "./pages/newPassword/newPassword";
import Protected_route from "./pages/loginPage/protected_route";
import { Auth_provider } from "./pages/loginPage/Auth_service";
import { useEffect, useState } from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  const [windowWidth,setWindwoWidth]=useState(window.innerWidth);
    
  useEffect(()=>{
    const handleResize=()=>{
      setWindwoWidth(window.innerWidth);
    }
    window.addEventListener('resize',handleResize);
    return ()=>{
      window.removeEventListener('resize',handleResize);
    }
  })

  return ( 
    // eslint-disable-next-line react/jsx-pascal-case
    <Auth_provider>
            <Router>
        <Routes>
       <Route path='/homepage' element={<Protected_route><HomePage/></Protected_route>}/>
        <Route path="/" element={<Login/>} ></Route>
        <Route path="/change-password" element={<Password/>} ></Route>
      </Routes>
      </Router> 
      </Auth_provider>

      );
}

export default App;
