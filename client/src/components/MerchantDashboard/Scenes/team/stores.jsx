import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../../theme";
import { mockDataTeam } from "../../adminDashData/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import Header from "../../adminDashComponents/Header";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';


import { useState, useEffect } from "react";
import axios from "axios";

const Stores = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const [access, setAccess] = useState("activated")
  const [stores, setStores] = useState([])
  const [storeId, setStoreId] =useState()
 


  let admin_id = localStorage.getItem('admin_id')

  let url =  `http://localhost:3000/clerks/${admin_id}`

  let url2 = "http://localhost:3000/stores"




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

    console.log(clerks)


   

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    // {
    //   field: "age",
    //   headerName: "Age",
    //   type: "number",
    //   headerAlign: "left",
    //   align: "left",
    // },
    {
      field: "phone",
      headerName: "Location",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "id",
      headerName: "View Products",
      flex: 1,
      renderCell: ({ row: { id } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={colors.redAccent[500]}
            borderRadius="4px"
          >
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }} >
             <ProductionQuantityLimitsIcon/> Products
            </Typography>
          </Box>
        );
      },
    },
  ];

    return (
    <Box m="20px">
      <Header title="Clerks" subtitle="Managing your clerks" />
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
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Stores;
