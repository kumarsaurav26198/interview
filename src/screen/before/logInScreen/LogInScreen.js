import { Image, Text, ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
import Images from '../../../utils/Images';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../../redux/action/themeActions';
import { loginRequest } from '../../../redux/action/authActions';

const LogInScreen = ({ navigation }) => {
  // const dispatch = useDispatch();
  // const theme = useSelector(state => state.themeReducers);
   const theme =false
  const [ email, setEmail ] = useState('saurav1@gmail.com');
  const [ password, setPassword ] = useState('123456');
  const [ emailError, setEmailError ] = useState('');
  const [ passwordError, setPasswordError ] = useState('');
  const [ dark, setDark ] = useState(true);

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const handleLogin = async () => {
    setEmailError('');
    setPasswordError('');

    if (!email || !password)
    {
      setEmailError('Please enter your email');
      setPasswordError('Please enter your password');
      return;
    }

    const loginData = {
      email: email,
      password: password,

    };

    // dispatch(loginRequest(loginData));
    navigation.navigate('DrawerNavigation');
    // try
    // {
    //   await auth().signInWithEmailAndPassword(email, password);
    //   navigation.navigate('DrawerNavigation');
    // } catch (error)
    // {
    //   if (error.code === 'auth/user-not-found')
    //   {
    //     setEmailError('No user found with this email!');
    //   } else if (error.code === 'auth/wrong-password')
    //   {
    //     setPasswordError('Incorrect password!');
    //   } else if (error.code === 'auth/invalid-email')
    //   {
    //     setEmailError('Invalid email address!');
    //   } else
    //   {
    //     console.error(error);
    //     setPasswordError('auth/invalid-credential] The supplied auth credential is incorrect, malformed or has expired!');

    //   }
    // }
  };


  const handleForget = () => {
    navigation.navigate('ForgetPassword');
  };
  const handleFacebook = () => {
    console.warn('handleFacebook');
  };
  const handleGoogle = () => {
    console.warn('handleGoogle');
  };
  const handleApple = () => {
    console.warn('handleApple');
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: theme ? 'black' : 'white',
        paddingHorizontal: 15,
      }}>
      <View style={{ paddingBottom: 40 }}>
        <View style={styles.imageContainer}>
          <Image source={Images.user} style={styles.imageContainer} />
        </View>
        <CustomTextInput
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Enter your email..."
          icon={Images.email}
        />
        <Text style={styles.errorText}>{emailError}</Text>
        <CustomTextInput
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="Enter your password..."
          icon={Images.password}
          secureTextEntry={true}
        />
        <Text style={styles.errorText}>{passwordError}</Text>
        <CustomButton
          title={'Log In'}
          onPress={handleLogin}
          color={theme ? '#fff' : 'white'}
          backgroundColor={theme ? '#3b71f3' : '#3b71f3'}
        />
        <CustomButton
          title={
            <React.Fragment>
              Forget password
              <Text
                style={{ color: '#3b71f3', fontWeight: 'bold', fontSize: 22 }}>
                {' '}
                ?
              </Text>
            </React.Fragment>
          }
          onPress={() => {
            handleForget();
          }}
          color={theme ? 'white' : '#000'}
          backgroundColor={theme ? 'black' : 'white'}
        />
        <CustomButton
          title={'Sign with facebook'}
          onPress={() => {
            handleFacebook();
          }}
          color={theme ? '#4765a9' : '#4765a9'}
          backgroundColor={theme ? 'white' : '#e7eaf4'}
        />
        <CustomButton
          title={'Sign with Google'}
          onPress={() => {
            handleGoogle();
          }}
          color={theme ? '#dd4d44' : '#dd4d44'}
          backgroundColor={theme ? '#fae9ea' : '#fae9ea'}
        />
        <CustomButton
          title={'Sign with Apple'}
          onPress={() => {
            handleApple();
          }}
          color={theme ? '#000' : 'black'}
          backgroundColor={theme ? '#e3e3e3' : '#e3e3e3'}
        />
        <CustomButton
          title={
            <React.Fragment>
              Don't have an account
              <Text
                style={{
                  color: theme ? '#4765a9' : '#3b71f3',
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                {' '}
                ? Create New
              </Text>
            </React.Fragment>
          }
          onPress={handleRegister}
          color={theme ? 'white' : '#000'}
          backgroundColor={theme ? 'black' : 'white'}
        />
        <CustomButton
          title={'Apply Theme'}
          onPress={() => {
            setDark(!dark);
            dispatch(changeTheme(dark));
          }}
          color={theme ? '#1bb57d' : 'white'}
          backgroundColor={theme ? 'white' : '#1bb57d'}
        />
      </View>
    </ScrollView>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    borderWidth: 0.3,
    width: 100,
    borderRadius: 100,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'center',
  },
  errorText: {
    marginTop: 10,
    left: 10,
    color: "red",
  },
});
