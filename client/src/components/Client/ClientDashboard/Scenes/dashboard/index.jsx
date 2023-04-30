import React, { useState } from 'react'
import Header from '../../Header'
import {Box, Button, IconButton, Typography, useTheme} from '@mui/material'
import { tokens } from '../../../theme'
import {mockTransactions} from "../../Data/mockData"
import StatBox from "../../Statbox"
import ProgressCircle from '../../ProgressCircle'
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DeleteIcon from '@mui/icons-material/Delete';
import { Navigate } from 'react-router-dom'

const ClerkDashboard = ({user}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [request, setRequest] = useState(false)








if(request){
  return <Navigate to="/clerk/send/request" />
}





  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Clerk" subtitle={user ? `Welcome ${user.username}, to your dashboard` :"Welcome to your dashboard"}/>

        <Box
        onClick={()=>{

        }}
        >
          <Button
            sx={{
              backgroundColor: colors.orangeAccent[300],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={()=>setRequest(true)}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Stock Request
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
      
        <Box
          gridColumn="span 5"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
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
          gridColumn="span 5"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32"
            subtitle="Spoilt Goods"
            progress="0.30"
            increase="+5%"
            icon={
              <DeleteIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 12"
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
              Product Requests
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
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
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>

              <Box color={colors.grey[100]}>${transaction.buyingcost}</Box>
                            
              <Box
                backgroundColor={colors.orangeAccent[300]}
                p="5px 10px"
                borderRadius="4px"
              >
                <Button>
                {transaction.cost}
                </Button>
                
                
              </Box>
            </Box>
          ))}
        </Box>

      </Box>
    </Box>
  );
};

export default ClerkDashboard;