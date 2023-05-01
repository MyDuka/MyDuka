import React, { useEffect, useState } from 'react'
import {Box, Typography, useTheme} from "@mui/material"
import {DataGrid} from "@mui/x-data-grid"
import { tokens } from '../../../theme'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import Header from '../../Header'
import axios from 'axios';

const ClerkProducts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [products, setProducts] = useState([])


  useEffect(()=>{
      axios.get("https://myduka.onrender.com/products")
      .then((response)=>{
        setProducts(...products,response.data)
      })
  },[])



  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Product",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "buying_cost",
      headerName: "Buying price",
      flex: 1,
    },
    {
      field: "selling_cost",
      headerName: "Selling price",
      flex: 1,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
    },
    {
      field: "supplier",
      headerName: "supplier",
      flex: 1,
    },
    {
      field: "",
      headerName: "store",
      flex: 1,
      renderCell: ({ row: { store } }) => {
        return (
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }} >
              {store.name}
            </Typography>
         
      )}
    },
  ];

  return (
    <Box m="20px">
      <Header title="Products" subtitle="Managing Products" />
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
        <DataGrid checkboxSelection rows={products} columns={columns} />
      </Box>
    </Box>
  );
};

export default ClerkProducts;