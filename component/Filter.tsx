import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function Filter() {
  
    const filterButton = [
    { id: "all", lebel: "All Chats" },
    { id: "group", lebel: "Group" },
    { id: "contact", lebel: "Contact" },
  ];
  const [active, setActive] = useState<string>("allChat");

  const changeColor = (button: string) => {
    setActive(button);
  };

  return (
    <View className="mt-5 mx-7 h-16 rounded-full flex flex-row justify-evenly items-center bg-slate-200">
      {filterButton.map((button) => (
        <TouchableOpacity
        key={button.id}
          className={`flex-1 h-full justify-center items-center rounded-full ${
            active === button.id ? "bg-blue-500" : ""
          }`}
          onPress={() => changeColor(button.id)}
        >
          <Text
            className={`text-xl ${
              active === "allChat" ? "text-white" : "text-black"
            }`}
          >
            {button.lebel}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
