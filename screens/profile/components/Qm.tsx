import * as React from 'react';
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking,
    Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Qrcode = ({navigation}: any) => {
    const [isFlashOn, setIsFlashOn] = React.useState(false);

    const onSuccess = (e: any) => {
        console.error(e.data);
    };
    const onFlash = () => {
    setIsFlashOn(true);
    };

    const onRead = (e: any) => {
        console.log('we are here');
        console.log(e.data);
        console.log(e.type);
        console.log(e);
        navigation.navigate('AuthorizeTransactionScreen', {data: e.data});
    };
    return (
       <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }}>
            {/* <QRCodeScanner
                onRead={({ data }) => {
                    console.log('we are here');
                    Alert.alert(data)
                }}
                flashMode={isFlashOn ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
                cameraStyle={{ height: 500 }}
                reactivate={true}
                topContent={
                    <Text style={styles.centerText}>
                        Go to{' '}
                        <Text style={styles.textBold}>UPS/QR_code</Text> on
                        your computer and scan the QR code.
                    </Text>
                }
                bottomContent={
                    <TouchableOpacity style={styles.buttonTouchable} onPress={onFlash}>
                        <Text 
                            style={styles.buttonText}
                        >
                        Flash
                        </Text>
                    </TouchableOpacity>
                }
            /> */}
            <RNCamera
                style={{ flex: 1, height: 500 }}
                type={RNCamera.Constants.Type.back}
                flashMode={isFlashOn ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
                onBarCodeRead={onRead}
                captureAudio={false}
            >
                <Text style={{ flex: 1, fontSize: 18, padding: 32, color: '#777' }}>
                    Go to{' '}
                    <Text style={{ fontWeight: '500', color: '#000' }}>UPS/QR_code</Text> on
                    your computer and scan the QR code.
                </Text>
                <TouchableOpacity style={{ padding: 16 }} onPress={onFlash}>
                    <Text
                        style={{ fontSize: 21, color: 'rgb(0,122,255)' }}
                    >
                    Flash
                    </Text>
                </TouchableOpacity>
            </RNCamera>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    centerText: {
      flex: 1,
      fontSize: 18,
      padding: 32,
      color: '#777'
    },
    textBold: {
      fontWeight: '500',
      color: '#000'
    },
    buttonText: {
      fontSize: 21,
      color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
      padding: 16
    }
});

export default Qrcode;