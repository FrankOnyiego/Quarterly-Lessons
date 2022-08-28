import 'react-native-gesture-handler';
import * as React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import pdf from '../screens/pdf';
import Videos from '../screens/Videos';
import audio from '../screens/audio';
import Pdfreader from '../screens/pdfreader';

import {
  AdMobBanner
} from 'expo-ads-admob';

const Tab = createBottomTabNavigator();
export default function Tabs() {
  return (
    <>
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
    tabBarStyle: {
      backgroundColor: '#d5deeb',
  },
})} >
        <Tab.Screen name="Lessons" component={Videos}  options={{
          headerStyle:{
             backgroundColor: 'green'
          },
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={40} />
          ),
        }}/>

        <Tab.Screen name="Missions" component={audio} options={{
          headerStyle:{
              backgroundColor: 'green'
          },
          tabBarLabel: 'Missions',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="rss-box" color={color} size={size} />
          ),
        }}/>

        <Tab.Screen name="Lesson Guides" component={pdf} options={{
          headerStyle:{
              backgroundColor: 'green'
          },
          tabBarLabel: 'Guides',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="video" color={color} size={40} />
          ),
        }}/> 

        
        <Tab.Screen name="Lesson" link={"https://absg.adventist.org/assets/public/files/lessons/2022/3Q/SE/PDFs/EAQ322_03.pdf"} component={Pdfreader} options={{
          headerStyle:{
              backgroundColor: 'green'
          },
          tabBarLabel: 'Reader',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="file-pdf-box" color={color} size={40} />
          ),
        }}/> 

       </Tab.Navigator>
    </NavigationContainer>

    <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-4266400232196448/5321637848"
        servePersonalizedAds={true}
    />
    
    </>
  );
}