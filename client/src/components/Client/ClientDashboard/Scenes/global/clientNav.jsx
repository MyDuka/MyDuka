import React, {useState} from "react";
import './ClientNav.css'
import { Link } from "react-router-dom";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import {Box, Typography, IconButton,} from '@mui/material';
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import AddchartIcon from '@mui/icons-material/Addchart';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import {AiOutlineUser} from "react-icons/ai"


// import {IconButton} from "@mui/material";


function ClientNav(){

    const [img,setImg] = useState("https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png")



    return(
        <>
        <nav className="nav">
            <div> 
                <Typography className="nav_logo"> 
                <i><AddBusinessIcon/></i> 
                <span className="nav_logo-name">MyDuka</span> </Typography>
                {/* <Typography className="nav_logo" variant="h3">
                  MyDuka
                </Typography> */}
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
                  John Doe
                </Typography>
                <Typography variant="h5" >
                  Clerk
                </Typography>
              </Box>
            </Box>
                <div className="nav_list"> 
                <Link to="/clerk" className="nav_link active"> <i className='bx bx-grid-alt nav_icon'></i> <span className="nav_name">Dashboard</span> </Link> 
                <Link to="/clerk/products" className="nav_link"><i><PeopleOutlinedIcon/></i>  <span className="nav_name">Products</span> </Link> 
                <Link to="/clerk/product/add" className="nav_link"> <i> <AddchartIcon/> </i> <span className="nav_name">Add Product</span> </Link> 
                <Link to="/clerk/stock/add" className="nav_link"> <i> <PostAddIcon/> </i> <span className="nav_name">Add Stock</span> </Link> 
                <Link className="nav_link"> <i></i> <span className="nav_name"></span> </Link>
                <Link className="nav_link"> <i></i> <span class="nav_name"></span> </Link> </div>
            </div> 
            <IconButton  className="nav_link"> <i> <LogoutIcon/> </i> <span className="so">SignOut</span> </IconButton>
        </nav>
        </>
    )
}

export default ClientNav;