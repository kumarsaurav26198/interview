import { View, Modal, StyleSheet } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const Loader = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <LottieView
            style={styles.lottieView}
            source={require('../assets/animations/Loader4.json')}
            autoPlay
            loop
          />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.8)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 500,
    borderWidth: 1,
    borderColor: "black",
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation:8,
  },
  lottieView: {
    height: 250,
    width: 250
  },
});
