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

const AdminTeam = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const [access, setAccess] = useState("activated")
  const [clerks, setClerks] = useState([])
  // const [stat, setStat] = useState(0)
  // const [clerkId, setClerkId] = useState(0)
  // const [condition, setCondition] = useState(true)


  let admin_id = localStorage.getItem('admin_id')

  let url =  `http://localhost:3000/clerks/${admin_id}`

  let url2 = "http://localhost:3000/clerks"




    useEffect(()=>{
      fetch(url,{
        method: "GET",
        header: {
          "Content-Type": "application/json",
        },
      })
      .then((c)=> c.json())
      .then((d)=>{
        setClerks(...clerks,d)

      })
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

    




  //   useEffect(()=>{
  //     fetch(`http://localhost:3000/clerk/activation/${clerkId}`, {
  //       method: 'PATCH',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         status: stat,
  //       })
  //   })
  //   .then((r)=> r.json())
  //   .then((d)=>{
  //     console.log(d)
  //   })
  // },[stat,clerkId])
   

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
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "activated"
                ? colors.greenAccent[600]
                : access === "deactivated"
                ? colors.redAccent[700]
                : colors.redAccent[700]
            }
            borderRadius="4px"
          >
            {/* {access === "clerk" && <AdminPanelSettingsOutlinedIcon />} */}
            {access === "deactivated" && <SecurityOutlinedIcon />}
            {access === "activated" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }} >
              {access}
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

export default AdminTeam;
