import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text
} from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
import Images from '../../../utils/Images';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from '../../../redux/action/authActions';

const Register = ({ navigation }) => { 
  const dispatch = useDispatch();
  const theme = useSelector(state => state.themeReducers);
  const registeData = useSelector(state => state.registerReducer);

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ name, setName ] = useState('');
  const [ confirmPass, setConfirmPass ] = useState('');
  const [ emailError, setEmailError ] = useState('');
  const [ passwordError, setPasswordError ] = useState('');
  const [ confirmPassError, setConfirmPassError ] = useState('');

  const handleSignUp = async () => {
    setEmailError('');
    setPasswordError('');
    setConfirmPassError('');
  
    if (!email || !password || !confirmPass || !name) {
      setConfirmPassError('Please fill in all fields');
      return;
    }
  
    if (password !== confirmPass) {
      setConfirmPassError('Passwords do not match');
      return;
    }
  
    const userData = {
      email: email,
      password: password,
      name: name
    };
  
    await dispatch(registerUser(userData));
    if (registeData?.data?.additionalUserInfo?.isNewUser) {
      navigation.navigate("LogInScreen");
    } 
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: theme ? 'black' : 'white', padding: 20, }}>
      <View style={{ paddingBottom: 40 }}>
        <View style={styles.imageContainer}>
          <Image source={Images.user} style={styles.imageContainer} />
        </View>
        <CustomTextInput
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Enter your name..."
          icon={Images.user}
        />
        <CustomTextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Enter your email..."
          icon={Images.email}
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        <CustomTextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Enter your password..."
          icon={Images.password}
        />
        <CustomTextInput
          value={confirmPass}
          onChangeText={(text) => setConfirmPass(text)}
          placeholder="Confirm your password..."
          icon={Images.password}
          type={true}
        />
        {confirmPassError ? <Text style={styles.errorText}>{confirmPassError}</Text> : null}
        <CustomButton
          title={"Register"}
          onPress={handleSignUp}
          color={theme ? "#1bb57d" : "white"}
          backgroundColor={theme ? "white" : "#1bb57d"}
        />
        <CustomButton
          title={
            <React.Fragment>
              Have an account
              <Text
                style={{
                  color: theme ? '#4765a9' : '#3b71f3',
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                {' '}
                ? Sign In
              </Text>
            </React.Fragment>
          }
          onPress={() => {
            navigation.navigate('LogInScreen');
          }}
          color={theme ? 'white' : '#000'}
          backgroundColor={theme ? 'black' : 'white'}
        />
      </View>
    </ScrollView>
  );
};


export default Register;
const styles = StyleSheet.create({
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
});