import React from 'react'
import {Box, Typography, useTheme} from "@mui/material"
import {DataGrid} from "@mui/x-data-grid"
import { tokens } from '../../../../theme'
import {mockDataTeam} from '../../Data/mockData'
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import DoneIcon from '@mui/icons-material/Done';
import Header from '../../../Header'

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
      { field: "id", headerName: "ID" },
      {
        field: "name",
        headerName: "Name",
        flex: 1,
        cellClassName: "name-column--cell",
      },
    //   {
    //     field: "age",
    //     headerName: "Age",
    //     type: "number",
    //     headerAlign: "left",
    //     align: "left",
    //   },
    //   {
    //     field: "phone",
    //     headerName: "Phone Number",
    //     flex: 1,
    //   },
      {
        field: "email",
        headerName: "Email",
        flex: 1,
      },
      {
        field: "accessLevel",
        headerName: "Account Status ",
        flex: 1,
        renderCell: ({ row: { status} }) => {
          return (
            <Box
              width="60%"
              m="10 auto"
              p="5px"
              display="flex"
              justifyContent="center"
              backgroundColor={
                status === "active"
                  ? colors.greenAccent[400]
                  : status === "deactivated"
                  ? colors.grey[100]
                  : colors.grey[700]
              }
              borderRadius="4px"
            >
              {status === "active" && <DoneIcon />}
              {status === "de-activated" && <LockOpenOutlinedIcon />}
              <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                {status}
              </Typography>
            </Box>
          );
        },
      },
    ];
  
    return (
      <Box m="20px">
        <Header title="TEAM" subtitle="Manage Administrators" />
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
          <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
        </Box>
      </Box>
    );
  };

export default Team