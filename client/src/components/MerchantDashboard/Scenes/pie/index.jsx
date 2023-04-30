import React from 'react'
import {Box} from "@mui/material"
import PieChart from '../../../PieChart'
import Header from '../../../Header'


const Pie = () => {
  return (
    <Box m="20px">
        <Header title="Pie Chart" subtitle="Total Sales Per Day"/>
        <Box height="75vh">
            <PieChart />
        </Box>
    </Box>
  )
}

export default Pie