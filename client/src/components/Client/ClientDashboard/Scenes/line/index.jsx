import React from 'react'
import {Box} from "@mui/material"
import LineChart from '../../../LineChart'
import Header from '../../../Header'


const Line = () => {
  return (
    <Box m="20px">
        <Header title="Line Chart" subtitle="Total Sales Per Day"/>
        <Box height="75vh">
            <LineChart />
        </Box>
    </Box>
  )
}

export default Line 