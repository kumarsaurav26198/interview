import { StyleSheet, View, TextInput } from 'react-native';
import React from 'react';

const CustomTextInput = (props) => {
    const { value, placeholder, type, onChangeText, keyboardType } = props;
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textContainer}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={"#d1cfcf"}
                secureTextEntry={type ? true : false}
                keyboardType={keyboardType}
            />
        </View>
    );
};

export default CustomTextInput;

const styles = StyleSheet.create({
    container: {
        height: 40,
        borderWidth: 0.6,
        borderColor: "#000",
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 20,
        backgroundColor: "white",
        width: '60%',
    },
    textContainer: {
        flex: 1, 
        color: "black",
        letterSpacing: 1.8,
    }
});
