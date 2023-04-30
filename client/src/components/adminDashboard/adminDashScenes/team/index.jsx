import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../adminthemes";
import { mockDataTeam } from "../../adminDashData/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../adminDashComponents/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';



const AdminTeam = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [access, setAccess] = useState()
  const [clerks, setClerks] = useState([])
  // const [stat, setStat] = useState(0)
  // const [clerkId, setClerkId] = useState()
  // const [condition, setCondition] = useState(true)


  let admin_id = sessionStorage.getItem('admin_id')

  let url =  `http://localhost:3000/admin/clerks/${admin_id}`

  let url2 = "http://localhost:3000/admin/clerks"




    useEffect(()=>{
    
      axios.get(url).then((response) => {
        setClerks(...clerks,response.data)
      });
    },[])

    console.log(clerks)

    // console.log(clerks)


    // if(condition){
    //   setStat(0)
    //   setAccess("activated")
    // }else{
    //   setStat(1)
    //   setAccess("deactivated")
    // }

    function handleDelete(id){
      axios.delete(`http://127.0.0.1:3000/clerk/${id}`)
      .then(()=>{
        setClerks((p)=>p.filter((b)=>b.id !== id))
      })
    }


    function handleActivation(id){
      axios.put(`http://127.0.0.1:3000/clerk/activation/${id}`,{
        access
      })
      .then((response)=>{
        console.log(response)
        setClerks((p)=>p.filter((b)=>b.id !== id))
        setClerks(...clerks,response.data)
      })
    }



  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "username",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "contact",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      renderCell: ({ row: { access, id } }) => {
        return (
          <>
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "ACTIVE"
                ? colors.greenAccent[100]
                : access === "DEACTIVATED"
                ? colors.greenAccent[200]
                : colors.greenAccent[200]
            }
            borderRadius="4px"
            style={{cursor: 'pointer'}}
            onClick={()=>{
              if(access==="ACTIVE"){
                setAccess(1)
                handleActivation(id)
              }else if(access === "DEACTIVATED"){
                setAccess(0)
                handleActivation(id)
              }
            }

            }
          >
            {/* {access === "clerk" && <AdminPanelSettingsOutlinedIcon />} */}
            {access === "ACTIVE" && <SecurityOutlinedIcon />}
            {access === "DEACTIVATED" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }} >
              {access}
            </Typography>
          </Box>
          </>
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
        <DataGrid checkboxSelection rows={clerks} columns={columns} />
      </Box>
    </Box>
  );
};

export default AdminTeam;
