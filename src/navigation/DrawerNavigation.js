import * as React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SideBarText from '../components/SideBarText';
// import BottomTabNavigation from './BottomTabNavigation';
import CustomText from '../components/CustomText';
// import { useSelector } from 'react-redux';
import Images from '../utils/Images';

const Drawer = createDrawerNavigator();
export default function DrawerNavigation(props) {
  const theme = true

  return (
    <Drawer.Navigator initialRouteName="BottomTabNavigation"
      screenOptions={{ headerShown: false}}
      drawerContent={() => (
        <View style={{ height: "100%", width: "100%", paddingTop: 30, backgroundColor: "#1bb57d" }}>
          <View style={{ width: "100%", padding: 10 }}>
            <Image source={Images.user} style={styles.imageContainer} />
            <CustomText text={"Magnet 2.O"} color={theme ? "white" : "black"} fontSize={15} />
          </View>
          <SideBarText navigation={props.navigation} />
        </View>
      )}
    >
      {/* <Drawer.Screen name="BottomTabNavigation" component={BottomTabNavigation} /> */}
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
  imageContainer: {
    width: 100,
    height: 100
  },
});