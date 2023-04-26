import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../adminthemes";
import { mockDataContacts } from "../../adminDashData/mockData";
import Header from "../../adminDashComponents/Header";
import { useTheme } from "@mui/material";
import {useState, useEffect} from 'react';

const AdminProducts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [products, setProducts] = useState([])



  useEffect(()=>{
    fetch("http://127.0.0.1:3000/products",{
      method: "GET",
      header: {
        "Content-Type": "application/json",
      },
    })
    .then((c)=> c.json())
    .then((p)=>{
      setProducts(...products,p)

    })
  },[])

  console.log(products)


  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Buying Price",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "",
      headerName: "Selling Price",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Category",
      flex: 1,
    },
    {
      field: "address",
      headerName: "supplier",
      flex: 1,
    },
    {
      field: "city",
      headerName: "image",
      flex: 1,
    },
    
  ];

  return (
    <Box m="20px">
      <Header
        title="Products"
        subtitle="List of Store Products"
      />
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default AdminProducts;
