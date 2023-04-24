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
import StockForm from "./components/MerchantDashboard/Scenes/stock";
import Bar from "./components/MerchantDashboard/Scenes/bar/index.jsx";
import Pie from "./components/MerchantDashboard/Scenes/pie/index.jsx";
import Line from "./components/MerchantDashboard/Scenes/line/index.jsx";


function App() {
  const [theme, colorMode] =useMode();
  const [isSidebar, setisSidebar] =useState(true);
  

  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
        <CssBaseline />
            <div  className='app'>
                <MerchSidebar isSidebar={isSidebar}/>
                <main className='content //  const [vanish,setVanish] = useState("here")
  

  // function gone(){
  //   setVanish("nothere")
  // }
'>
                    <Topbar setIsSidebar={setisSidebar}/>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/team" element={<Team />} />
                        <Route path="/form" element={<Form />} />
                        <Route path="/stock" element={<StockForm />} />
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

export default App;
