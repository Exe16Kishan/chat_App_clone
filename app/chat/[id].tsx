import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from "react-native";
import React, { useRef, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import useWebSocket, { ChatMessage } from "@/hooks/useWebSocket";
import { useLocalSearchParams } from "expo-router";

export default function Chat() {
  const scrollViewRef = useRef<ScrollView>(null);
  const { id } = useLocalSearchParams<{ id: string }>();
  const [inputMessage, setInputMessage] = useState("");
  const { sendMessage, status, error, message } = useWebSocket(`ws://192.168.184.16:8000?name=kishan`); // replace the ip from ur local pc ip
  const currentUserId = "kishan"; // hardcoded replace this with your logic to fetch the current user ID 

  // Handling input
  const handleInput = (msg: string) => {
    if (!inputMessage.trim()) return;
    const messageObject: ChatMessage = {
      type: "chat",
      content: inputMessage.trim(),
      senderId: currentUserId,
      to: id,
      timestamp: new Date().toISOString(),
    };
    sendMessage(messageObject);
    setInputMessage("");
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Chat nav */}
      <View className="flex-row items-center px-4 py-3 bg-white border-b border-gray-200">
        <TouchableOpacity className="p-2">
          <Ionicons name="arrow-back" size={24} color="#374151" />
        </TouchableOpacity>
        <View className="flex-row items-center flex-1 ml-2">
          <View className="h-10 w-10 rounded-full bg-gray-200 items-center justify-center">
            <Text className="text-gray-600 text-lg font-semibold">P</Text>
          </View>
          <View className="ml-3">
            <Text className="text-base font-semibold text-gray-900">{id}</Text>
            <Text className="text-sm text-gray-500">{status}</Text>
          </View>
        </View>
        <TouchableOpacity className="p-2">
          <Ionicons name="ellipsis-vertical" size={24} color="#374151" />
        </TouchableOpacity>
      </View>

      {/* Chat section */}
      <ScrollView
        ref={scrollViewRef}
        className="flex-1 px-4 py-2"
        contentContainerStyle={{ flexGrow: 1 }}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
      >
        {message?.map((msg, index) => {
          if (msg.type === "chat") {
            const isSentByMe = msg.senderId === currentUserId;

            return (
              <View
                key={`${msg.timestamp}-${index}`}
                className={`
                  max-w-[80%] 
                  mb-2
                  ${isSentByMe 
                    ? "self-end bg-blue-400 rounded-2xl rounded-tr-none" 
                    : "self-start bg-pink-200 rounded-2xl rounded-tl-none"}
                  p-3
                `}
              >
                <Text className={isSentByMe ? "text-white" : "text-gray-800"}>
                  {msg.content}
                </Text>
                <Text className={`text-xs mt-1 ${isSentByMe ? "text-blue-100" : "text-gray-500"}`}>
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </Text>
              </View>
            );
          }
          return null;
        })}
      </ScrollView>

      {/* Message input */}
      <View className="p-4 bg-white border-t border-gray-200">
        <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-2">
          <TouchableOpacity className="p-2">
            <Ionicons name="happy-outline" size={24} color="#6B7280" />
          </TouchableOpacity>
          <TextInput
            className="flex-1 mx-3 text-base text-gray-800"
            placeholder="Type a message..."
            placeholderTextColor="#9CA3AF"
            value={inputMessage}
            onChangeText={(text) => setInputMessage(text)}
          />
          <TouchableOpacity className="p-2" onPress={() => handleInput(inputMessage)}>
            <Ionicons name="send" size={24} color="#3B82F6" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
