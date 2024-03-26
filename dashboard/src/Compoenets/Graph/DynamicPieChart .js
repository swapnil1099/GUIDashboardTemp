import React, { useState } from "react";
import { PieChart, PieSeries } from "@mui/x-charts";

const data = [
  { name: "Apples", value: 10 },
  { name: "Oranges", value: 20 },
  { name: "Bananas", value: 30 },
];

const DynamicPieChart = () => {
  const [selectedSlice, setSelectedSlice] = useState(null);

  const handleSliceClick = (slice) => {
    setSelectedSlice(slice);
  };

  return (
    <PieChart
      data={data}
      onSliceClick={handleSliceClick}
      selectedSlice={selectedSlice}
    >
      <PieSeries />
    </PieChart>
  );
};

export default DynamicPieChart;