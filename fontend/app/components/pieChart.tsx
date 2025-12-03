import React from "react";
import { PieChart } from "react-native-gifted-charts";

const CustomPieChart = ({data}:{data:any}) => {
  return (
    <PieChart
      data={data}
      donut
      showText
      textColor="black"
      radius={150}
      innerRadius={90}
      textSize={10}
      focusOnPress
    />
  );
};

export default CustomPieChart;
