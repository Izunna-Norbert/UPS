import * as React from "react";
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";
import TransferHeader from "./components/Header";
import { Naira, ProfilePf } from "../../assets";


const TransferScreen2 = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <TransferHeader 
                navigation={navigation}
            />
            <View style={styles.content}>
                <View style={styles.contentHeader}>
                    <View style={[styles.ellipse, { marginTop: 30 }]}>
                        <ProfilePf />
                    </View>
                    <Text style={{ fontSize: 12, fontWeight: "600", color: "#000000", marginTop: 15  }}>QUDUS DAMOLA OYEWOLE</Text>
                    <Text style={{ fontSize: 12, fontWeight: "400", color: "#000000", marginTop: 5  }}>160403038</Text>
                </View>
                <View style={styles.contentForm}>
                    <Text style={{ fontSize: 12, fontWeight: "400", color: "#000000", marginTop: 30  }}>Enter Amount</Text>
                    <View style={styles.textInputContainer}>
                        <Naira style={{ marginTop: 20, marginLeft: -12}}/>
                        <TextInput
                            style={styles.textInput}
                            placeholder="0.00"
                            keyboardType="numeric"
                        />
                        
                    </View>

                    <Text style={{ fontSize: 12, fontWeight: "400", color: "#000000", marginTop: 30  }}>Remark</Text>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="What's this for?"
                        />
                    </View>

                    <TouchableOpacity style={[styles.textInputContainer, {
                        marginTop: 40,
                        backgroundColor: "#4548C7",
                        alignItems: "center",
                        justifyContent: "center",
                        }]}
                        onPress={() => navigation.navigate("AuthorizeTransactionScreen")}
                    >
                        <Text style={{ fontSize: 14, fontWeight: "600", color: "#FFFFFF" }}>Confirm</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: "Open Sans",
        backgroundColor: "#E9E9F0",
    },
    content: {
        backgroundColor: "#fff",
        flex: 1,
    },
    contentHeader: {
        flexDirection: "column",
        alignItems: "center",
    },
    ellipse: {
        width: 49,
        height: 49,
        borderRadius: 50,
        backgroundColor: "#D9D9D9",
        alignItems: "center",
        justifyContent: "center",
    },
    contentForm: {
        paddingHorizontal: 19,
    },
    textInputContainer: {
        flexDirection: "row",
        paddingHorizontal: 19,
        backgroundColor: "#E9E9F0",
        marginTop: 5,
        height: 54,
        borderRadius: 10,
    },
    textInput: {
        fontSize: 12,
        fontWeight: "400",
        color: "#000000",
        marginTop: 10,
        marginLeft: 10,
    },
});

export default TransferScreen2;

