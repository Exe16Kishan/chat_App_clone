import { View, Text } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Nav() {
  return (
    <SafeAreaView className="flex flex-row justify-between p-5 rounded-xl">
     
      <View className="">
        <Text className="text-xl font-bold text-gray-800">Hello</Text>
        <Text className="text-lg font-medium text-gray-600 ml-3">Kishan</Text>
      </View>
      
      <View className="flex-row gap-7 items-center">
        <Ionicons name="search-circle-outline" size={38} color="gray" />
        <Ionicons name="duplicate-outline" size={30} color="gray" />
      </View>
    </SafeAreaView>
  );
}
