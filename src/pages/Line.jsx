import { Box } from "@mui/material";
import React from "react";
import { Header, LineChart } from "../components";

function Line() {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
}

export default Line;
