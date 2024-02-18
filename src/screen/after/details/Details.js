import React, { useState } from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
import { postDataRequest } from '../../../redux/action/postDataAction';
import { useDispatch } from 'react-redux';
import Images from '../../../utils/Images';

const Details = (props) => {
  const dispatch = useDispatch();
  const data = props?.route?.params;
   console.log("darararararar",data)
  const theme = false;
  const [ firstName, setFirstName ] = useState("Saurav");
  const [ lastName, setLastName ] = useState("Kumar");
  const [ email, setEmail ] = useState("skkhg@gmail.com");
  const [ number, setNumber ] = useState("916202142166");
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('number', number);
    // formData.append('user_image', data.imageUrl);
    formData.append('user_image', Images.userimage);
    dispatch(postDataRequest(formData));

    // setEmail('')
    // setFirstName('')
    // setLastName('')
    // setNumber('')
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme ? 'black' : 'white' }}>
      <Image
        source={{ uri: data.imageUrl }}
        style={{
          aspectRatio: 1,
        }}
        resizeMode='contain'
      />


      <View>
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
        {/* <Text style={[styles.text,{ fontSize:10, color:'red', fontWeight:"bold"}]}>{"error"}</Text> */}
        <View style={[ styles.textInputContainer, { justifyContent: "flex-end", marginLeft: 200 } ]}>
          <CustomButton
            title={'Submit'}
            onPress={handleSubmit}
            color={theme ? '#fff' : 'white'}
            backgroundColor={theme ? '#3b71f3' : '#3b71f3'}
          />
        </View>
      </View>

    </ScrollView>
  );
};

export default Details;
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
  }
});