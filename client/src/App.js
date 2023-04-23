import {useState} from "react"

import './App.css';

import {CssBaseline, ThemeProvider } from '@mui/material';
import {Routes, Route} from "react-router-dom"

import LandingPage from '../src/components/landingpage/Landingpage'

import ClerkLogin from './components/auth/ClerkLogin';
import AdminLogin from './components/auth/AdminLogin';
import MerchantLogin from './components/auth/MerchantLogin';
import MerchantSignup from './components/auth/MerchantSignup';

import Merchant from './components/MerchantDashboard/Merchant';
import Dashboard from './components/MerchantDashboard/Scenes/dashboard';
import Team from './components/MerchantDashboard/Scenes/team';
import Form from './components/MerchantDashboard/Scenes/form';
import Bar from './components/MerchantDashboard/Scenes/bar';
import Pie from './components/MerchantDashboard/Scenes/pie';
import Line from './components/MerchantDashboard/Scenes/line';

import Admin from './components/adminDashboard/admin';
import AdminDashboard from "./components/adminDashboard/adminDashScenes/dashboard";
import AdminTeam from './components/adminDashboard/adminDashScenes/team';
import AdminInvoices from "./components/adminDashboard/adminDashScenes/invoices";
import AdminContacts from "./components/adminDashboard/adminDashScenes/contacts";
import AdminBar from "./components/adminDashboard/adminDashScenes/bar";
import AdminForm from "./components/adminDashboard/adminDashScenes/form";
import AdminLine from "./components/adminDashboard/adminDashScenes/line";
import AdminPie from "./components/adminDashboard/adminDashScenes/pie";
import AdminFAQ from "./components/adminDashboard/adminDashScenes/faq";
import AdminGeography from "./components/adminDashboard/adminDashScenes/geography";
import AdminCalendar from "./components/adminDashboard/adminDashScenes/calendar/calendar";





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
                           <Route path="/merchant" element={<Merchant/>}>
                              <Route path="/merchant" element={<Dashboard />} />
                              <Route path="/merchant/team" element={<Team />} />
                              <Route path="/merchant/form" element={<Form />} />
                              <Route path="/merchant/bar" element={<Bar/>} /> 
                              <Route path="/merchant/pie" element={<Pie/>} /> 
                              <Route path="/merchant/line" element={<Line/>} />
                          </Route> 

                          <Route path="/admin" element={Admin}>
                            <Route path="/admin" element={<AdminDashboard />} />
                            <Route path="/admin/team" element={<AdminTeam />} />
                            <Route path="/admin/contacts" element={<AdminContacts />} />
                            <Route path="/admin/invoices" element={<AdminInvoices />} />
                            <Route path="/admin/form" element={<AdminForm />} />
                            <Route path="/admin/bar" element={<AdminBar />} />
                            <Route path="/admin/pie" element={<AdminPie />} />
                            <Route path="/admin/line" element={<AdminLine />} />
                            <Route path="/admin/faq" element={<AdminFAQ />} />
                            <Route path="/admin/calendar" element={<AdminCalendar />} />
                            <Route path="/admin/geography" element={<AdminGeography />} />
                          </Route>
                                          
                    </Routes>
              </>
     

  );
}

export default App;