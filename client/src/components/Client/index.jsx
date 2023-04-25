import {useState} from "react"
import {ColorModeContext, useMode} from  './theme'
import {CssBaseline, ThemeProvider } from '@mui/material';
import {Routes, Route} from "react-router-dom"
import ClerkSidebar from "./ClientDashboard/Scenes/global/sidebar";
import Topbar from "./ClientDashboard/Scenes/global/topbar";
import Dashboard from "./ClientDashboard/Scenes/dashboard";
import Team from "./ClientDashboard/Scenes/team";
import ProductForm from "./ClientDashboard/Scenes/form";
import StockForm from "./ClientDashboard/Scenes/stock";



function Client() {
  const [theme, colorMode] =useMode();
  const [isSidebar, setisSidebar] =useState(true);
  

  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
        <CssBaseline />
            <div  className='app'>
                <ClerkSidebar isSidebar={isSidebar}/>
                <main className='content'>
                    <Topbar setIsSidebar={setisSidebar}/>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/team" element={<Team />} />
                        <Route path="/form" element={<ProductForm />} />
                        <Route path="/stock" element={<StockForm />} />
                        
                    </Routes>
                
                </main>
            </div>
    </ThemeProvider>
</ColorModeContext.Provider>
    
  );
}

export default Client;