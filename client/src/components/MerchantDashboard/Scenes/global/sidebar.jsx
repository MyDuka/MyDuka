import { useEffect, useState } from "react";
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




const MerchantSidebar = () => {

  const [img,setImg] = useState("https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png")
  const [merch, setMerch] = useState("Mimi")
  const [logged, setLogged] = useState(false)

  let merch_id = sessionStorage.getItem("merchant_id")
  useEffect(()=>{
    fetch(`http://127.0.0.1:3000/merchants/${merch_id}`)
    .then((r)=>r.json())
    .then((d)=>{
      setMerch(d.username)
      console.log(d.username)
      // setImg(d.image)
    })
  },[])


  function handleLogout(){
    fetch("http://127.0.0.1:3000/merchant/logout",{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(()=>{
      sessionStorage.removeItem('merchant_id')
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
             {merch}
            </Typography>
            <br/>
            <Typography variant="h5" >
              Merchant
            </Typography>
          </Box>
        </Box>
            <div className="nav_list"> 
            <Link to="/merchant" className="nav_link active"> <i> <HomeOutlinedIcon/></i> <span className="nav_name">Dashboard</span> </Link> 
            <Link to="/merchant/team" className="nav_link"><i><PeopleOutlinedIcon/></i>  <span className="nav_name">Admins</span> </Link> 
            <Link to="/merchant/stores" className="nav_link"> <i> <InventoryIcon/> </i> <span className="nav_name">Stores</span> </Link> 
            <Link to="/merchant/products" className="nav_link"> <i> <InventoryIcon/> </i> <span className="nav_name">Products</span> </Link> 
            <Link to="/merchant/form" className="nav_link"> <i> <PersonAddAltIcon/> </i> <span className="nav_name">Add Admin</span> </Link> 
            <Link to="/merchant/calendar" className="nav_link"> <i> <CalendarMonthIcon/> </i> <span className="nav_name">Calendar</span> </Link> 
            <Typography variant="h5" >
              Charts
            </Typography>
            <Link to="/merchant/bar" className="nav_link"> <i> <BarChartOutlinedIcon /> </i> <span className="nav_name">Bar</span> </Link>
            <Link to="/merchant/pie" className="nav_link"> <i><PieChartOutlineOutlinedIcon /></i> <span class="nav_name">Pie</span> </Link>
            <Link to="/merchant/line" className="nav_link"> <i> <TimelineOutlinedIcon /> </i> <span className="nav_name">Line</span> </Link>
            <Link to="/merchant/geography" className="nav_link"> <i> <MapIcon /> </i> <span className="nav_name">Map</span> </Link>
             </div>
             <Typography variant="h5" >
              Profile
            </Typography> 
            <Link to="/merchant/form/update" className="nav_link"> <i> <PersonOutlinedIcon />  </i> <span className="nav_name">Edit</span> </Link>
        </div> 
        <IconButton onClick={handleLogout}  className="nav_link"> <i> <LogoutIcon/> </i> <span className="so">Logout</span> </IconButton>
    </nav>
    </>


  );
};

export default MerchantSidebar;
