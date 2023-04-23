import {useState} from "react"
import '../../App.css';
import {ColorModeContext, useMode} from  '../../theme'
import {CssBaseline, ThemeProvider } from '@mui/material';
import {Routes, Route} from "react-router-dom"
import MerchSidebar from './Scenes/global/sidebar';
import Topbar from './Scenes/global/topbar';
import Dashboard from "./Scenes/dashboard/index.jsx";
import Team from "./Scenes/team/index.jsx";
import Form from "./Scenes/form";
import Bar from "./Scenes/bar/index.jsx";
import Pie from "./Scenes/pie/index.jsx";
import Line from "./Scenes/line/index.jsx";


function Merchant() {
  const [theme, colorMode] =useMode();
  const [isSidebar, setisSidebar] =useState(true);
  
  
   const [vanish,setVanish] = useState("here")
  

  function gone(){
    setVanish("nothere")
  }


  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
        <CssBaseline />
            <div  className='app'>
                <MerchSidebar isSidebar={isSidebar}/>
                <main className='content'>
                    <Topbar setIsSidebar={setisSidebar}/>
                       {/* <LandingpageNavbar/>  */}
                       
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/team" element={<Team />} />
                        <Route path="/form" element={<Form />} />
                        <Route path="/bar" element={<Bar/>} /> 
                        <Route path="/pie" element={<Pie/>} /> 
                        <Route path="/line" element={<Line/>} /> 
                    </Routes>
                   
                </main>
            </div>
    </ThemeProvider>
</ColorModeContext.Provider>
  

  );
}

export default Merchant;
