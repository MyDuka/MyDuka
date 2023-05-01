import React, {useState, useEffect} from 'react'
import Header from '../../../Header'
import {Box, Button, IconButton, Typography, useTheme} from '@mui/material'
import { tokens } from '../../../../theme'
import {mockTransactions} from "../../Data/mockData"
import LineChart from "../../../LineChart"
import BarChart from "../../../BarChart"
import PieChart from "../../../PieChart"
import StatBox from "../../../MerchantDashboard/StatBox"
import ProgressCircle from  "../../../MerchantDashboard/ProgressCircle"
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import InventoryIcon from '@mui/icons-material/Inventory';
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DeleteIcon from '@mui/icons-material/Delete';
import GeographyChart from '../../../adminDashboard/adminDashComponents/GeographyChart'

import { useSelector } from 'react-redux'

const Dashboard = ({user}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const [items, setItems] = useState([])
  const [totalReceived, setTotalReceived] = useState([])
  const [totalSpoilt, setTotalSpoilt] = useState([])
  const [totalStocked, setTotalStocked] = useState([])
  const [stores, setStores] = useState([])



  const merchant_id = sessionStorage.getItem('merchant_id')

  let url = `http://localhost:3000/merchant/stores/${merchant_id}`

    useEffect(()=>{
      fetch(url,{
        method: "GET",
        header: {
          "Content-Type": "application/json",
        },
      })
      .then((c)=> c.json())
      .then((d)=>{
        setStores(...stores,d)

      })
    },[])


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
  },[])



  let sp = items?.map((i)=> i.spoilt)
  let rc = items?.map((i)=> i.received)
  let st = items?.map((i)=> i.stocked)

  console.log(items)
  console.log(sp)
  console.log(rc)
  console.log(st)


  const spoilt = sp.reduce((a,b)=> a+b, 0)
  const inventory =  rc.reduce((a,b)=>a+b,0)
  const stocked = st.reduce((a,b)=> a+b,0)
  const sold = (stocked+inventory) - spoilt



  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Merchant"
          subtitle= {user ? `Welcome ${user.username}, to your dashboard` :"Welcome to your dashboard"}
        />

<Box>
          <Button
            sx={{
              backgroundColor: colors.orangeAccent[200],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        mt="15px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="5px"
        >
          <StatBox
            title= {(inventory + stocked) - spoilt}
            subtitle="total stock"
            progress="0.75"
            increase="+14%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="5px"

        >
          <StatBox
            title= {spoilt}
            subtitle="Spoilt Goods"
            progress="0.50"
            increase="+21%"
            icon={
              <DeleteIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="5px"
        >
          <StatBox
            title={inventory}
            subtitle="Stock Received"
            progress="0.30"
            increase="+5%"
            icon={
              <InventoryIcon 
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        {/* <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="5px"

        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box> */}

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
                Sales
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                Ksh {((inventory + stocked) - spoilt)*64}
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
              Store by Store Report
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
              <Box color={colors.grey[100]}>{item.stocked}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                Ksh {item.receivedd*50}
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
        {/* <Box
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
        </Box> */}
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
              Your Stores
            </Typography>
          </Box>
          {stores?.map((store, i) => (
            <Box
              key={`${store.id}-${i}`}
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
                  {store.name}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {store.location}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{store.address}</Box>
              {/* <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${store.merchant.name}
              </Box> */}
            </Box>
          ))}
        </Box>


      </Box>
    </Box>
  )
}

export default Dashboard