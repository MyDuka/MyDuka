import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../adminthemes";
import { mockDataTeam } from "../../adminDashData/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import Header from "../../adminDashComponents/Header";
import { useState, useEffect } from "react";
import AddTaskIcon from '@mui/icons-material/AddTask';
import CloseIcon from '@mui/icons-material/Close';

const StockRequests = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [requests, setRequests] = useState([])







  let url = "http://localhost:3000/requests"




    useEffect(()=>{
      fetch(url,{
        method: "GET",
        header: {
          "Content-Type": "application/json",
        },
      })
      .then((c)=> c.json())
      .then((d)=>{
        setRequests(...requests,d)

      })
    },[])

    console.log(requests)

   

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Product Name",
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
      headerName: "Stock Requested",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Supplier",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Decision",
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
              access === "accept"
                ? colors.greenAccent[600]
                : access === "decline"
                ? colors.redAccent[700]
                : colors.redAccent[700]
            }
            borderRadius="4px"
          >
            {/* {access === "clerk" && <AdminPanelSettingsOutlinedIcon />} */}
            {access === "decline" && <AddTaskIcon  />}
            {access === "accept" && <CloseIcon />}
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

export default StockRequests;
