import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../../theme"
import { mockDataContacts } from "../../Data/mockData"
import Header from "../../../Header";
import { useTheme } from "@mui/material";
import {useState, useEffect} from 'react';

const AllStoresProducts = () => {
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
        field: "category",
        headerName: "Type",
        flex: 1,
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
      field: "supplier",
      headerName: "Supplier",
      flex: 1,
    },
    {
      field: `${products.store}`,
      headerName: "store",
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
          rows={products}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default AllStoresProducts;
