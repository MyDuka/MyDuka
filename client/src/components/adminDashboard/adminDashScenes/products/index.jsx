import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../adminthemes";
import { mockDataContacts } from "../../adminDashData/mockData";
import Header from "../../adminDashComponents/Header";
import { useTheme, Typography } from "@mui/material";
import {useState, useEffect} from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from "axios";

const AdminProducts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [products, setProducts] = useState([])



  useEffect(()=>{
    fetch("https://myduka.onrender.com/products",{
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


  function handleDelete(id){
    axios.delete(`https://myduka.onrender.com/products/${id}`)
    .then(()=>{
      setProducts((p)=>p.filter((b)=>b.id !== id))
    })
  }


  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    // { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "buying_price",
      headerName: "Buying Price",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "selling_price",
      headerName: "Selling Price",
      type: "number",
      headerAlign: "left",
      align: "left",
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
      headerName: "Remove",
      flex: 1,
      renderCell: (params) => {
        return (
          <>
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
            colors.greenAccent[200]}
            borderRadius="4px"
            onClick={()=>{
              handleDelete(params.row.id)
            }}
            style={{cursor: 'pointer'}}
          >
          <DeleteOutlineIcon />
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }} >
              "DELETE"
            </Typography>
          </Box>
          </>
        );
      },
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
          rows={products}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default AdminProducts;
