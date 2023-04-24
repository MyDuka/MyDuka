import React, { useState } from "react";
//react pro sidebar components
// import './sidebar.css'
import {
ProSidebar,
Menu,
MenuItem,
SidebarHeader,
SidebarFooter,
SidebarContent,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
//icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { SiApacheairflow } from "react-icons/si";
import { GiAbstract050 } from "react-icons/gi";
//sidebar css from react-pro-sidebar module
import "react-pro-sidebar/dist/css/styles.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";











const Sidenav = () => {
//menuCollapse state using useState hook
const [menuCollapse, setMenuCollapse] = useState(false)
//custom function that will change menucollapse state from false to true and true to false
const menuIconClick = () => {
//condition checking to change state from true to false and vice versa
menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
};
return (
<>
<div id="header">
{/* collapsed props to change menu size using menucollapse state */}
<ProSidebar collapsed={menuCollapse}>
<SidebarHeader>
<div className="logotext">
{/* Icon change using menucollapse state */}
<p>{menuCollapse ? <GiAbstract050 /> : <SiApacheairflow /> }</p>
</div>
<div className="closemenu" onClick={menuIconClick}>
{/* changing menu collapse icon on click */}
{menuCollapse ? (
<FiArrowRightCircle/>
) : (
<FiArrowLeftCircle/>
)}
</div>
</SidebarHeader>
<SidebarContent>
<Menu iconShape="square">
<MenuItem active={true} icon={<FiHome />}>
ADMIN
</MenuItem>
<MenuItem icon={< HomeOutlinedIcon />}><Link to="/">Dashboard</Link></MenuItem>
<MenuItem icon={<PeopleOutlinedIcon />}><Link to="/team">Manage Clerks</Link></MenuItem>
<MenuItem icon={<RiPencilLine />}><Link to="Contacts"> Contacts Information </Link></MenuItem>
<MenuItem icon={<PersonOutlinedIcon />}><Link to="/form">Add clerk</Link></MenuItem>
<MenuItem icon={<BarChartOutlinedIcon />}><Link to="/bar">Bar Chart</Link></MenuItem>
<MenuItem icon={<PieChartOutlineOutlinedIcon />}><Link to="/pie">Pie Chart</Link></MenuItem>
<MenuItem icon={<TimelineOutlinedIcon />}><Link to="/line">Line chart</Link></MenuItem>

</Menu>
</SidebarContent>
<SidebarFooter>
<Menu iconShape="square">
<MenuItem icon={<FiLogOut />}>Logout</MenuItem>
</Menu>
</SidebarFooter>
</ProSidebar>
</div>
</>
);
}
export default Sidenav