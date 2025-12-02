import { icons } from "@/constants/icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Transaction } from "../types/transaction"; // import type

interface Props {
  data: Transaction;
}

const TransactionItem: React.FC<Props> = ({ data }) => {
  const { title, category, amount, type, date } = data;

  const formattedAmount =
    (type === "income" ? "+$" : "-$") + Math.abs(amount).toFixed(2);

  const amountColor = type === "income" ? "text-green-500" : "text-red-500";

  return (
    <View className="flex flex-row items-center bg-white p-4 rounded-xl elevation-sm mb-3">
      {/* Left Icon Placeholder */}
      <View className="h-10 w-10 rounded-full bg-gray-200 items-center justify-center mr-3">
        <Text>Icon</Text>
      </View>

      {/* Middle Content */}
      <View className="flex flex-col flex-1">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-md font-medium">{title}</Text>
          <Text className={`text-md font-medium ${amountColor}`}>
            {formattedAmount}
          </Text>
        </View>

        <View className="flex flex-row items-center justify-between">
          <Text className="text-sm text-gray-600">{category}</Text>
          <Text className="text-sm text-gray-600">
            {new Date(date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => alert("Confirm deletion?")}
        className="h-10 w-10 rounded-full items-center justify-center ml-3"
      >
        <Image source={icons.trash} className="h-4 w-4" tintColor="#FF0000" />
      </TouchableOpacity>
    </View>
  );
};

export default TransactionItem;
