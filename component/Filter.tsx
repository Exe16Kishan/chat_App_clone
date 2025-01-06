import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function Filter() {
  const [active, setActive] = useState<string>("allChat");

  const changeColor = (button: string) => {
    setActive(button);
  };
  return (
    <View className="mt-5 mx-7 h-16 rounded-full flex flex-row justify-evenly items-center bg-slate-200">
      <TouchableOpacity
        className={`flex-1 h-full justify-center items-center rounded-full ${
            active === "allChat" ? "bg-blue-500" : ""
          }`}
        onPress={() => changeColor("allChat")}>
        <Text className={`text-xl ${active === "AllChat"? "text-white":"text-black"}`}>All Chats</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={`flex-1 h-full justify-center items-center rounded-full ${
            active === "group" ? "bg-blue-500":""
        }`}
        onPress={() => changeColor("group")}>
        <Text className={`text-xl ${active === "group"? "text-white":"text-black"}`} >Group</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        className={`flex-1 h-full justify-center items-center rounded-full ${
            active==="contact" ? "bg-blue-500":""
        }`}
        onPress={() => changeColor("contact")}>
        <Text className={`text-xl ${active === "contact"? "text-white":"text-black"}`}>Contact</Text>
      </TouchableOpacity>
    </View>
  );
}
