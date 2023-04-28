import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../adminthemes";
import { mockDataTeam } from "../../adminDashData/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import Header from "../../adminDashComponents/Header";
import { useState, useEffect } from "react";
import AddTaskIcon from '@mui/icons-material/AddTask';
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";
import './request.css'

const StockRequests = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [requests, setRequests] = useState([])
  const [state, setState] = useState()
  const [requestId, sertRequestId] = useState()
  const [decision, setDecision] = useState("")



  function handleRequests(){

    axios.put(`http://localhost:3000/requests/${requestId}`,{
      state,

    })
    .then((response)=>{
      setState((b)=> b.filter)
    })
    .catch((error)=>console.log(error))

  }






  let url = "http://localhost:3000/requests"




    useEffect(()=>{
          axios.get(url)
          .then((response)=>{
            setRequests(...requests, response.data)
          })
    },[])




  //   useEffect(()=>{
  //     axios.get(url)
  //     .then((response)=>{
  //       setRequests(...requests, response.data)
  //     })
  // },[state])

    console.log(requests)

   

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "product",
      headerName: "Product Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "quantity",
      headerName: "Stock Requested",
      flex: 1,
    },
    {
      field: "supplier",
      headerName: "Supplier",
      flex: 1,
    },
    {
      field: "state",
      headerName: "State",
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
                ? colors.greenAccent[100]
                : state === "DECLINED"
                ? colors.greenAccent[200]
                : colors.greenAccent[200]
            }
            borderRadius="4px"
          >
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }} >
              {/* {()=>{
                     state === "ACCEPTED"
                     ? setDecision("ACCEPTED")
                     : state === "DECLINED"
                     ? setDecision("DECLINED")
                     : setDecision("DECLINED")
              }}  */}
              {state}
            </Typography>
          </Box>
        );
      },
    },
     {
     field: "",
      headerName: "Decision",
      flex: 1,
      renderCell: () => {
        return (
              <>
           <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
             className="point"
            justifyContent="center"
            backgroundColor={colors.greenAccent[100]}
            borderRadius="4px"
          onClick={()=>{
            setState(0)
            handleRequests()
          }
        }
          >
            <AddTaskIcon  />
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }} >
            "ACCEPT"
            </Typography>
          </Box>

          <Box
               width="60%"
               m="0 auto"
               p="5px"
               display="flex"
               justifyContent="center"
               cursor="pointer"
               className="point"
               backgroundColor={colors.greenAccent[200]}
               borderRadius="4px"
               onClick={()=>{
                 setState(1)
                 handleRequests()
               }}
               >
   
               <CloseIcon />
               <Typography color={colors.grey[100]} sx={{ ml: "5px" }} >
                 "DECLINE"
               </Typography>
               </Box>


   

        </>
        );
      },
    },
   
  ];

    return (
    <Box m="20px">
      <Header title="Stock Requests" subtitle="Accept or Decline Incoming Restock Request" />
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

export default StockRequests;
