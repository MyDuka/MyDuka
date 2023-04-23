import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminTopbar from './adminDashScenes/global/Topbar'
import AdminSidebar from "./adminDasScenes/global/Sidebar";
// import AdminDashboard from "./adminDashScenes/dashboard";
// import AdminTeam from "./adminDashScenes/team";
// import AdminInvoices from "./adminDashScenes/invoices";
// import AdminContacts from "./adminDashScenes/contacts";
// import AdminBar from "./adminDashScenes/bar";
// import AdminForm from "./adminDashScenes/form";
// import AdminLine from "./adminDashScenes/line";
// import AdminPie from "./adminDashScenes/pie";
// import AdminFAQ from "./adminDashScenes/faq";
// import AdminGeography from "./adminDashScenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
// import AdminCalendar from "./adminDashScenes/calendar/calendar";

function Admin() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <AdminSidebar isSidebar={isSidebar} />
          <main className="content">
            <AdminTopbar setIsSidebar={setIsSidebar} />

            <Outlet/>

            {/* <Routes>
              <Route path="/" element={<AdminDashboard />} />
              <Route path="/team" element={<AdminTeam />} />
              <Route path="/contacts" element={<AdminContacts />} />
              <Route path="/invoices" element={<AdminInvoices />} />
              <Route path="/form" element={<AdminForm />} />
              <Route path="/bar" element={<AdminBar />} />
              <Route path="/pie" element={<AdminPie />} />
              <Route path="/line" element={<AdminLine />} />
              <Route path="/faq" element={<AdminFAQ />} />
              <Route path="/calendar" element={<AdminCalendar />} />
              <Route path="/geography" element={<AdminGeography />} />
            </Routes> */}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Admin;
