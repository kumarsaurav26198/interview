import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/after/home/Home';
import Setting from '../screen/after/setting/Setting';
import Stores from '../screen/after/stores/Stores';
import History from '../screen/after/history/History';
import Wealth from '../screen/after/wealth/Wealth';
import Images from '../utils/Images';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        // tabBarIcon: ({ color }) => (
        //     <TabBarIcon color={color} routeName={route.name} />
        // ),
        tabBarStyle: {
          backgroundColor: "#1bb57d",
          borderTopRightRadius: 10,
          padding:5,
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "black",
        headerTintColor: "white",
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: "#1bb57d",
          borderBottomLeftRadius: 10,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              source={Images.menu}
              style={[ styles.imageContainer, { tintColor: 'blue' } ]}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={Images.lowhigh}
              style={[ styles.imageContainer, { tintColor: 'blue' } ]}
            />
          </TouchableOpacity>
          // <IconWrapper>
          //     <TouchableOpacity onPress={() => { navigationRef.current.navigate(navigationStrings.NOTIFICATION) }}>
          //         <HeaderIcon
          //             source={NotificatioWhiteIcon}
          //         />
          //     </TouchableOpacity>
          //     <TouchableOpacity onPress={() => { navigationRef.current.navigate(navigationStrings.CALENDER_SCREEN) }}>
          //         <HeaderIcon
          //             source={CalenderWhiteIcon}
          //         />
          //     </TouchableOpacity>
          // </IconWrapper>
        ),
      })}
    >
      <Tab.Screen
        name="Stores"
        component={Stores}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={Images.sideStore}
              style={[ styles.imageContainer, { tintColor: focused ? 'blue' : color } ]}
            />
          ),
        }}
      />
      <Tab.Screen name="Wealth" component={Wealth}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={Images.sideInvestor}
              style={[ styles.imageContainer, { tintColor: focused ? 'blue' : color } ]}
            />
          ),
        }} />
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={Images.sideHome}
              style={[ styles.imageContainer, { tintColor: focused ? 'blue' : color } ]}
            />
          ),
        }} />
      <Tab.Screen name="History" component={History}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={Images.surfShop}
              style={[ styles.imageContainer, { tintColor: focused ? 'blue' : color } ]}
            />
          ),
        }} />
      <Tab.Screen name="Setting" component={Setting}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={Images.setting}
              style={[ styles.imageContainer, { tintColor: focused ? 'blue' : color } ]}
            />
          ),
        }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 25,
    height: 25,
    margin: 5,
  },
});
