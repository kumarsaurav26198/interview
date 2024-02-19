import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Dimensions } from 'react-native';

const MyCard = ({ onPress, imageUri }) => {
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);

  useLayoutEffect(() => {
    const getImageSize = async () => {
      try {
        const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
        const width = screenWidth * 1;
        const height = screenHeight *1;
        setImageWidth(width);
        setImageHeight(height);
      } catch (error) {
        console.error('Error getting image size:', error);
      }
    };
    getImageSize();
  }, []);

  return (
    <View style={{ borderWidth: 1, borderColor: "blue" }}>
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
  // You can add additional styles here if needed
});
