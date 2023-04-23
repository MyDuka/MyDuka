import React, { useState} from "react";
import { Outlet } from "react-router-dom";

import AdminSidebar from "./adminDashboard/adminDashScenes/global/Sidebar";
import AdminTopbar from "./adminDashboard/adminDashScenes/global/Topbar";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./adminDashboard/adminthemes";

function Merch(){
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);

    return(
        <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
        <CssBaseline />
    {/* <CssBaseline /> */}
    <div className="app">
      <AdminSidebar isSidebar={isSidebar} />
      <main className="content">
        <AdminTopbar setIsSidebar={setIsSidebar} />



        </main>
        </div>

        </ThemeProvider>
    </ColorModeContext.Provider>

    )
}

export default Merch