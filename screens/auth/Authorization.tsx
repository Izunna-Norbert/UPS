import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Switch } from 'react-native';


interface SignupAuthorizationScreenProps {
    navigation: any; // assuming this screen is a child of a stack navigator
    route: any; // to retrieve the institution value from previous screen
}

// set pin screen, 4 digit pin input boxes (4 boxes)

const SignupAuthorizationScreen: React.FC<SignupAuthorizationScreenProps> = ({ navigation, route }) => {

    const [pin, setPin] = useState(['', '', '', '']);
    const [pinConfirm, setPinConfirm] = useState(['', '', '', '']);
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
    };

    const handlePinInput = (index: any, value: any) => {
        const newPin = [...pin];
        newPin[index] = value;
        setPin(newPin);
    };

    const handlePinConfirmInput = (index: any, value: any) => {
        const newPinConfirm = [...pinConfirm];
        newPinConfirm[index] = value;
        setPinConfirm(newPinConfirm);
      };

    const handleContinue = () => {
        navigation.navigate('SignupConfirmationScreen', { institution: route.params.institution, pin, pinConfirm });
    };

    const handleJoinVendor = () => {
        navigation.navigate('SignupVendorScreen', { institution: route.params.institution });
    };

    const handleJoinStudent = () => {
        navigation.navigate('SignupMatriculationScreen', { institution: route.params.institution });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}> Authorization </Text>
            <Text style={styles.text}>Set Pin </Text>
            <View style={styles.inputContainer}>
                <TextInput
                style={styles.inputPin}
                maxLength={1}
                keyboardType='number-pad'
                value={pin[0]}
                onChangeText={(value) => handlePinInput(0, value)}
                />
                <TextInput
                style={styles.inputPin}
                maxLength={1}
                keyboardType='number-pad'
                value={pin[1]}
                onChangeText={(value) => handlePinInput(1, value)}
                />
                <TextInput
                style={styles.inputPin}
                maxLength={1}
                keyboardType='number-pad'
                value={pin[2]}
                onChangeText={(value) => handlePinInput(2, value)}
                />
                <TextInput
                style={styles.inputPin}
                maxLength={1}
                keyboardType='number-pad'
                value={pin[3]}
                onChangeText={(value) => handlePinInput(3, value)}
                />
            </View>
            <Text style={styles.text}>Confirm Pin </Text>
            <View style={styles.inputContainer}>
                <TextInput
                style={styles.inputPin}
                maxLength={1}
                keyboardType='number-pad'
                value={pinConfirm[0]}
                onChangeText={(value) => handlePinConfirmInput(0, value)}
                />
                <TextInput
                style={styles.inputPin}
                maxLength={1}
                keyboardType='number-pad'
                value={pinConfirm[1]}
                onChangeText={(value) => handlePinConfirmInput(1, value)}
                />
                <TextInput
                style={styles.inputPin}
                maxLength={1}
                keyboardType='number-pad'
                value={pinConfirm[2]}
                onChangeText={(value) => handlePinConfirmInput(2, value)}
                />
                <TextInput
                style={styles.inputPin}
                maxLength={1}
                keyboardType='number-pad'
                value={pinConfirm[3]}
                onChangeText={(value) => handlePinConfirmInput(3, value)}
                />
            </View>

            <Text style={styles.text}> Enable Face ID </Text>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{ marginRight: 220, marginBottom: 40, transform: [{ scaleX: 0.8 }, { scaleY: 0.75 }] }}
            />

            <TouchableOpacity style={styles.vendorButton} onPress={handleJoinStudent}>
                <Text style={styles.buttonText}>Proceed</Text>
            </TouchableOpacity>
            <Text style={styles.footer}> UPS Solutions C 2023</Text>
        </View>
    );
};

export default SignupAuthorizationScreen;

const styles = StyleSheet.create({
    header: {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 30,
    },
    title: {
        fontWeight: 'normal',
        marginBottom: 20,
        marginRight: 220,
    },
    text: {
        fontSize: 12,
        marginBottom: 10,
        marginRight: 220,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
    },
    inputPin: {
        width: 60,
        height: 60,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#B2B2B2',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 10,
      },
    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        backgroundColor: 'gray',
        padding: 10,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        marginBottom: 10,
      },
    vendorButton: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 300,
        borderRadius: 10,
        marginTop: 10,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
      },
    footer: {
        fontSize: 10,
        color: 'gray',
        marginTop: 200
      },
});
