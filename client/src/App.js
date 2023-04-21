import {useState} from "react"
import './App.css';
import {CssBaseline, ThemeProvider } from '@mui/material';
import {Routes, Route} from "react-router-dom"
import ClerkLogin from './components/auth/ClerkLogin';
import AdminLogin from './components/auth/AdminLogin';
import MerchantLogin from './components/auth/MerchantLogin';
import MerchantSignup from './components/auth/MerchantSignup';
import MerchantPage from "./components/MerchantDashboard/Merchant/MerchantPage";


function App() {

  
  
   const [vanish,setVanish] = useState("here")
  

  function gone(){
    setVanish("nothere")
  }


  return (
 
              <>
                                       
                    <Routes>
                      <Route path="/" element={}/>
                           <Route path="/clerk/login" element={<ClerkLogin gone={gone} />}/>
                           <Route path="/admin/login" element={<AdminLogin gone={gone} />}/>
                           <Route path="/merchant/login" element={<MerchantLogin gone={gone}/>}/>
                           <Route path="/merchant/signup" element={<MerchantSignup/>}/>
                           <Route path="/merchant/page"  element={<MerchantPage/>}/>                  
                    </Routes>
              </>
     
  );
}

export default App;
