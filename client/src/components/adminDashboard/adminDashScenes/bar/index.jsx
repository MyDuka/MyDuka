import { Box } from "@mui/material";
import Header from "../../adminDashComponents/Header";
import BarChart from "../../adminDashComponents/BarChart";

const AdminBar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default AdminBar;
