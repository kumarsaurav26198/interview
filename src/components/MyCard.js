import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Dimensions } from 'react-native';

const MyCard = ({  onPress, imageUri }) => {
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
  const imageWidth = screenWidth *1; 
  const imageHeight = screenHeight * 1; 

  return (
    <View style={{ borderWidth:1,borderColor:"blue" }}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{ uri: imageUri }}
          style={{
            width: imageWidth,
            height: imageHeight,
            resizeMode: 'contain', 
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MyCard;

const styles = StyleSheet.create({
});
