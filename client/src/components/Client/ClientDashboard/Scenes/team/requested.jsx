import React, {useState, useEffect} from 'react'
import {Box, Typography, useTheme} from "@mui/material"
import {DataGrid} from "@mui/x-data-grid"
import { tokens } from '../../../theme'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import Header from '../../Header'
import axios from 'axios'



const Requested = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const  [requests, setRequests] = useState([])


  useEffect(()=>{
    axios.get("http://localhost:3000/requests")
    .then((response)=>{
        setRequests(...requests,response.data)
    })
  },[])






  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "product",
      headerName: "Product",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "supplier",
      headerName: "supplier",
      flex: 1,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 1,
    },
    {
      field: "",
      headerName: "Approval",
      flex: 1,
      renderCell: ({ row: { state } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              state === "ACCEPTED"
                ? colors.greenAccent[200]
                : state === "DECLINED"
                ? colors.greenAccent[100]
                : colors.greenAccent[100]
            }
            borderRadius="4px"

            onClick={()=>{
            }

            }
          >
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }} >
              {state}
            </Typography>
          </Box>
        );
      },
    },
    

  ];

  return (
    <Box m="20px">
      <Header title="Requests" subtitle="Request Approval" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={requests} columns={columns} />
      </Box>
    </Box>
  );
};

export default Requested;