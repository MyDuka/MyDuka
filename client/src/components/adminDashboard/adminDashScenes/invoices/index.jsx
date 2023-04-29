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
  const [payment, setPayment] = useState()


  useEffect(()=>{
    axios.get("http://127.0.0.1:3000/received_items")
    .then((response)=>{
      setStock(...stock,response.data)
    })
  },[])

  function handlePayment(id){
    axios.put(`"http://127.0.0.1:3000/payment/status/${id}`,{
      payment_status: payment
    })
    .then((response)=>{
    setStock((p)=>p.filter((b)=>b.id !== id))
    setStock(...stock,response.data)
  })
  }





  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "product",
      headerName: "product",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          {params.row.product.name}
         </Typography>
      ),
    },
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
    
    {
      field: "spoilt",
      headerName: "Spoilt",
      flex: 1,
    },
    {
      field: "created_at",
      headerName: "Date Recieved",
      flex: 1,
      // renderCell: (params) => {
      //   let b = params.split("T")
      //   return b[0]
      // },
    },
    {
      field: "payment_status",
      headerName: "Payment Status",
      flex: 1,
      renderCell: ({ row: { payment_status, id } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              payment_status === "PAID"
                ? colors.greenAccent[100]
                : payment_status === "UNPAID"
                ? colors.greenAccent[200]
                : colors.greenAccent[200]
            }
            borderRadius="4px"
            style={{cursor: "pointer"}}
            onClick={()=>{              
              if(payment_status==="PAID"){
                setPayment(1)
                handlePayment(id)
              }else if(payment_status==="UNPAID"){
                setPayment(0)
                handlePayment(id)
              }
            }
            }
          >
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }} >
              { payment_status}
            </Typography>
          </Box>
        );
      },
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
