import React, {useState} from 'react'
import {Box, IconButton, useTheme} from "@mui/material";
import { useContext } from 'react';
import { ColorModeContext , tokens } from '../../../theme'
import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"
import PeronsOutlinedIcon from "@mui/icons-material/PersonOutlined"
import SearchIcon from "@mui/icons-material/Search"
import LogoutIcon from '@mui/icons-material/Logout';
import { Navigate } from 'react-router-dom';


const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [logged, setLogged] = useState(false)




  function handleLogout(){
    fetch("https://myduka.onrender.com/clerk/logout",{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(()=>{
      sessionStorage.removeItem('clerk_id')
      setLogged(true)
    })
   
  }

  if(logged){
    return <Navigate to="/" />
  }


  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* Search Bar */}
      <Box
        display="flex"
        backgroundColor={colors.grey[700]}
        borderRadius="3px"
      >
      {/* Search  */}
        <InputBase sx={{ml: 2, flex: 1}} placeholder="Search" />
        <IconButton type="button" sx={{p:1}}>
          <SearchIcon/>
        </IconButton>
      </Box>

      {/* Icons */}
      <Box display="flex">
      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === "dark" ? (
          <DarkModeOutlinedIcon/>
        ): (
          <LightModeOutlinedIcon/>
        )}
        
      </IconButton>
      <IconButton>
        <NotificationsOutlinedIcon/>
      </IconButton>
      <IconButton>
        <SettingsOutlinedIcon/>
      </IconButton>

      <IconButton onClick={handleLogout}><LogoutIcon/> </IconButton>




      </Box>

    </Box>
  )
}

export default Topbar