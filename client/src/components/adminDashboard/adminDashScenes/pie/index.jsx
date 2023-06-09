import { Box } from "@mui/material";
import Header from "../../adminDashComponents/Header";
import PieChart from "../../adminDashComponents/PieChart";

const AdminPie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Inventory Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default AdminPie;
