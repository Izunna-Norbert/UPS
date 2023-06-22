import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from "react-native";
import { BackArrow, FavouritesBen, Pay2, ProfilePf, Scan } from "../../assets";
import TransferHeader from "./components/Header";

// 2 tabs
// Recent
const Recent = () => {
    return (
        <View style={styles.beneficiaryListContainer}>
            <View style={styles.beneficiary}>
                <View style={styles.ellipse} >
                    <ProfilePf />
                </View>
                <View style={styles.beneficiaryTextContainer}>
                <Text style={styles.beneficiaryText}>QUDUS DAMOLA OYEWOLE</Text>
                <Text style={styles.beneficiaryText2}>160403038</Text>
                </View>
            </View>
            <View style={styles.beneficiaryLine} />
            <View style={styles.beneficiary}>
                <View style={styles.ellipse} >
                    <ProfilePf />
                </View>
                <View style={styles.beneficiaryTextContainer}>
                <Text style={styles.beneficiaryText}>QUDUS DAMOLA OYEWOLE</Text>
                <Text style={styles.beneficiaryText2}>160403038</Text>
                </View>
            </View>
            <View style={styles.beneficiaryLine} />
        </View>
    );
};

// Favourites
const Favourites = () => {
    return (
        <View style={{ marginTop: 75, alignItems: 'center',  }}>
           <FavouritesBen />
        </View>
    );
};





const TransferScreen = ({ navigation }: any) => {

    const [beneficiaryTab, setBeneficiaryTab] = React.useState("recent");

    const changeBeneficiaryTab = (tab: string) => {
        setBeneficiaryTab(tab);
    };

    return (
        <View style={styles.container}>
            <TransferHeader 
                navigation={navigation}
            />
            <View style={styles.line} />
            <View>
                <Text style={styles.headingText}>Student Matric Number</Text>
                <View style={styles.textInput}>
                    <TextInput 
                    keyboardType="numeric"
                    style={styles.inputMatNumber}
                    placeholder="Matriculation number" 
                    />
                    <TouchableOpacity

                    onPress={() => navigation.navigate('TransferScreen2')}
                    >
                        <Scan />
                    </TouchableOpacity>
                </View>

                <Text style={styles.headingText}>Beneficiaries</Text>
                <View style={styles.beneficiaryTabs}>
                    <TouchableOpacity 
                        style={[
                            styles.beneficiaryTab,
                            { 
                                borderBottomWidth: beneficiaryTab === "recent" ? 2 : 0,
                                borderBottomColor: beneficiaryTab === "recent" ? "#4169E1" : "#fff",
                            }
                        ]}
                        onPress={e => { changeBeneficiaryTab("recent") }}
                        >
                        <Text style={[
                            styles.beneficiaryTabText,
                            {
                                fontWeight: beneficiaryTab === "recent" ? "600" : "400",
                            }
                        ]}>Recent</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[
                            styles.beneficiaryTab,
                            {
                                borderBottomWidth: beneficiaryTab === "favourites" ? 2 : 0,
                                borderBottomColor: beneficiaryTab === "favourites" ? "#4169E1" : "#fff",
                            }
                        ]}
                        onPress={e => { changeBeneficiaryTab("favourites") }}
                        >
                        <Text style={[
                            styles.beneficiaryTabText,
                            {
                                fontWeight: beneficiaryTab === "favourites" ? "600" : "400",
                            }
                        ]}>Favourites</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.beneficiaryBody} >
                    {beneficiaryTab === "recent" ? <Recent /> : <Favourites />}
                </ScrollView>
            </View>
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
        paddingLeft: 85.5,
        fontSize: 16,
        fontWeight: "600",
    },
    line: {
        height: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    headingText: {
        fontFamily: "Open Sans",
        color: "#000000",
        fontSize: 12,
        fontWeight: "600",
        lineHeight: 20,
        marginTop: 20,
        marginLeft: 24,
    },
    textInput: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        paddingVertical: 15,
        backgroundColor: "#fff",
        marginTop: 10,
        height: 54,
        marginHorizontal: 17,
        borderRadius: 10,
    },
    inputMatNumber: {
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 20,
        color: "#454555",
    },
    beneficiaryTabs: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        // paddingVertical: 15,
        backgroundColor: "#fff",
        marginTop: 10,
        height: 54,
        marginHorizontal: 17,
        borderRadius: 10,
    },
    beneficiaryTab: {
        alignItems: "center",
        justifyContent: "center",
    },
    beneficiaryTabText: {
        fontSize: 14,
        fontWeight: "600",
        lineHeight: 20,
        color: "#454555",
        marginHorizontal: 20,
    },
    ellipse: {
        width: 39,
        height: 39,
        borderRadius: 50,
        backgroundColor: "#D9D9D9",
        alignItems: "center",
        justifyContent: "center",
    },
    beneficiaryListContainer: {
        backgroundColor: "#fff",
        marginTop: 10,
        height: 54,
        marginHorizontal: 17,
        borderRadius: 10,
    },
    beneficiary: {
        flexDirection: "row",
        paddingVertical: 15,
    },
    beneficiaryTextContainer: {
        marginLeft: 20,
    },
    beneficiaryText: {
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 20,
        color: "#000000",
        fontFamily: "Open Sans",
    },
    beneficiaryText2: {
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 20,
        color: "#454555",
    },
    beneficiaryLine: {
        height: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        marginLeft: 55,
    },
    beneficiaryBody: {
        marginTop: 3,
        height: 300,
        marginHorizontal: 17,
        borderRadius: 10,
        backgroundColor: "#fff",
    },
});

export default TransferScreen;