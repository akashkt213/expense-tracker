import React from "react";
import { View } from "react-native";
import { RadarChart } from "react-native-gifted-charts";

const CustomRadarChart = ({ data }: any) => {
  return (
    <View>
      <RadarChart
        data={data.map((item) => item.value)}
        labels={data.map((item) => item.label)}
        dataLabels={data.map((item) => `₹${item.value}`)}
        labelConfig={{ stroke: "blue", fontWeight: "bold" }}
        dataLabelsConfig={{ stroke: "brown" }}
        dataLabelsPositionOffset={0}
        maxValue={Math.max(...data.map(item => item.value)) * 1.2}
      />
    </View>
  );
};

export default CustomRadarChart;
