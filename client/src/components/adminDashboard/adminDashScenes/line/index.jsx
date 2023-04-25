import { Box } from "@mui/material";
import Header from "../../adminDashComponents/Header";
import LineChart from "../../adminDashComponents/LineChart";

const AdminLine = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Inventory Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default AdminLine;
