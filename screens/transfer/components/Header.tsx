import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { BackArrow } from '../../../assets';

const TransferHeader = ({navigation}: any) => {
    return (
        <View style={styles.header}>
        <View style={styles.headerContent}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <BackArrow />
            </TouchableOpacity>
            <Text style={styles.headerText} >Transfer to Student</Text>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
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
});

export default TransferHeader;