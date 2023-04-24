import React from 'react'
import {Box, Typography, useTheme} from "@mui/material"
import {DataGrid} from "@mui/x-data-grid"
import { tokens } from '../../../../theme'
import {mockDataTeam} from '../../Data/mockData'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import Header from '../../../Header'

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Product",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "buyingcost",
      headerName: "Buying price",
      flex: 1,
    },
    {
      field: "sellingcost",
      headerName: "Selling price",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Product Status",
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
              access === "paid"
                ? colors.greenAccent[600]
                : access === "not paid"
                ? colors.orangeAccent[300]
                : colors.orangeAccent[300]
            }
            borderRadius="4px"
          >
            {access === "paid" && <AttachMoneyIcon />}
            {access === "not paid" && <MoneyOffIcon />}
            {/* {access === "not paid" && <LockOpenOutlinedIcon />} */}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="PRODUCTS" subtitle="Managing Products" />
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

export default Team;