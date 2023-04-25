import {useState} from "react"
import {ColorModeContext, useMode} from  './theme'
import {CssBaseline, ThemeProvider } from '@mui/material';
import { Outlet } from "react-router-dom"
// import ClerkSidebar from "./ClientDashboard/Scenes/global/sidebar";
import Topbar from "./ClientDashboard/Scenes/global/topbar";
import ClientNav from "./ClientDashboard/Scenes/global/clientNav";



function Clerk() {
  const [theme, colorMode] =useMode();
  const [isSidebar, setisSidebar] =useState(true);
  

  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
        <CssBaseline />
            <div  className='app'>
                {/* <ClerkSidebar isSidebar={isSidebar}/> */}
                <ClientNav/>

                <main className='content'>
                    <Topbar setIsSidebar={setisSidebar}/>

                    <Outlet/>
                   
                
                </main>
            </div>
    </ThemeProvider>
</ColorModeContext.Provider>
    
  );
}

export default Clerk;