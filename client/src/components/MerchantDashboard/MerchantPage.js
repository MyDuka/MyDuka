import {useState} from "react"
import {ColorModeContext, useMode} from  '../../theme'
import {CssBaseline, ThemeProvider } from '@mui/material';
import {Routes, Route, BrowserRouter, Outlet } from "react-router-dom"
import Dashboard from "./Scenes/dashboard";
import Team from "./Scenes/team";
import Form from "./Scenes/form";
import Bar from "./Scenes/bar";
import Pie from "./Scenes/pie";
import Line from "./Scenes/line";
import MerchSidebar from "./Scenes/global/sidebar";
import Topbar from "./Scenes/global/topbar";
import './MerchantPage.css'



export default function MerchantPage(){

    const [theme, colorMode] =useMode();
    const [isSidebar, setisSidebar] =useState(true);

    return(

 <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
        <CssBaseline />
            <div  className='app'>
                <MerchSidebar isSidebar={isSidebar}/>
                <main className='content'>
                    <Topbar setIsSidebar={setisSidebar}/>
                  
                    <Outlet/>

                    {/* <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/team" element={<Team />} />
                        <Route path="/form" element={<Form />} />
                        <Route path="/bar" element={<Bar/>} /> 
                        <Route path="/pie" element={<Pie/>} /> 
                        <Route path="/line" element={<Line/>} /> 
                    </Routes> */}
                  
                   
                    {/* <Dashboard /> */}
                    
                </main>
            </div>
    </ThemeProvider>
</ColorModeContext.Provider>

    )
}