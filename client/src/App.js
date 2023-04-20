import {useState} from "react"
import './App.css';
import {ColorModeContext, useMode} from  '../src/theme'
import {CssBaseline, ThemeProvider } from '@mui/material';
import {Routes, Route} from "react-router-dom"
import MerchSidebar from './components/MerchantDashboard/Scenes/global/sidebar';
import Topbar from './components/MerchantDashboard/Scenes/global/topbar';
import Dashboard from "./components/MerchantDashboard/Scenes/dashboard/index.jsx";
import Team from "./components/MerchantDashboard/Scenes/team/index.jsx";
import Form from "./components/MerchantDashboard/Scenes/form";
import Bar from "./components/MerchantDashboard/Scenes/bar/index.jsx";
import Pie from "./components/MerchantDashboard/Scenes/pie/index.jsx";
import Line from "./components/MerchantDashboard/Scenes/line/index.jsx";
import LoginForm from "./components/AdminDashboard/AdminLogin/Login";
import LandingpageNavbar from './components/landingpage/LandingpageNavbar';
import ClerkLogin from './components/auth/ClerkLogin';
import AdminLogin from './components/auth/AdminLogin';
import MerchantLogin from './components/auth/MerchantLogin';
import MerchantSignup from './components/auth/MerchantSignup';


function App() {
  const [theme, colorMode] =useMode();
  const [isSidebar, setisSidebar] =useState(true);
  
  
   const [vanish,setVanish] = useState("here")
  

  function gone(){
    setVanish("nothere")
  }


  return (
//     <ColorModeContext.Provider value={colorMode}>
//     <ThemeProvider theme={theme}>
//         <CssBaseline />
//             <div  className='app'>
//                 <MerchSidebar isSidebar={isSidebar}/>
//                 <main className='content'>
//                     <Topbar setIsSidebar={setisSidebar}/>
                       <LandingpageNavbar/> 
                       
//                     <Routes>
//                         <Route path="/" element={<Dashboard />} />
//                         <Route path="/team" element={<Team />} />
//                         <Route path="/form" element={<Form />} />
//                         <Route path="/bar" element={<Bar/>} /> 
//                         <Route path="/pie" element={<Pie/>} /> 
//                         <Route path="/line" element={<Line/>} /> 
                           <Route path="/clerk/login" element={<ClerkLogin gone={gone} />}/>
                           <Route path="/admin/login" element={<AdminLogin gone={gone} />}/>
                           <Route path="/merchant/login" element={<MerchantLogin gone={gone}/>}/>
                           <Route path="/merchant/signup" element={<MerchantSignup/>}/>                    
//                     </Routes>
//                     {/* <Dashboard /> */}
                   
//                 </main>
//             </div>
//     </ThemeProvider>
// </ColorModeContext.Provider>
    <LoginForm />

  );
}

export default App;
