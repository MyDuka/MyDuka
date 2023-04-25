import {useState} from "react"
import {ColorModeContext, useMode} from  '../../theme'
import {CssBaseline, ThemeProvider } from '@mui/material';
import {Outlet} from "react-router-dom"
import MerchSidebar from "./Scenes/global/sidebar";
import Topbar from './Scenes/global/topbar';



function Merchant() {
  const [theme, colorMode] =useMode();
  const [isSidebar, setisSidebar] =useState(true);

  
  
  //  const [vanish,setVanish] = useState("here")
  

  // function gone(){
  //   setVanish("nothere")
  // }


  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
        <CssBaseline />
            <div  className='app'>
                <MerchSidebar isSidebar={isSidebar}/>
                <main className='content'>
                    <Topbar setIsSidebar={setisSidebar}/>
                       
                    <Outlet/>   
                
                </main>
            </div>
    </ThemeProvider>
</ColorModeContext.Provider>
  

  );
}

export default Merchant;
