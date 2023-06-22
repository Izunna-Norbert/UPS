import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { SafeAreaView } from 'react-native-safe-area-context';

const Qrcode = ({ navigation }: any) => {
  const [isFlashOn, setIsFlashOn] = useState(false);

  const onRead = (e: any) => {
    console.error(e.data);
    navigation.navigate('AuthorizeTransactionScreen', { data: e.data });
  };

  const onFlash = () => {
    setIsFlashOn(!isFlashOn);
  };

  return (
    <SafeAreaView style={styles.container}>
      <RNCamera
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        flashMode={isFlashOn ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
        onBarCodeRead={onRead}
        captureAudio={false}
      >
        <View >
          <View style={styles.scanBox} />
        </View>

        <Text style={styles.centerText}>
          Go to{' '}
          <Text style={styles.textBold}>UPS/QR_code</Text> on your computer and scan the QR code.
        </Text>

        <TouchableOpacity style={styles.buttonTouchable} onPress={onFlash}>
          <Text style={styles.buttonText}>
            {isFlashOn ? 'Flash Off' : 'Flash On'}
          </Text>
        </TouchableOpacity>
      </RNCamera>
    </SafeAreaView>
  );
};

const { width } = Dimensions.get('window');
const scanBoxWidth = width * 0.75;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  camera: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  scanBox: {
    width: scanBoxWidth,
    height: scanBoxWidth,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 5,
  },
  centerText: {
    fontSize: 18,
    padding: 32,
    color: '#777',
    textAlign: 'center',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default Qrcode;
