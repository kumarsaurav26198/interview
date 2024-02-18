import React, { useEffect } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import HomeCardContainer from '../../../container/HomeCardContainer';

const Home = ({navigation}) => {
  return (
    <>
      <HomeCardContainer navigation={navigation} />
    </>
  );
};
const styles = StyleSheet.create({
});

export default Home;
