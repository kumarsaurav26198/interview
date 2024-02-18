import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { Card } from 'react-native-paper';

const MyCard = ({ title, onPress, imageUri }) => {

  return (
    <View style={{ paddingTop: 10, paddingBottom: 10}}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{ uri: imageUri }}
          style={{
            aspectRatio: 1,
          }}
          resizeMode='contain'
        />
        <Card>
          <Card.Title
            title={`ID : ${ title }`}
            titleVariant="headlineMedium"
            titleStyle={{ color: '#1bb57d', fontWeight: 'bold' }}
          />
        </Card>
      </TouchableOpacity>
    </View>
  );
};

export default MyCard;

const styles = StyleSheet.create({

});
