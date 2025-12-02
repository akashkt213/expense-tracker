import { icons } from "@/constants/icons";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import TransactionItem from "../components/transactions";
import "../global.css";

const transactionData = [
  {
    title: "Salary",
    category: "Income",
    amount: 5000.0,
    type: "income",
    date: "2025-05-23",
    icon: "money",
  },
  {
    title: "Going to Work",
    category: "Transportation",
    amount: -70.0,
    type: "expense",
    date: "2025-05-23",
    icon: "car",
  },
  {
    title: "Airpods",
    category: "Shopping",
    amount: -150.0,
    type: "expense",
    date: "2025-05-23",
    icon: "shopping-bag",
  },
  {
    title: "Freelance Work",
    category: "Income",
    amount: 500.0,
    type: "income",
    date: "2025-05-23",
    icon: "briefcase",
  },
  {
    title: "Cinema",
    category: "Entertainment",
    amount: -64.0,
    type: "expense",
    date: "2025-05-23",
    icon: "film",
  },
  {
    title: "Salary",
    category: "Income",
    amount: 5000.0,
    type: "income",
    date: "2025-05-23",
    icon: "money",
  },
  {
    title: "Going to Work",
    category: "Transportation",
    amount: -70.0,
    type: "expense",
    date: "2025-05-23",
    icon: "car",
  },
  {
    title: "Airpods",
    category: "Shopping",
    amount: -150.0,
    type: "expense",
    date: "2025-05-23",
    icon: "shopping-bag",
  },
  {
    title: "Freelance Work",
    category: "Income",
    amount: 500.0,
    type: "income",
    date: "2025-05-23",
    icon: "briefcase",
  },
  {
    title: "Cinema",
    category: "Entertainment",
    amount: -64.0,
    type: "expense",
    date: "2025-05-23",
    icon: "film",
  },
  {
    title: "Salary",
    category: "Income",
    amount: 5000.0,
    type: "income",
    date: "2025-05-23",
    icon: "money",
  },
  {
    title: "Going to Work",
    category: "Transportation",
    amount: -70.0,
    type: "expense",
    date: "2025-05-23",
    icon: "car",
  },
  {
    title: "Airpods",
    category: "Shopping",
    amount: -150.0,
    type: "expense",
    date: "2025-05-23",
    icon: "shopping-bag",
  },
  {
    title: "Freelance Work",
    category: "Income",
    amount: 500.0,
    type: "income",
    date: "2025-05-23",
    icon: "briefcase",
  },
  {
    title: "Cinema",
    category: "Entertainment",
    amount: -64.0,
    type: "expense",
    date: "2025-05-23",
    icon: "film",
  },
];

export default function Index() {
  const router = useRouter();

  return (
    <View className="p-6 flex-1 mt-14 mb-10">
      <View className="bg-[#e28743]/50 py-3 rounded-md mb-2 flex flex-row items-center justify-between px-2">
        <Text className="text-2xl font-normal">Welcome Akash!</Text>
        <TouchableOpacity
          className="bg-white rounded-full p-2"
          onPress={() => router.push("/addexpense")}
        >
          <Image source={icons.plus} />
        </TouchableOpacity>
      </View>
      <View className="bg-white items-start flex justify-between rounded-md p-3 elevation-sm h-[20vh]">
        <View className="flex items-center justify-center flex-1 w-full">
          <Text className="text-sm text-gray-500 font-medium">
            Total spendings
          </Text>
          <Text className="text-2xl font-bold">3289.44</Text>
        </View>

        <View className="bg-background flex flex-row items-center justify-between gap-2">
          <View className="flex-1 p-2 rounded-md flex items-center justify-between">
            <Text className="text-sm text-gray-500 font-medium">Income</Text>
            <Text className="text-md font-semibold">3289.44</Text>
          </View>
          <View className="w-[1px] h-[60%] bg-gray-300" />
          <View className="flex-1 p-2 rounded-md flex items-center justify-between">
            <Text className="text-sm text-gray-500 font-medium">Expense</Text>
            <Text className="text-md font-semibold">3289.44</Text>
          </View>
        </View>
      </View>

      <View className="py-5">
        <Text className="text-lg font-semibold">Recent Transactions</Text>
      </View>

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        {transactionData.map((item, index) => (
          <TransactionItem key={index} data={item} />
        ))}
      </ScrollView>
    </View>
  );
}
