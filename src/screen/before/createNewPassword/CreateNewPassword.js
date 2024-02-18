import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
import Images from '../../../utils/Images';
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';

const CreateNewPassword = ({ navigation }) => {
    const theme = useSelector(state => state.themeReducers);
    const [ email, setEmail ] = useState('');
    const [ badEmail, setBadEmail ] = useState(false);
    const [ password, setPassword ] = useState('');
    const [ badPassword, setBadPassword ] = useState('');
    const { colors } = useTheme();
    const handleSignUp = () => {
        navigation.navigate('LogInScreen');
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: theme ? 'black' : 'white', padding: 20, }}>
            <View style={styles.imageContainer}>
                <Image source={Images.user} style={styles.imageContainer} />
            </View>
            <CustomTextInput value={email} onChange={setEmail} placeholder="Enter new password..."
                icon={Images.password}
            />
            <CustomTextInput value={email} onChange={setEmail} placeholder="Confirm your password..."
                icon={Images.password}
                type  
            />
            <CustomButton title={"Done"}
                onPress={() => {
                    handleSignUp();
                }} color={theme ? "#fff" : "white"} backgroundColor={theme ? "#3b71f3" : "#3b71f3"} />
        </ScrollView>
    );

};
export default CreateNewPassword;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "#ff5a66",
        marginTop: 20,
        marginBottom: 20,
    },
    leftTitle: {
        alignSelf: 'stretch',
        textAlign: 'left',
        marginLeft: 20,
    },
    imageContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        borderWidth: 0.3,
        width: 100,
        borderRadius: 100,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: "center",
    },
    accountText: {
        marginTop: 30,
        alignSelf: "center",
        fontSize: 18,
        fontWeight: "600",
        color: "#878786",
        textDecorationLine: "underline"
    },
    warning: {
        marginTop: 10,
        marginLeft: 24,
        left: 10,
        color: "red",
    }
});
