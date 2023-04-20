import React from 'react'
import {Box} from "@mui/material"
import BarChart from '../../../BarChart'
import Header from '../../../Header'


const Bar = () => {
  return (
    <Box m="20px">
        <Header title="Bar Chart" subtitle="Total Sales Per Day"/>
        <Box height="75vh">
            <BarChart />
        </Box>
    </Box>
  )
}

export default Bar