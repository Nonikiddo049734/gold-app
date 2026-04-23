import { Feather } from "@expo/vector-icons";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from "react-native";

export default function Plans() {
  return (
    <SafeAreaView style={styles.container}>
      {/* TITLE */}
      <Text style={styles.title}>Plans</Text>

      {/* BLUE CARD */}
      <View style={styles.balanceCard}>
        <Text style={styles.cardLabel}>SAVINGS PLAN</Text>
        <Text style={styles.amount}>USD 0.00</Text>
      </View>

      {/* ACTION CARDS */}
      <View style={styles.actionRow}>
        {/* CREATE PLAN */}
        <View style={[styles.actionCard, styles.orangeBorder]}>
          <View style={styles.iconBoxLight}>
            <Feather name="archive" size={20} color="#FF8C32" />
          </View>

          <Text style={styles.orangeTitle}>Create Plan</Text>
          <Text style={styles.desc}>
            Create a new fixed savings plan
          </Text>
        </View>

        {/* INTEREST CALCULATOR */}
        <View style={[styles.actionCard, styles.blueBorder]}>
          <View style={styles.iconBoxDark}>
            <Feather name="calculator" size={20} color="#7EA6FF" />
          </View>

          <Text style={styles.whiteTitle}>Interest Calculator</Text>
          <Text style={styles.desc}>
            Calculate the interest on your savings
          </Text>
        </View>
      </View>

      {/* ALL SAVINGS */}
      <Text style={styles.sectionTitle}>ALL SAVINGS PLANS</Text>

      <View style={styles.savingsRow}>
        {/* FLEXIBLE */}
        <View style={styles.savingsCard}>
          <Text style={styles.smallLabel}>FLEXIBLE SAVINGS</Text>
          <Text style={styles.bigAmount}>$0.00</Text>

          <View style={styles.actionBtn}>
            <View style={styles.blueCircle}>
              <Feather name="plus" size={16} color="#fff" />
            </View>
            <Text style={styles.btnText}>ADD FUNDS</Text>
          </View>
        </View>

        {/* FIXED */}
        <View style={styles.savingsCard}>
          <Text style={styles.smallLabel}>FIXED SAVINGS</Text>
          <Text style={styles.bigAmount}>$0.00</Text>

          <View style={styles.actionBtn}>
            <View style={styles.blueCircle}>
              <Feather name="list" size={16} color="#fff" />
            </View>
            <Text style={styles.btnText}>VIEW ALL PLANS</Text>
          </View>
        </View>
      </View>

      {/* TODAY RATE */}
      <Text style={styles.sectionTitle}>TODAY'S RATE</Text>
      <Text style={styles.rateText}>
        This rate is updated daily (Apr 13, 2026 02:43 AM)
      </Text>
    </SafeAreaView>
  );
}const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B0B",
    paddingHorizontal: 16,
  },

  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 20,
  },

  balanceCard: {
    backgroundColor: "#2F4FD8",
    borderRadius: 18,
    padding: 20,
  },

  cardLabel: {
    color: "#C7D2FE",
    fontSize: 12,
    letterSpacing: 1,
  },

  amount: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 10,
  },

  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  actionCard: {
    width: "48%",
    borderRadius: 16,
    padding: 15,
    backgroundColor: "#121212",
  },

  orangeBorder: {
    borderWidth: 1,
    borderColor: "#FF8C32",
  },

  blueBorder: {
    borderWidth: 1,
    borderColor: "#2F4FD8",
  },

  iconBoxLight: {
    backgroundColor: "#FFE9D6",
    width: 45,
    height: 45,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  iconBoxDark: {
    backgroundColor: "#1B2A5B",
    width: 45,
    height: 45,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  orangeTitle: {
    color: "#FF8C32",
    fontSize: 16,
    fontWeight: "600",
  },

  whiteTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  desc: {
    color: "#aaa",
    fontSize: 12,
    marginTop: 5,
  },

  sectionTitle: {
    color: "#888",
    marginTop: 25,
    marginBottom: 10,
    fontSize: 12,
    letterSpacing: 1,
  },

  savingsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  savingsCard: {
    width: "48%",
    backgroundColor: "#1A1A1A",
    borderRadius: 16,
    padding: 15,
  },

  smallLabel: {
    color: "#888",
    fontSize: 12,
  },

  bigAmount: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginVertical: 10,
  },

  actionBtn: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  blueCircle: {
    backgroundColor: "#2F4FD8",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  btnText: {
    color: "#fff",
    fontSize: 12,
  },

  rateText: {
    color: "#aaa",
    fontSize: 12,
  },
});