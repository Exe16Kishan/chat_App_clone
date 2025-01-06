import Button from "@/component/Button";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className=" text-3xl text-red-300">welcome</Text>
      <Button/>
    </View>
  );
}
