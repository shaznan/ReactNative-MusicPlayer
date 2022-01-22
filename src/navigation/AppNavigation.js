import { Ionicons } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import React from "react";
import AudioList from "../screens/AudiList";
import Player from "../screens/Player";
import PlayList from "../screens/PlayList";


const Tab = createBottomTabNavigator();
export default function AppNavigator() {

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AudioList"
        component={AudioList}
        options={{
          tabBarIcon: ({color, size}) => {
            return <MaterialCommunityIcons name="playlist-music" size={24} color="black" />
          },
        }}
      />
      <Tab.Screen name="Player" component={Player} options={{
          tabBarIcon:({color, size}) =>(
            <Ionicons name="ios-play-circle-outline" size={24} color="black" />
          )
      }} />
      <Tab.Screen name="PlayList" component={PlayList} options={{
          tabBarIcon:({color,size})=>(
            <MaterialCommunityIcons name="play-box-multiple-outline" size={24} color="black" />
          )
      }} />
    </Tab.Navigator>
  );
}
