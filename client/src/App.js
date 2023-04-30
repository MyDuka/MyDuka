import {useState} from "react"

import './App.css';

// import {CssBaseline, ThemeProvider } from '@mui/material';
import {Routes, Route} from "react-router-dom"

// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { ColorModeContext, useMode } from "./components/adminDashboard/adminthemes";

import LandingPage from "./components/landingpage/Landingpage";

import ClerkLogin from './components/auth/ClerkLogin';
import AdminLogin from './components/auth/AdminLogin';
import MerchantLogin from './components/auth/MerchantLogin';
import MerchantSignup from './components/auth/MerchantSignup';

import Merchant from "./components/MerchantDashboard/Merchant";
import Dashboard from './components/MerchantDashboard/Scenes/dashboard';
import Team from './components/MerchantDashboard/Scenes/team';
import Form from './components/MerchantDashboard/Scenes/form';
import Bar from './components/MerchantDashboard/Scenes/bar';
import Pie from './components/MerchantDashboard/Scenes/pie';
import Line from './components/MerchantDashboard/Scenes/line';
import MerchantUpdateForm from "./components/MerchantDashboard/Scenes/form/updateDetails";
import AllStoresProducts from "./components/MerchantDashboard/Scenes/team/products";
import Calendar from './components/MerchantDashboard/Scenes/calendar/calendar'
import AddStore from "./components/MerchantDashboard/Scenes/form/addStore";

import Admin from './components/adminDashboard/Admin';
import AdminDashboard from "./components/adminDashboard/adminDashScenes/dashboard";
import AdminTeam from './components/adminDashboard/adminDashScenes/team';
import AdminStock from "./components/adminDashboard/adminDashScenes/invoices";
import AdminProducts from "./components/adminDashboard/adminDashScenes/products";
import AdminBar from "./components/adminDashboard/adminDashScenes/bar";
import AdminForm from "./components/adminDashboard/adminDashScenes/form";
import AdminLine from "./components/adminDashboard/adminDashScenes/line";
import AdminPie from "./components/adminDashboard/adminDashScenes/pie";
import AdminGeography from "./components/adminDashboard/adminDashScenes/geography";
import AdminCalendar from "./components/adminDashboard/adminDashScenes/calendar/calendar";
import AdminUpdateForm from "./components/adminDashboard/adminDashScenes/form/updateDetails";
import StockRequests from "./components/adminDashboard/adminDashScenes/team/request";

// import AdminSidebar from "./components/adminDashboard/adminDashScenes/global/Sidebar";
// import AdminTopbar from "./components/adminDashboard/adminDashScenes/global/Topbar";

// import Merch from "./components/Merch";
import Clerk from './components/Client'
import ClerkUpdateForm from "./components/Client/ClientDashboard/Scenes/form/updateDetailForm";
import ProductForm from "./components/Client/ClientDashboard/Scenes/form";
import StockForm from "./components/Client/ClientDashboard/Scenes/stock";
import ClerkDashboard from "./components/Client/ClientDashboard/Scenes/dashboard"
// import AllProducts from "./components/MerchantDashboard/Scenes/team/products";
import Stores from "./components/MerchantDashboard/Scenes/team/stores";
import MerchantGeography from "./components/MerchantDashboard/Scenes/geography";
import ClerkProducts from "./components/Client/ClientDashboard/Scenes/team";
import Requested from "./components/Client/ClientDashboard/Scenes/team/requested";
import StockRequest from "./components/Client/ClientDashboard/Scenes/form/stockRequest";



function App() {

  // const [theme, colorMode] = useMode();
    // const [isSidebar, setIsSidebar] = useState(false);

    const [user, setUser] = useState()

  function signIn(user){
    setUser(user)
  }

  console.log(user)



  return (

       <div>

                {/* <Merchant/> */}
                
                    
                  <Routes>
                          <Route path="/" element={<LandingPage/>}/>
                           <Route path="/clerk/login" element={<ClerkLogin signIn={signIn}/>}/>
                           <Route path="/admin/login" element={<AdminLogin signIn={signIn} />}/>
                           <Route path="/merchant/login" element={<MerchantLogin signIn={signIn} />}/>
                           <Route path="/merchant/signup" element={<MerchantSignup/>}/>


                           <Route path="/merchant" element={<Merchant/>}>
                              <Route path="/merchant" element={<Dashboard user={user}/>} />
                              <Route path="/merchant/team" element={<Team />} />
                              <Route path="/merchant/form" element={<Form />} />
                              <Route path="/merchant/bar" element={<Bar/>} /> 
                              <Route path="/merchant/pie" element={<Pie/>} /> 
                              <Route path="/merchant/line" element={<Line/>} />
                              <Route path="/merchant/calendar" element={<Calendar/>} />
                              <Route path="/merchant/geography" element={<MerchantGeography/>} />
                              <Route path="/merchant/form/update" element={<MerchantUpdateForm/>} />
                              <Route path="/merchant/stores" element={<Stores/>} />
                              <Route path="/merchant/products" element={<AllStoresProducts/>} />
                              <Route path="/merchant/add/store" element={<AddStore/>} />



                          </Route> 

                          <Route path="/admin" element={<Admin/>}>
                            <Route path="/admin/*" element={<AdminDashboard user={user} />} />
                            <Route path="/admin/team" element={<AdminTeam />} />
                            <Route path="/admin/products" element={<AdminProducts />} />
                            <Route path="/admin/stock" element={<AdminStock />} />
                            <Route path="/admin/form" element={<AdminForm />} />
                            <Route path="/admin/form/update" element={<AdminUpdateForm />} />
                            <Route path="/admin/bar" element={<AdminBar />} />
                            <Route path="/admin/pie" element={<AdminPie />} />
                            <Route path="/admin/line" element={<AdminLine />} />
                            <Route path="/admin/calendar" element={<AdminCalendar />} />
                            <Route path="/admin/geography" element={<AdminGeography />} />
                            <Route path="/admin/stock/requests" element={<StockRequests />} />


                          </Route>


                          <Route path="/clerk" element={<Clerk/>}>
                            <Route path="/clerk" element={<ClerkDashboard user={user}/>} />
                            <Route path="/clerk/products" element={<ClerkProducts />} />
                            <Route path="/clerk/product/add" element={<ProductForm />} />
                            <Route path="/clerk/stock/add" element={<StockForm />} />
                            <Route path="/clerk/form/update" element={<ClerkUpdateForm/>}/> 
                            <Route path="/clerk/send/request" element={<StockRequest/>}/> 
                            <Route path="/clerk/stock/requested" element={<Requested/>}/>    
                          </Route>
                                          
                    </Routes>

        </div>     

  );
}

export default App;
