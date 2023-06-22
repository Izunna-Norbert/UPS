import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from "react-native";
import { BackArrow, Naira, SuccessImage } from '../../../assets';

const TransferSuccessScreen = ({navigation}: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <BackArrow />
                    </TouchableOpacity>
                    <Text style={styles.headerText} >Transfer Success</Text>
                </View>
            </View>
            <View style={styles.content}>
                <Text style={{ fontSize: 12, fontWeight: "400", lineHeight: 20, color: "#000000", marginTop: 40 }}>
                <Text style={{ color: '#4548C7', fontWeight: "700" }}>₦1,000.00</Text> has been successfully transferred to the account
                </Text>
                <View style={{ alignItems: 'center', marginTop: 2 }}>
                <Text style={{ color: '#4548C7', fontWeight: "700", fontSize: 12 }}>(QUDUS DAMOLA OYEWOLE)</Text> 
                </View>
                <SuccessImage style={{ marginTop: 70, alignSelf: 'center' }}/>
                <TouchableOpacity style={[styles.textInputContainer, {
                    marginTop: 75,
                    backgroundColor: "#4548C7",
                    alignItems: "center",
                    justifyContent: "center",
                    }]}
                    onPress={() => navigation.navigate("Qrcode")}
                >
                    <Text style={{ fontSize: 14, fontWeight: "600", color: "#FFFFFF", marginTop: 12 }}>Done</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: "Open Sans",
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
        paddingHorizontal: 24,
    },
    textInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 0.5,
        borderBottomColor: "rgba(0, 0, 0, 0.2)",
        paddingBottom: 10,
        marginTop: 30,
        height: 50,
        borderRadius: 10,

    },
});

export default TransferSuccessScreen;
