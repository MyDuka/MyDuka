import React from 'react'
import {Box, Typography, useTheme} from "@mui/material"
import {DataGrid} from "@mui/x-data-grid"
import { tokens } from '../../../../theme'
// import {mockDataTeam} from '../../Data/mockData'
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
// import DoneIcon from '@mui/icons-material/Done';
import Header from '../../../Header'
import { useEffect, useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from 'axios';



const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [admins, setAdmins] = useState([])
    const [access, setAccess] = useState()


    const merchant_id = sessionStorage.getItem('merchant_id')


  useEffect(()=>{
    fetch(`https://myduka.onrender.com/merchant/admins/${merchant_id}`,{
      method: "GET",
      headers:{
        "Content-Type": "application/json",
      }
    })
    .then((r)=>r.json())
    .then((d)=>{
      setAdmins(...admins,d)
    })
  },[])


  function handleDelete(id){
    axios.delete(`https://myduka.onrender.com/admins/${id}`)
    .then(()=>{
      setAdmins((p)=>p.filter((b)=>b.id !== id))
    })
  }


  function handleActivation(id){
    axios.put(`https://myduka.onrender.com/admin/activation/${id}`,{
      access
    })
    .then((response)=>{
      setAdmins((p)=>p.filter((b)=>b.id !== id))
      setAdmins(...admins,response.data)
    })
  }

  console.log(admins)



    const columns = [
      { field: "id", headerName: "ID" },
      {
        field: "username",
        headerName: "Name",
        flex: 1,
        cellClassName: "name-column--cell",
      },
      {
        field: "email",
        headerName: "Email",
        flex: 1,
      },
      {
        field: "access",
        headerName: "Account Status ",
        flex: 1,
        renderCell: ({ row: {access, id} }) => {
          return (
            <Box
              width="60%"
              m="10 auto"
              p="5px"
              display="flex"
              justifyContent="center"
              style={{cursor: "pointer"}}
              backgroundColor={
                access === "ACTIVE"
                  ? colors.blueAccent[100]
                  : access === "DEACTIVATED"
                  ? colors.greenAccent[200]
                  : colors.greenAccent[200]
              }
              borderRadius="4px"
              onClick={()=>{
                if(access==="ACTIVE"){
                  setAccess(1)
                  handleActivation(id)
                }else if(access==="DEACTIVATED"){
                  setAccess(0)
                  handleActivation(id)
                }
               
              }}
            >
              {access === "ACTIVE" && <AdminPanelSettingsOutlinedIcon />}
              {access === "DEACTIVED" && <LockOpenOutlinedIcon />}
              <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                {access}
              </Typography>
            </Box>
          );
        },
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
              style={{cursor: "pointer"}}
              borderRadius="4px"
              onClick={()=>{
                handleDelete(params.row.id)
              }}
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
        <Header title="Admins" subtitle="Manage Administrators" />
        <Box
          m="40px 0 0 0"
          height="65vh"
          width="160vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.grey[100],
              fontSize: "13px",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.purpleAccent[200],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.purpleAccent[200],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.grey[200]} !important`,
            },
          }}
        >
          <DataGrid checkboxSelection rows={admins} columns={columns} />
        </Box>
      </Box>
    );
  };

export default Team