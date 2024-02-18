import {Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Images from '../utils/Images';
const SideBarText = ({navigation}) => {
  const Data = [
    {
      title: 'Home',
      navigate: 'Home',
      icon: Images.sideHome,
    },
    {
      title: 'Notifications',
      navigate: 'Notifications',
      icon: Images.sideNotification,
      notificationsCount: 6,
    },
    {
      title: 'Wealth',
      navigate: 'Wealth',
      WealthNotification: 10,
      icon: Images.sideInvestor,
    },
    {
      title: 'Stores',
      navigate: 'Stores',
      storeNotification: 10,
      icon: Images.sideStore,
    },
    {
      title: 'About',
      navigate: 'About',
      icon: Images.sideInfo,
    },
    {
      title: 'My book',
      navigate: 'MyBook',
      icon: Images.sideMyBook,
    },
    {
      title: 'Contact',
      navigate: 'Contact',
      icon: Images.call,
    },
    {
      title: 'Websites',
      navigate: 'Websites',
      icon: Images.sideGlobe,
    },
    {
      title: 'Support',
      icon: Images.sideSupport,
      navigate: 'Support',
    },
    {
      title: 'Setting',
      navigate: 'Setting',
      icon: Images.setting,
    },
    {
      title: 'Log out',
      icon: Images.sideLogout,
    },
  ];
  const handleNavigation = navigate => {
    navigation.navigate(navigate);
  };
  return (
    <ScrollView>
      {Data.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            if (item?.navigate) {
              handleNavigation(item?.navigate);
            } else {
              alert('Log out ');
            }
          }}
          style={{
            backgroundColor: 'transparent',
            width: '100%',
            height: 40,
            justifyContent: 'flex-start',
            flexDirection: 'row',
            alignItems: 'center',
borderWidth:0.3

          }}>
          <Image source={item?.icon} style={styles.imageContainer} />
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: 'normal',
            }}>
            {item.title}
          </Text>
          {item?.notificationsCount > 0 ? (
            <View
              style={{
                backgroundColor: 'red',
                width: 20,
                height: 20,
                justifyContent: 'center',
                borderRadius: 100,
                margin: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  fontWeight: 'normal',
                  textAlign: 'center',
                  marginVertical: -4,
                }}>
                {item?.notificationsCount}
              </Text>
            </View>
          ) : null}
          {item?.WealthNotification > 0 ? (
            <View
              style={{
                backgroundColor: 'green',
                width: 20,
                height: 20,
                justifyContent: 'center',
                borderRadius: 100,
                margin: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  fontWeight: 'normal',
                  textAlign: 'center',
                  marginVertical: -4,
                }}>
                {item?.WealthNotification}
              </Text>
            </View>
          ) : null}
          {item?.storeNotification > 0 ? (
            <View
              style={{
                backgroundColor: 'brown',
                width: 20,
                height: 20,
                justifyContent: 'center',
                borderRadius: 100,
                margin: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  fontWeight: 'normal',
                  textAlign: 'center',
                  marginVertical: -4,
                }}>
                {item?.storeNotification}
              </Text>
            </View>
          ) : null}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default SideBarText;
const styles = StyleSheet.create({
  imageContainer: {
    width: 25,
    height: 25,
    margin: 5,
  },
});
