import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '../../components/navigation/TabBarIcon';
import { Colors } from '../../constants/Colors';
import { useColorScheme } from '../../hooks/useColorScheme.web';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 1,
          backgroundColor:"#19356D",
          borderCurve: "circular",
          borderTopColor: "#19356D",
          height: 80,
          paddingBottom: 5,
          paddingTop: 5,
          paddingHorizontal: 10,
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
          marginBottom: 10,
          marginTop: 10,
          borderBottomLeftRadius:20,
          borderBottomRightRadius:20,
          width: "95%",
          marginLeft: "auto",
          marginRight: "auto",
        }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={"#fff"} />
          ),
        }}
      />
      <Tabs.Screen
        name="add-product"
      // backgroundColor="#fff"
        options={{
          title: 'Add',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'add' : 'add-outline'} color={"#fff"} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={"#fff"} />
          ),
        }}
      />
    </Tabs>
  );
}
