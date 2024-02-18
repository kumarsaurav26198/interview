import React, { useState } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native'; 
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
import { postDataRequest } from '../../../redux/action/postDataAction';
import { useDispatch, connect } from 'react-redux';
import Loader from '../../../components/Loaders';

const Details = (props) => {
  const dispatch = useDispatch();
  const { loading, error } = props;
  const data = props?.route?.params;
  const theme = false;
  const [firstName, setFirstName] = useState("Saurav");
  const [lastName, setLastName] = useState("Kumar");
  const [email, setEmail] = useState("skkhg@gmail.com");
  const [number, setNumber] = useState("916202142166");

  const handleSubmit = () => {
    const payload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      number: number,
      user_image: data.imageUrl
    };

    dispatch(postDataRequest(payload));
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme ? 'black' : 'white' }}>
      {loading ? ( 
        <Loader/>
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
          <View style={[styles.textInputContainer, { justifyContent: "flex-end", marginLeft: 200 }]}>
            <CustomButton
              title={'Submit'}
              onPress={handleSubmit}
              color={theme ? '#fff' : 'white'}
              backgroundColor={theme ? '#3b71f3' : '#3b71f3'}
            />
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.postDataReducers?.loading,
    error: state.postDataReducers?.error
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
