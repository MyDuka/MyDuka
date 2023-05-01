import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../adminthemes";
import { mockBarData as data } from "../adminDashData/mockData";
import { useState, useEffect } from "react";

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [items, setItems] = useState([])


    useEffect(()=>{
      fetch("https://myduka.onrender.com/received_items",{
        method: "GET",
        header: {
          "Content-Type": "application/json",
        },
      })
      .then((c)=> c.json())
      .then((d)=>{
        setItems(...items,d)
      })
    },[])


  
    return (
      <ResponsiveBar
        data={items}
        theme={{
          // allows you to change color theme of the chart
          axis: {
            domain: {
              line: {
                stroke: colors.grey[100],
              },
            },
            legend: {
              text: {
                fill: colors.grey[100],
              },
            },
            ticks: {
              line: {
                stroke: colors.grey[100],
                strokeWidth: 1,
              },
              text: {
                fill: colors.grey[100],
              },
            },
          },
          legends: {
            text: {
              fill: colors.grey[100],
            },
          },
        }}
        keys={["received", "stocked", "spoilt"]}
        indexBy= "product.name"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        borderColor={{
          from: "color",
          modifiers: [["darker", "1.6"]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 90,
          legend: isDashboard ? undefined : "product", // changed
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? undefined : "items", // changed
          legendPosition: "middle",
          legendOffset: -40,
        }}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        barAriaLabel={function (e) {
          return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
        }}
      />
    );
};

export default BarChart;
