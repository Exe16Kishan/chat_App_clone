import { View, Text } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Nav() {
  return (
    <SafeAreaView className="flex flex-row justify-between p-4 bg-gray-100  rounded-lg shadow-lg">
     
      <View className="mb-4">
        <Text className="text-xl font-bold text-gray-800">Hello</Text>
        <Text className="text-lg font-medium text-gray-600 ml-3">Kishan</Text>
      </View>
      
      <View className="flex-row gap-7 items-center">
        <Ionicons name="search-circle-outline" size={40} color="#2563EB" />
        <Ionicons name="duplicate-outline" size={32} color="#2563EB" />
      </View>
    </SafeAreaView>
  );
}
