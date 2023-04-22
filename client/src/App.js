
import './App.css';
import LandingPage from '../src/components/landingpage/index'
import {useState} from "react"
import './App.css';
import {CssBaseline, ThemeProvider } from '@mui/material';
import {Routes, Route} from "react-router-dom"
import ClerkLogin from './components/auth/ClerkLogin';
import AdminLogin from './components/auth/AdminLogin';
import MerchantLogin from './components/auth/MerchantLogin';
import MerchantSignup from './components/auth/MerchantSignup';
import MerchantPage from './components/MerchantDashboard/MerchantPage';
import Dashboard from './components/MerchantDashboard/Scenes/dashboard';
import Team from './components/MerchantDashboard/Scenes/team';
import Form from './components/MerchantDashboard/Scenes/form';
import Bar from './components/MerchantDashboard/Scenes/bar';
import Pie from './components/MerchantDashboard/Scenes/pie';
import Line from './components/MerchantDashboard/Scenes/line';




function App() {




  return (
 
              <>   
      
                       {/* <MerchantPage/>    */}
                    <Routes>
                      <Route path="/" element={<LandingPage/>}/>
                           <Route path="/clerk/login" element={<ClerkLogin />}/>
                           <Route path="/admin/login" element={<AdminLogin />}/>
                           <Route path="/merchant/login" element={<MerchantLogin />}/>
                           <Route path="/merchant/signup" element={<MerchantSignup/>}/>
                           <Route path="/main" element={<MerchantPage/>}>
                              <Route path="/main" element={<Dashboard />} />
                              <Route path="/main/team" element={<Team />} />
                              <Route path="/main/form" element={<Form />} />
                              <Route path="/main/bar" element={<Bar/>} /> 
                              <Route path="/main/pie" element={<Pie/>} /> 
                              <Route path="/main/line" element={<Line/>} />
                          </Route>                  
                    </Routes>
              </>
     

  );
}

export default App;
