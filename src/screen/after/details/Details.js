import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
import { postDataRequest } from '../../../redux/action/postDataAction';
import { useDispatch, connect } from 'react-redux';
import Loader from '../../../components/Loaders';
import ErrorModal from '../../../components/ErrorModal';

const Details = (props) => {
  const dispatch = useDispatch();
  const { loading, error } = props;
  const data = props?.route?.params;
  const theme = false;
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ number, setNumber ] = useState("");
  const [errorText, setErrorText] = useState("")

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const validatePhoneNumber = (phoneNumber) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(phoneNumber);
  };
  const handleSubmit = () => {
    if (firstName.trim().length === 0) {
      setErrorText('First name is required');
      return;
    }
    if (firstName.trim().length < 3) {
      setErrorText('Invalid first name');
      return;
    }
    if (lastName.trim().length === 0) {
      setErrorText('Last name is required');
      return;
    }
    if (lastName.trim().length < 3) {
      setErrorText('Invalid last name');
      return;
    }

    if (!email.trim()) {
      setErrorText('Email is required');
      return;
    }
    if (!validateEmail(email)) {
      setErrorText('Invalid email');
      return;
    }
    if (!number.trim()) {
      setErrorText('Number is required');
      return;
    }
    if (!validatePhoneNumber(number)) {
      setErrorText('Invalid number');
      return;
    }
 
    const payload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      number: number,
      user_image: data.imageUrl
    };
    dispatch(postDataRequest(payload));

    setFirstName('')
    setLastName('')
    setNumber('')
    setEmail('')
  };

 

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme ? 'black' : 'white' }}>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <Image
            source={{ uri: data.imageUrl }}
            style={{
              aspectRatio: 1,
            }}
            resizeMode='contain'
          />
          <View style={styles.textInputContainer}>
            <Text style={styles.text}>First Name</Text>
            <CustomTextInput value={firstName} placeholder={"Enter your first name here"} onChangeText={text => setFirstName(text)} />
          </View>
          <View style={styles.textInputContainer}>
            <Text style={styles.text}>Last Name</Text>
            <CustomTextInput value={lastName} placeholder={"Enter your last name here"} onChangeText={text => setLastName(text)} />
          </View>
          <View style={styles.textInputContainer}>
            <Text style={styles.text}>Email</Text>
            <CustomTextInput value={email} placeholder={"Enter your email  here"} onChangeText={text => setEmail(text)} />
          </View>
          <View style={styles.textInputContainer}>
            <Text style={styles.text}>Phone </Text>
            <CustomTextInput value={number} placeholder={"Enter your Phone number here"} onChangeText={text => setNumber(text)} />
          </View>
          <Text style={[styles.text,{color:"red", fontSize:15,textAlign:'center',fontWeight:"bold"}]}>{errorText} </Text>
          <View style={[ styles.textInputContainer, { justifyContent: "flex-end", marginLeft: 200 } ]}>
            <CustomButton
              title={'Submit'}
              onPress={handleSubmit}
              color={theme ? '#fff' : 'white'}
              backgroundColor={theme ? '#3b71f3' : '#3b71f3'}
            />
          </View>
        </View>
      )}
      {error ? <ErrorModal message={error} isError={true} /> : null}
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.postDataReducers?.loading,
    error: state.postDataReducers?.error,
  };
};

export default connect(mapStateToProps)(Details);

const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
    marginHorizontal: 5
  },
  text: {
    fontSize: 20,
    color: "#000"
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
