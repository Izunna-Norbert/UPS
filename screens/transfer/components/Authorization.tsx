import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { BackArrow } from '../../../assets';

const AuthorizeTransactionScreen = ({navigation}: any) => {
    const [pin, setPin] = React.useState(['', '', '', '']);

    const handlePinInput = (index: any, value: any) => {
        const newPin = [...pin];
        newPin[index] = value;
        setPin(newPin);
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <BackArrow />
                    </TouchableOpacity>
                    <Text style={styles.headerText} >Authorization</Text>
                </View>
            </View>
            <View style={styles.content}>
                <Text style={{ fontSize: 12, fontWeight: "400", color: "#000000", marginTop: 40 }}>Enter PIN</Text>
                <View style={styles.boxPinContainer}>
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
                <TouchableOpacity style={[styles.textInputContainer, {
                    marginTop: 254,
                    backgroundColor: "#4548C7",
                    alignItems: "center",
                    justifyContent: "center",
                    }]}
                    onPress={() => navigation.navigate("TransferSuccessScreen")}
                >
                    <Text style={{ fontSize: 14, fontWeight: "600", color: "#FFFFFF" }}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: "inter",
        backgroundColor: "#fff",
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
        paddingLeft: 85.5,
        fontSize: 16,
        fontWeight: "600",
    },
    content: {
        backgroundColor: "#fff",
        flex: 1,
        paddingHorizontal: 19,
    },
    boxPinContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        paddingVertical: 15,
        marginTop: 5,
    },
    inputPin: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#4169E1",
        textAlign: "center",
        marginHorizontal: 10,
        fontSize: 24,
        fontWeight: "bold",
    },
    textInputContainer: {
        flexDirection: "row",
        paddingHorizontal: 19,
        backgroundColor: "#E9E9F0",
        marginTop: 5,
        height: 54,
        borderRadius: 10,
    },
});

export default AuthorizeTransactionScreen;