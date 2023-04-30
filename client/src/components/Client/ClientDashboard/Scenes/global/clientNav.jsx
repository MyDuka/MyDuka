import React, {useState, useEffect} from "react";
import './ClientNav.css'
import { Link, Navigate } from "react-router-dom";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import {Box, Typography, IconButton,} from '@mui/material';
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import AddchartIcon from '@mui/icons-material/Addchart';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import {AiOutlineUser} from "react-icons/ai"
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';


// import {IconButton} from "@mui/material";


function ClientNav(){

    const [img,setImg] = useState("https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png")
    const [clerk, setClerk] = useState()
    const [logged, setLogged] = useState(false)

    let clerk_id = sessionStorage.getItem("clerk_id")

    useEffect(()=>{
      fetch(`http://127.0.0.1:3000/clerks/${clerk_id}`)
      .then((r)=>r.json())
      .then((d)=>{
        setClerk(d.username)
        console.log(d.username)
        // setImg(d.image)
      })
    },[])

    function handleLogout(){
      fetch("http://127.0.0.1:3000/clerk/logout",{
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
                  {clerk}
                </Typography>
                <Typography variant="h5" >
                  Clerk
                </Typography>
              </Box>
            </Box>
                <div className="nav_list"> 
                <Link to="/clerk" className="nav_link active"> <i className='bx bx-grid-alt nav_icon'></i> <span className="nav_name">Dashboard</span> </Link> 
                <Link to="/clerk/products" className="nav_link"><i><ProductionQuantityLimitsIcon/></i>  <span className="nav_name">Products</span> </Link> 
                <Link to="/clerk/product/add" className="nav_link"> <i> <AddchartIcon/> </i> <span className="nav_name">Add Product</span> </Link> 
                <Link to="/clerk/stock/add" className="nav_link"> <i> <PostAddIcon/> </i> <span className="nav_name">Add Stock</span> </Link> 
                <Link to="/clerk/send/request" className="nav_link"> <i> <LibraryAddIcon/> </i> <span className="nav_name">Request Stock</span> </Link> 
                <Link to="/clerk/stock/requested" className="nav_link"> <i> <AssignmentLateIcon/> </i> <span className="nav_name">Requested</span> </Link>
                </div>
             <Typography variant="h5"  >
              Profile Update
            </Typography> 
            <Link to="/clerk/form/update" className="nav_link"> <i> <PersonOutlinedIcon />  </i> <span className="nav_name">Edit</span> </Link>
            <IconButton  className="nav_link" onClick={handleLogout}> <i> <LogoutIcon/> </i> <span className="so">Logout</span> </IconButton>
            </div> 
            
        </nav>
        </>
    )
}

export default ClientNav;