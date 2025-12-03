import { icons } from "@/constants/icons";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

const _layout = () => {
  const TabIcon = ({ focused, icon, text }: any) => {
    if (focused)
      return (
        <ImageBackground
          // source={images.highlight}
          className="flex flex-row w-full flex-1 min-w-[112px] min-h-[60px] mt-4 justify-center items-center rounded-full overflow-hidden gap-1 bg-[#e28743]"
        >
          <Image source={icon} tintColor="#fff" className="size-5" />
          <Text className="text-md text-white font-bold">{text}</Text>
        </ImageBackground>
      );

    return (
      <View className="size-full justify-center items-center mt-4 rounded-full">
        <Image source={icon} tintColor="#A8B5DB" className="size-5" />
      </View>
    );
  };
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#fff",
          borderRadius: 50,
          marginHorizontal: 10,
          marginBottom: 20,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          // borderWidth: 1,
          // borderColor: "0f0d23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcon focused={focused} icon={icons.home} text={"Home"} />
            </>
          ),
        }}
      />

      <Tabs.Screen
        name="stats"
        options={{
          title: "Stats",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcon focused={focused} icon={icons.chart} text={"Stats"} />
            </>
          ),
        }}
      />

      <Tabs.Screen
        name="addexpense"
        options={{
          title: "Add Expense",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcon focused={focused} icon={icons.plus} text={"Add"} />
            </>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcon focused={focused} icon={icons.person} text={"Profile"} />
            </>
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
