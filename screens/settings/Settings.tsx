import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";


const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Settings</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 80,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default SettingsScreen;