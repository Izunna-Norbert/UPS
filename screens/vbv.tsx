// import React from "react";
// import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// const BottomNav = () => {
//     return (
//         <View style={styles.container}>
//          <View style={styles.line} />
//         <View style={styles.bars}>
//             <TouchableOpacity style={styles.bar}>
//             <Image source={require("../Image/wallet.png")} />
//             <Text style={styles.barText}>Home</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.bar}>
//             <Image source={require("../Image/wallet.png")} />
//             <Text style={styles.barText}>Wallet</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.bar}>
//             <Image source={require("../Image/wallet.png")} />
//             <Text style={styles.barText}>Transfer</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.bar}>
//             <Image source={require("../Image/wallet.png")} />
//             <Text style={styles.barText}>Profile</Text>
//             </TouchableOpacity>
//         </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         position: "absolute",
//         bottom: 0,
//         width: "100%",
//         height: 80,
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     bars: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         width: "100%",
//         paddingHorizontal: 55,
//     },
//     bar: {
//         alignItems: "center",
//     },
//     barText: {
//         fontSize: 12,
//         fontWeight: "600",
//         lineHeight: 15,
//         color: "#4548C7",
//     },
//     line: {
//         height: 2,
//         backgroundColor: "rgba(0, 0, 0, 0.2)",
//     },
// });

// export default BottomNav;

// const wallet = 'Wallet'
// const transfer = 'Transfer'
// const profile = 'Profile'
// const settings = 'Settings'

// const Tab = createBottomTabNavigator();
// export default function MainContainer () {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator
//             initialRouteName={wallet}
//             screenOptions={{
                
//             }}
//             >
//             </Tab.Navigator>
//         </NavigationContainer>
//     )
// } 