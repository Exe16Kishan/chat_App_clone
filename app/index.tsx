import ChatCard from "@/component/ChatCard";
import Filter from "@/component/Filter";
import Nav from "@/component/Nav";
import { ScrollView, Text, View } from "react-native";
const dummyData = [
  {name:"Prince" , msg :" lets see" , time :"09:00 AM", noti :0},
  {name:"Aman" , msg :" na aaunga" , time :"09:05 AM", noti :0},
  {name:"Cutie Bhai" , msg :" okk bhai" , time :"11:00 AM", noti :4},
  {name:"Abhisek" , msg :" kal milna" , time :"08:00 PM", noti :5},
  {name:"Bawa" , msg :" na hoii game" , time :"10:00 PM", noti :2},
  {name:"Mohit" , msg :" aa gya bss" , time :"05:00 PM", noti :5},
  {name:"Dipanshu" , msg :"aa gya bss" , time :"05:30 PM", noti :0},
  {name:"Raghav" , msg :"pahuch gya " , time :"02:00 PM", noti :10},
  {name:"Ankit" , msg :"adde pe milna" , time :"08:00 AM", noti :0},
  {name:"Sri Vatsa" , msg :"see u bro" , time :"11:02 PM", noti :3},
  {name:"Amaniya" , msg :"gate k pass hu" , time :"01:30 PM", noti :3},
]

export default function Index() {
  return (
    <View className="h-full bg-white">
      <Nav/>
      <Filter/>
      <ScrollView className="mb-4">
        {dummyData.map((i,index)=>(
          <ChatCard key={index} data={i}/>
        ))}
        <Text className="text-center text-gray-400 py-4">No more chats</Text>
      </ScrollView>
    </View>
  );
 }
