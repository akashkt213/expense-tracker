import { category } from "@/constants/category";
import { icons } from "@/constants/icons";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const AddExpense = () => {
  const [activeTab, setActiveTab] = useState<"expense" | "income">("expense");
  // const [value, setValue] = useState<string>("");
  // const [title, setTitle] = useState<string>("");
  // const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const [form, setForm] = useState({
    amount: undefined as string | undefined,
    title: undefined as string | undefined,
    category: null as string | null,
  });

  const updateForm = (key: keyof typeof form, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const categories = [
    { id: "1", title: "Food & Drinks", icon: "food" },
    { id: "2", title: "Shopping", icon: "shopping" },
    { id: "3", title: "Transportation", icon: "transport" },
    { id: "4", title: "Entertainment", icon: "entertainment" },
    { id: "5", title: "Bills", icon: "bills" },
    { id: "6", title: "Other", icon: "ellipsis" },
  ];

  return (
    <View className="flex-1 px-6 pt-24 pb-10 bg-gray-50">
      <View className="bg-white rounded-2xl p-5 shadow-md">
        {/* Toggle Buttons */}
        <View className="flex flex-row items-center justify-between gap-3 mb-4">
          <TouchableOpacity
            onPress={() => setActiveTab("expense")}
            className={`flex-1 rounded-xl py-4 flex-row items-center justify-center gap-3 ${
              activeTab === "expense"
                ? "bg-[#e28743]"
                : "bg-white border border-gray-300"
            }`}
          >
            <Image
              source={icons.expense}
              className="size-6"
              tintColor={activeTab === "expense" ? "#fff" : "#000"}
            />
            <Text
              className={`text-lg font-semibold ${
                activeTab === "expense" ? "text-white" : "text-gray-900"
              }`}
            >
              Expense
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveTab("income")}
            className={`flex-1 rounded-xl py-4 flex-row items-center justify-center gap-3 ${
              activeTab === "income"
                ? "bg-[#e28743]"
                : "bg-white border border-gray-300"
            }`}
          >
            <Image
              source={icons.income}
              className="size-6"
              tintColor={activeTab === "income" ? "#fff" : "#000"}
            />
            <Text
              className={`text-lg font-semibold ${
                activeTab === "income" ? "text-white" : "text-gray-900"
              }`}
            >
              Income
            </Text>
          </TouchableOpacity>
        </View>

        {/* Amount Input */}
        <View className="mb-6">
          <Text className="text-gray-700 mb-2 font-medium">Amount</Text>
          <View className="bg-gray-100 rounded-xl px-4 h-14 justify-center shadow-sm">
            <TextInput
              value={form.amount}
              onChangeText={(text) => updateForm("amount", text)}
              placeholder="₹123"
              keyboardType="numeric"
              className="text-lg"
            />
          </View>
        </View>

        {/* Title Input */}
        <View className="mb-4">
          <Text className="text-gray-700 mb-2 font-medium">Title</Text>
          <View className="bg-gray-100 rounded-xl px-4 h-14 justify-center shadow-sm">
            <TextInput
              value={form.title}
              onChangeText={(text) => updateForm("title", text)}
              placeholder="Title"
              className="text-lg"
            />
          </View>
        </View>

        <View className="flex flex-row items-center gap-1 justify-start">
          <Image source={icons.tag} className="h-4 w-4" />
          <Text className="text-gray-700 font-medium">Category</Text>
        </View>

        <View className="flex flex-row items-center flex-wrap gap-2 mt-2">
          {categories?.map((item) => {
            const isSelected = form.category === item.id;

            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => updateForm("category", item.id)}
                className={`px-3 py-2 border border-black rounded-lg flex-row items-center gap-1 ${
                  isSelected ? "bg-[#e28743] text-white" : "bg-white"
                }`}
              >
                <Image source={category[item.icon]} className="h-4 w-4" />

                <Text
                  className={`text-sm ${
                    isSelected ? "text-white" : "text-black"
                  }`}
                >
                  {item.title}
                </Text>

                {isSelected && (
                  <TouchableOpacity
                    onPress={() => updateForm("category", null)}
                    className="ml-1"
                  >
                    <Image
                      source={category.x}
                      className="h-4 w-4"
                      tintColor="#fff"
                    />
                  </TouchableOpacity>
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity
          className="bg-[#e28743] mt-4 rounded-xl py-4 active:opacity-80"
          onPress={() => {
            console.log(form);
            updateForm("amount", null);
            updateForm("category", null);
            updateForm("title", null);
          }}
        >
          <Text className="text-center text-white text-lg font-semibold">
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddExpense;
