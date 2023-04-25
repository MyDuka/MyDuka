import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../adminthemes";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import SearchIcon from "@mui/icons-material/Search";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import { RiPencilLine } from "react-icons/ri";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";


import { FiLogOut} from "react-icons/fi";
import { Link } from "react-router-dom";


const AdminTopbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <IconButton ><Link className="admm" to="/admin/dashbord">< HomeOutlinedIcon /></Link></IconButton>
        <IconButton><Link className="admm"  to="/admin/team"><PeopleOutlinedIcon /></Link></IconButton>
        <IconButton><Link className="admm"  to="/admin/products"> <ContactPhoneIcon /></Link></IconButton>
        <IconButton ><Link className="admm"  to="/admin/form"><PersonAddAltIcon /></Link></IconButton>
        <IconButton ><Link className="admm"  to="/admin/bar"><BarChartOutlinedIcon /></Link></IconButton>
        <IconButton ><Link className="admm"  to="/admin/pie"><PieChartOutlineOutlinedIcon /></Link></IconButton>
        <IconButton><Link className="admm"  to="/admin/line"><TimelineOutlinedIcon /></Link></IconButton>   

{/* 
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton> */}
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <Link to="/admin/form/update"> <PersonOutlinedIcon /> </Link>
          
        </IconButton>
        <IconButton>
            <Link to="/"><FiLogOut /></Link>
        </IconButton>

      </Box>
    </Box>
  );
};

export default AdminTopbar;
