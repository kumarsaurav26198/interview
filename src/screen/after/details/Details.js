import React, { useState } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, } from 'react-native';
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
  const [ modalVisible, setModalVisible ] = useState(false);
  const [ errorFn, setErrorFn ] = useState("");
  const [ errorLN, setErrorLN ] = useState("");
  const [ errorEmail, setErrorEmail ] = useState("");
  const [ errorNum, setErrorNum ] = useState();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const validatePhoneNumber = (phoneNumber) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(phoneNumber);
  };

  const clearAll = () => {
    setErrorFn("");
    setErrorLN('');
    setErrorEmail("");
    setErrorNum('');
    setModalVisible(true)
  };
  const handleSubmit = () => {
    if (firstName.trim().length === 0)
    {
      setErrorFn('First name is required');
      return;
    }
    if (firstName.trim().length < 3)
    {
      setErrorFn('Invalid first name');
      return;
    }
    clearAll();

    if (lastName.trim().length === 0)
    {
      setErrorLN('Last name is required');
      return;
    }
    if (lastName.trim().length < 3)
    {
      setErrorLN('Invalid last name');
      return;
    }

    if (!email.trim())
    {
      setErrorEmail('Email is required');
      return;
    }
    if (!validateEmail(email))
    {
      setErrorEmail('Invalid email');
      return;
    }
    if (!number.trim())
    {
      setErrorNum('Number is required');
      return;
    }
    if (!validatePhoneNumber(number))
    {
      setErrorNum('Invalid number');
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
    clearAll();
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
          {
            error ?
              <ErrorModal isError={true} Message={"[ Error ]"} />
              : null
          }
          <View style={styles.textInputContainer}>
            <Text style={styles.text}>First Name</Text>
            <CustomTextInput value={firstName} placeholder={"Enter your first name"} onChangeText={text => setFirstName(text)} />
          </View>
          { errorFn ? <Text style={[ styles.text, { color: "red", fontSize: 12,marginLeft:"40%" } ]}>{errorFn} </Text>:null}
          <View style={styles.textInputContainer}>
            <Text style={styles.text}>Last Name</Text>
            <CustomTextInput value={lastName} placeholder={"Enter your last name"} onChangeText={text => setLastName(text)} />
          </View>
          { errorLN ? <Text style={[ styles.text, { color: "red", fontSize: 12,marginLeft:"40%" } ]}>{errorLN} </Text>:null}
          
          <View style={styles.textInputContainer}>
            <Text style={styles.text}>Email</Text>
            <CustomTextInput value={email} placeholder={"Enter your email"} onChangeText={text => setEmail(text)} keyboardType="email-address" />
          </View>
          { errorEmail ? <Text style={[ styles.text, { color: "red", fontSize: 12,marginLeft:"40%" } ]}>{errorEmail} </Text>:null}
          <View style={styles.textInputContainer}>
            <Text style={styles.text}>Phone </Text>
            <CustomTextInput value={number} placeholder={"Enter your Phone number"} onChangeText={text => setNumber(text)} keyboardType="numeric" />
          </View>
          { errorNum ? <Text style={[ styles.text, { color: "red", fontSize: 12,marginLeft:"40%" } ]}>{errorNum} </Text>:null}
            <View style={[ styles.textInputContainer, { justifyContent: "flex-end", marginLeft: 200 } ]}>
            <CustomButton
              title={'Submit'}
              onPress={handleSubmit}
              color={theme ? '#fff' : 'white'}
              backgroundColor={theme ? '#3b71f3' : '#3b71f3'}
            />
          </View>
          {modalVisible?<ErrorModal Message="Sucess" />:null}
          
        </View>
      )}

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
