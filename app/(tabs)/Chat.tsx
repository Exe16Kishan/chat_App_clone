import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Chat() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* chat nav */}
      <View className="flex-row items-center px-4 py-3 bg-white border-b border-gray-200">
        <TouchableOpacity className="p-2">
          <Ionicons name="arrow-back" size={24} color="#374151" />
        </TouchableOpacity>
        
        <View className="flex-row items-center flex-1 ml-2">
          <View className="h-10 w-10 rounded-full bg-gray-200 items-center justify-center">
            <Text className="text-gray-600 text-lg font-semibold">P</Text>
          </View>
          
          <View className="ml-3">
            <Text className="text-base font-semibold text-gray-900">Prince</Text>
            <Text className="text-sm text-gray-500">Online</Text>
          </View>
        </View>
        
        <TouchableOpacity className="p-2">
          <Ionicons name="ellipsis-vertical" size={24} color="#374151" />
        </TouchableOpacity>
      </View>

      {/* chat section */}
      <View className="flex-1 px-4 py-2 bg-gray-50">
        {/* Example message bubbles */}
        <View className="self-start max-w-[80%] bg-pink-200 rounded-2xl rounded-tl-none p-3 mb-2">
          <Text className="text-gray-800">Hey, how are you? , how are you? , how are you? , how are you? , how are you?</Text>
          <Text className="text-xs text-gray-500 mt-1">09:30 AM</Text>
        </View>
        
        <View className="self-end max-w-[80%] bg-blue-400 rounded-2xl rounded-tr-none p-3 mb-2">
          <Text className="text-white">I'm doing great, Thanks for asking.</Text>
          <Text className="text-xs text-blue-100 mt-1">09:31 AM</Text>
        </View>
      </View>

      {/* message Input */}
      <View className="p-4 bg-white border-t border-gray-200">
        <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-2">
          <TouchableOpacity className="p-2">
            <Ionicons name="happy-outline" size={24} color="#6B7280" />
          </TouchableOpacity>
          
          <TextInput 
            className="flex-1 mx-3 text-base text-gray-800"
            placeholder="Type a message..."
            placeholderTextColor="#9CA3AF"
          />
          
          <TouchableOpacity className="p-2">
            <Ionicons name="send" size={24} color="#3B82F6" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}