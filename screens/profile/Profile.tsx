import React, { useState } from 'react';
import QRCode from 'react-native-qrcode-svg';
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
import { BackArrow } from '../../assets';

const ProfileScreen = ({navigation}: any) => {
  const [inputText, setInputText] = useState('');
  const [qrvalue, setQrvalue] = useState('');

  return (
    <View style={styles.container}>
        <View style={styles.header}>
                <View style={styles.headerContent}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <BackArrow />
                    </TouchableOpacity>
                    <Text style={styles.headerText} >Profile</Text>
                </View>
        </View>
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.bodyContainer}>
                <Text style={styles.titleStyle}>
                    Welcome! to UPS {qrvalue ? qrvalue : 'Unknown'}
                </Text>
                <Text style={styles.titleStyle}>
                    Hey {qrvalue ? qrvalue : 'Unknown'} this is your QR code!
                </Text>
                <QRCode
                    value={qrvalue ? qrvalue : 'izu'}
                    size={250}
                    color="black"
                    backgroundColor="white"
                    logo={{
                        uri:
                        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png',
                    }}
                    logoSize={30}
                    logoMargin={2}
                    logoBorderRadius={15}
                    logoBackgroundColor="yellow"
                />
                <Text style={styles.textStyle}>
                Please insert UPS ID to generate QR code
                </Text>
                <TextInput
                style={styles.textInputStyle}
                onChangeText={
                    (inputText) => setInputText(inputText)
                }
                placeholder="Enter Any Value here"
                value={inputText}
                />
                <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => setQrvalue(inputText)}>
                <Text style={styles.buttonTextStyle}>
                    Generate QR Code
                </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: "inter",
        backgroundColor: "#E9E9F0",
    },
    header: {
        backgroundColor: "#fff",
        height: 90,
        paddingHorizontal: 24,
        paddingVertical: 17,
    },
    headerContent: {
        flexDirection: "row",
        marginTop: 40,
        lineHeight: 20
    },
    headerText: {
        fontSize: 16,
        fontWeight: "600",
        paddingHorizontal: 130
    },
    bodyContainer: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 10,
      },
      titleStyle: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      textStyle: {
        textAlign: 'center',
        margin: 10,
      },
      textInputStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
      },
      buttonStyle: {
        backgroundColor: '#4548C7',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#4548C7',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 30,
        padding: 10,
      },
      buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
      },
});

export default ProfileScreen;
