import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../adminthemes";
import { mockTransactions } from "../../adminDashData/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import DeleteIcon from "@mui/icons-material/Delete"
import Header from "../../adminDashComponents/Header";
import LineChart from "../../adminDashComponents/LineChart";
import GeographyChart from "../../adminDashComponents/GeographyChart";
import BarChart from "../../adminDashComponents/BarChart";
import StatBox from "../../adminDashComponents/StatBox";
import ProgressCircle from "../../adminDashComponents/ProgressCircle";
import UpcomingIcon from '@mui/icons-material/Upcoming';
import { Navigate } from "react-router";
import axios from 'axios'
import { useState, useEffect } from "react";

const AdminDashboard = ({user}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [items, setItems] = useState([])
  const [request, setRequest] = useState(false)
  const [totalInventory, setTotalInventory] = useState([])
  const [totalReceived, setTotalReceived] = useState([])
  const [totalSpoilt, setTotalSpoilt] = useState([])
  const [totalStocked, setTotalStocked] = useState([])
  const [clerks, setClerks] = useState([])


  
  const admin_id = sessionStorage.getItem('admin_id')


  useEffect(()=>{
    fetch("http://127.0.0.1:3000/received_items",{
      method: "GET",
      header: {
        "Content-Type": "application/json",
      },
    })
    .then((c)=> c.json())
    .then((d)=>{
      setItems(...items,d)
      setTotalReceived(...totalReceived, d.received)
      setTotalSpoilt(...totalSpoilt, d.spoilt)
      setTotalStocked(...totalStocked, d.stocked)
    })

    axios.get(`http://localhost:3000/admin/clerks/${admin_id}`)
    .then((response)=>{
      setClerks(...clerks,response.data)
    })

  },[])



  let sp = items?.map((i)=> i.spoilt)
  let rc = items?.map((i)=> i.received)
  let st = items?.map((i)=> i.stocked)

 
  // useEffect(()=>{
  //   items.map((i)=>{
  //     sp.push(i.spoilt)
  //     rc.push(i.received)
  //     st.push(i.stocked)
  //  })
  // },[items])

  console.log(items)
  console.log(sp)
  console.log(rc)
  console.log(st)


  const spoilt = sp.reduce((a,b)=> a+b, 0)
  const inventory =  rc.reduce((a,b)=>a+b,0)
  const stocked = st.reduce((a,b)=> a+b,0)
  const sold = (stocked+inventory) - spoilt

  // console.log(spoilt, inventory, stocked, sold)


  if(request){
    return <Navigate to="/admin/stock/requests"/>
  }



 



  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Adminstrator" subtitle={user ? `Welcome ${user.username}, to your dashboard` :"Welcome to your dashboard"} />

        <Box onClick={()=> setRequest(true) }>
          <Button
            sx={{
              backgroundColor: colors.greenAccent[300],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <UpcomingIcon  sx={{ mr: "10px" }} />
            Requests
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title = {sold}
            subtitle="Inventory Sold"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={inventory.toString()}
            subtitle="Inventory Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={ clerks.length }
            subtitle="Clerks"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title= {spoilt}
            subtitle="Spoilt Goods"
            progress="0.40"
            increase="-43%"
            icon={
              <DeleteIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                {`$${sold*100}`}
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Stock
            </Typography>
          </Box>
          {items?.map((item, i) => (
            <Box
              key={`${item.id}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {item.received}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {item.product.name}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{items.stocked}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                {item.payment_status}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              {`$${(sold*100)-(spoilt*70)}`}
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
