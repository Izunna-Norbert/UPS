import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Arrow, Pay1, Pay2, Transfer1, Transfer2, Plus, MasterCard, Thrash } from "../../assets";

const WalletHomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.walletText}>Wallet</Text>
          <View style={styles.addButton}>
            <TouchableOpacity>
              <Plus />
            </TouchableOpacity>
            <Text style={styles.addMoneyText}>Add Money</Text>
          </View>
        </View>
      </View>
      <View style={styles.line} />
      <ScrollView>
      <View style={styles.bars}>
        <View style={styles.balanceBar}>
          <Text style={styles.balanceBarText}>Available Balance</Text>
          <Text style={styles.balanceBarAmount}>₦ 2,000</Text>
          < TouchableOpacity style={{ position: "absolute", right: 20, paddingTop: 27 }}>
            <Arrow />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.paymentBar}>
          <Pay1 />
             <Text style={styles.paymentBarText}>Make Payment Now</Text>
          <Pay2 />
        </TouchableOpacity>
        <TouchableOpacity style={styles.transferBar}>
          <Transfer1 />
          <Text style={styles.transferBarText}>Transfer to student</Text>
          <Transfer2 />
        </TouchableOpacity>
      </View>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Manage Cards</Text>
      </View>
      <View style={styles.cards}>
        <TouchableOpacity style={styles.card}>
            <MasterCard />
          <Text style={styles.cardText}>****5242</Text>
          <TouchableOpacity>
                <Thrash />
          </TouchableOpacity>
        </TouchableOpacity>
        <View style={styles.line} />
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "inter",
    backgroundColor: "#FFFFFF",
  },
  header: {
    paddingVertical: 17,
    paddingHorizontal: 24,
    height: 90,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    lineHeight: 20
  },
  walletText: {
    fontSize: 16,
    fontWeight: "600",
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addMoneyText: {
    marginLeft: 14.25,
    marginRight: 5,
    fontSize: 14,
    color: "#4548C7",
    fontWeight: "600",
    lineHeight: 17,
  },
  plusButton: {
    // fontSize: 14,
    // fontWeight: "bold",
    // color: "#4548C7",
  },
  line: {
    height: 0.5,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  bars: {
    paddingHorizontal: 19,
    paddingVertical: 20,
  },
  balanceBar: {
    backgroundColor: "#454555",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 24,
    marginBottom: 14,
    height: 110,
  },
  balanceBarText: {
    fontSize: 12,
    fontWeight: "400",
    color: "white",
    lineHeight: 20,
    marginBottom: 12,
  },
  balanceBarAmount: {
    fontSize: 35,
    fontWeight: "400",
    color: "white",
    lineHeight: 30,
    paddingTop: 8,
  },
  paymentBar: {
    backgroundColor: "#4548C7",
    // borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 55,
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 110,
  },
  paymentBarText: {
    fontSize: 16,
    fontWeight: "400",
    color: "white",
    lineHeight: 17,
    textAlign: "center",
  },
  transferBar: {
    backgroundColor: "#198F67",
    // borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 55,
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 110,
  },
  transferBarText: {
    fontSize: 16,
    fontWeight: "400",
    color: "white",
    lineHeight: 17,
  },
  heading: {
    paddingHorizontal: 19,
    paddingVertical: 20,
    backgroundColor: "#F5F5F5",
  },
  headingText: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 19,
  },
  cards: {
    paddingHorizontal: 19,
    paddingVertical: 20,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    height: 50,
  },
  cardImage: {
    width: 20,
    height: 20,
  },
  cardText: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 19,
  },
});

export default WalletHomeScreen;
