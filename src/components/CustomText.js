import { Text, View} from 'react-native';
import React from 'react';

export default function CustomText({text, color, fontSize}) {
  return (
    <View>
      <Text
        style={{
          color: color,
          fontSize: fontSize ? fontSize : 20,
          fontFamily: 'fantasy',
          fontWeight: 'bold',
          paddingHorizontal: 15,
          paddingVertical: 5,
        }}>
        {text}
      </Text>
    </View>
  );
}