import React, { useState } from "react";

const SalesReport = () => {
  const [reportType, setReportType] = useState("daily");

  const handleReportTypeChange = (e) => {
    setReportType(e.target.value);
  };

  return (
    <div>
      <h2>Sales Report</h2>
      <select value={reportType} onChange={handleReportTypeChange}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
      <p>You selected {reportType} report</p>
      {/* display sales report data based on selected report type */}
    </div>
  );
};

export default SalesReport;