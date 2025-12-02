import React from "react";
import { Text, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";

const CustomLineChart = ({data}:{data:any}) => {
  return (
    <LineChart
      areaChart
      data={data}
      isAnimated
      animationDuration={1200}
      curved
      pointerConfig={{
        pointerStripUptoDataPoint: true,
        pointerStripColor: "black",
        pointerStripWidth: 2,
        strokeDashArray: [2, 5],
        pointerColor: "transparent",
        radius: 0,
        pointerLabelWidth: 100,
        pointerLabelHeight: 120,
        pointerComponent: () => null,
        pointerLabelComponent: (items) => {
          console.log(items);
          return (
            <View className="h-24 w-fit bg-[#282C3E] border border-s p-3 flex flex-row">
              <Text className="text-white text-sm font-medium">
                {items[0]?.value}
              </Text>
            </View>
          );
        },
      }}
      // AXIS COLORS
      yAxisColor="black"
      xAxisColor="black"
      // AREA FILL
      startOpacity={0.8}
      endOpacity={0.3}
      startFillColor="rgba(0, 200, 0, 0.5)"
      endFillColor="rgba(200, 0, 0, 0.5)"
    />
  );
};

export default CustomLineChart;
