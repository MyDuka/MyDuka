import { useState, useEffect } from "react";
import { Box, IconButton, Typography} from "@mui/material";
import { Link, Navigate } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MapIcon from '@mui/icons-material/Map';




const AdminSidebar = () => {

  const [img,setImg] = useState("https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png")
  const [logged, setLogged] = useState(false)
  const [admin, setAdmin] = useState()


  let admin_id = sessionStorage.getItem("admin_id")

  useEffect(()=>{
    fetch(`http://127.0.0.1:3000/admins/${admin_id}`)
    .then((r)=>r.json())
    .then((d)=>{
      setAdmin(d.username)
      console.log(d.username)
      // setImg(d.image)
    })
  },[])





  function handleLogout(){
    fetch("/admin/logout",{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(()=>{
      sessionStorage.removeItem('admin_id')
      setLogged(true)
    })
    
   
  }

  if(logged){
    return <Navigate to="/" />
  }

  return (

    <>
    <nav className="nav">
        <div> 
            <Typography className="nav_logo"> 
            <i><AddBusinessIcon/></i> 
            <span className="nav_logo-name">MyDuka</span> </Typography>
          
            <br/>
            <br/>
            <Box mb="25px">
          <Box display="flex" justifyContent="center" alignItems="center">
            <img
              alt="profile-user"
              width="100px"
              height="100px"
              src={img}
              style={{ cursor: "pointer", borderRadius: "50%" }}
            />
     
          </Box>
          <Box textAlign="center">
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ m: "10px 0 0 0" }}
            >
             {admin}
            </Typography>
            <Typography variant="h5" >
              Admin
            </Typography>
          </Box>
        </Box>
            <div className="nav_list"> 
            <Link to="/admin/dashbord" className="nav_link active"> <i> <HomeOutlinedIcon/></i> <span className="nav_name">Dashboard</span> </Link> 
            <Link to="/admin/team" className="nav_link"><i><PeopleOutlinedIcon/></i>  <span className="nav_name">Clerks</span> </Link> 
            <Link to="/admin/products" className="nav_link"> <i> <InventoryIcon/> </i> <span className="nav_name">Products</span> </Link> 
            <Link to="/admin/form" className="nav_link"> <i> <PersonAddAltIcon/> </i> <span className="nav_name">Add Clerk</span> </Link> 
            <Link to="/admin/calendar" className="nav_link"> <i> <CalendarMonthIcon/> </i> <span className="nav_name">Calendar</span> </Link> 
            <br/>
            <Typography variant="h5" >
              Charts
            </Typography>
            <Link to="/admin/bar" className="nav_link"> <i> <BarChartOutlinedIcon /> </i> <span className="nav_name">Bar</span> </Link>
            <Link to="/admin/pie" className="nav_link"> <i><PieChartOutlineOutlinedIcon /></i> <span class="nav_name">Pie</span> </Link>
            <Link to="/admin/line" className="nav_link"> <i> <TimelineOutlinedIcon /> </i> <span className="nav_name">Line</span> </Link>
            <Link to="/admin/geography" className="nav_link"> <i> <MapIcon /> </i> <span className="nav_name">Map</span> </Link>
             </div>
             <br/>
             <Typography variant="h5" >
              Profile Update
            </Typography> 
            <Link to="/admin/form/update" className="nav_link"> <i> <PersonOutlinedIcon />  </i> <span className="nav_name">Edit</span> </Link>

        </div> 
        <br/>
        <IconButton onClick={handleLogout}  className="nav_link"> <i> <LogoutIcon/> </i> <span className="so">Logout</span> </IconButton>
    </nav>
    </>


  );
};

export default AdminSidebar;
