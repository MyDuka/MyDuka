import './App.css';
import {React, useState, useEffect} from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import LandingpageNavbar from './components/landingpage/LandingpageNavbar';
import ClerkLogin from './components/auth/ClerkLogin';
import AdminLogin from './components/auth/AdminLogin';
import MerchantLogin from './components/auth/MerchantLogin';
import MerchantSignup from './components/auth/MerchantSignup';

function App() {

  const [vanish,setVanish] = useState("here")
  

  function gone(){
    setVanish("nothere")
  }

  return (
    <>

    <LandingpageNavbar/>
     

    


    <Routes>
      {/* <Route path="/" element={<Landingpage />}/> */}
      <Route path="/clerk/login" element={<ClerkLogin gone={gone} />}/>
      <Route path="/admin/login" element={<AdminLogin gone={gone} />}/>
      <Route path="/merchant/login" element={<MerchantLogin gone={gone}/>}/>
      <Route path="/merchant/signup" element={<MerchantSignup/>}/>


    </Routes>

      
  

    </>
  );
}

export default App;
