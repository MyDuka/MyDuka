import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../adminthemes";
import Header from "../../adminDashComponents/Header";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminStock = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [stock,setStock] = useState([])


  useEffect(()=>{
    axios.get("http://127.0.0.1:3000/received_items")
    .then((response)=>{
      setStock(...stock,response.data)
    })
  },[])






  const columns = [
    { field: "id", headerName: "ID" },
    // {
    //   field: "",
    //   headerName: "Product Name",
    //   flex: 1,
    //   cellClassName: "name-column--cell",
    // },
    {
      field: "received",
      headerName: "received",
      flex: 1,
    },
    {
      field: "stocked",
      headerName: "Email",
      flex: 1,
    },
    // {
    //   field: "product",
    //   headerName: "product",
    //   flex: 1,
    //   renderCell: (params) => (
    //     <Typography color={colors.greenAccent[500]}>
    //       ${params.row.product}
    //     </Typography>
    //   ),
    // },
    {
      field: "spoilt",
      headerName: "Spoilt",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="Stock" subtitle="List of Received" />
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
        <DataGrid checkboxSelection rows={stock} columns={columns} />
      </Box>
    </Box>
  );
};

export default AdminStock;
