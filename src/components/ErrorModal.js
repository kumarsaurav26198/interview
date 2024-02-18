import { View, Modal, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import LottieView from 'lottie-react-native';

const ErrorModal = ({ message, isError }) => {
  const [ modalVisible, setModalVisible ] = useState(true);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>

          <View>
            {isError ? (
              <>
                <LottieView
                  style={styles.lottieView}
                  source={require('../assets/animations/error.json')}
                  autoPlay
                  loop
                />
                <Text style={styles.errorText}>{message}</Text>
              </>
            ) : (
              <>
                <LottieView
                  style={styles.lottieView}
                  source={require('../assets/animations/done.json')}
                  autoPlay
                  loop
                />
                <Text style={[ styles.errorText, { color: "green" } ]}>{"Message"}</Text>

              </>
            )}
          </View>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ErrorModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    width: '80%',
  },
  errorText: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: 'red',
  },
  closeButton: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10, 
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  lottieView: {
    height: 100,
    width: 100,
  },
});
