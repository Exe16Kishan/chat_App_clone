import { View, Text, TouchableOpacity } from 'react-native'
import { Image } from "expo-image"
import React from 'react'

export default function ChatCard({data}:any) {

  return (
    <TouchableOpacity className="flex-row justify-between items-center px-6 py-4 mt-2 bg-gray-100 rounded-xl mx-3 ">
      <View className="flex-row items-center gap-6">
        <Image
          source={require("../assets/images/profile.png")}
          contentFit="cover"
          style={{height:40, width:40}}
        />
        <View>
          <Text className="text-lg font-semibold text-gray-900">{data.name}</Text>
          <Text className="text-sm text-gray-500 mt-0.5">{data.msg}</Text>
        </View>
      </View>
      
      <View className="items-end">
        <Text className="text-xs text-gray-500">{data.time}</Text>
        {
          data.noti > 0 && 
          <View className="h-5 w-5 rounded-full bg-gray-600 items-center justify-center mt-1">
          <Text className="text-xs text-white font-medium">2</Text>
        </View>
        }
      </View>
    </TouchableOpacity>
  )
 }