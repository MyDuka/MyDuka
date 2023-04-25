import { Box, useTheme } from "@mui/material";
import GeographyChart from "../../adminDashComponents/GeographyChart";
import Header from "../../adminDashComponents/Header";
import { tokens } from "../../adminthemes";

const AdminGeography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Store Location" subtitle="Geography Chart" />

      <Box
        height="75vh"
        border={`1px solid ${colors.greyAccent[100]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default AdminGeography;
