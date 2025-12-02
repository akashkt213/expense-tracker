import React, { useMemo, useState } from "react";
import { View } from "react-native";
import DropdownComponent from "../components/customDropDown";
import CustomLineChart from "../components/lineChart";
import CustomPieChart from "../components/pieChart";
import CustomRadarChart from "../components/radarChart";

const Stats = () => {
  const transactions = useMemo(
    () => [
      { type: "add", amount: 1000 },
      { type: "spend", amount: 2000 },
      { type: "add", amount: 2000 },
      { type: "spend", amount: 900 },
      { type: "add", amount: 32 },
      { type: "spend", amount: 354 },
      { type: "add", amount: 500 },
      { type: "spend", amount: 300 },
    ],
    []
  );

  // Build line chart data
  const lineChartData = useMemo(() => {
    let balance = 0;
    return transactions.map((t) => {
      balance += t.type === "add" ? t.amount : -t.amount;
      return { value: balance };
    });
  }, [transactions]);

  // Build pie chart data
  const pieData = useMemo(() => {
    const totalAdded = transactions
      .filter((t) => t.type === "add")
      .reduce((sum, t) => sum + t.amount, 0);

    const totalSpent = transactions
      .filter((t) => t.type === "spend")
      .reduce((sum, t) => sum + t.amount, 0);

    return [
      { value: totalAdded, color: "#4CAF50", text: "Added" },
      { value: totalSpent, color: "#F44336", text: "Spent" },
    ];
  }, [transactions]);

  // Chart dropdown items
  const chartOptions = [
    { label: "Line Chart", value: "line" },
    { label: "Pie Chart", value: "pie" },
    { label: "Radar Chart", value: "radar" },
  ];

  const radarData = [
    { label: "Food & Drinks", value: 1000 },
    { label: "Shopping", value: 550 },
    { label: "Transportation", value: 420 },
    { label: "Entertainment", value: 602 },
    { label: "Bills", value: 300 },
    { label: "Other", value: 500 },
  ];

  const [selectedChart, setSelectedChart] = useState("line");

  // Render chart based on selected option
  const renderChart = () => {
    switch (selectedChart) {
      case "line":
        return <CustomLineChart data={lineChartData} />;
      case "pie":
        return <CustomPieChart data={pieData} />;
      case "radar":
        return <CustomRadarChart data={radarData} />;
      default:
        return null;
    }
  };

  return (
    <View className="flex-1 px-6 pt-24 pb-10 bg-gray-50 w-full">
      <DropdownComponent
        data={chartOptions}
        value={selectedChart}
        setValue={setSelectedChart}
      />
      <View className="mt-4 flex-1">{renderChart()}</View>
    </View>
  );
};

export default Stats;
