import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  const [hideBalance, setHideBalance] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.profile}>
          <View style={styles.avatar} />
          <View>
            <Text style={styles.greeting}>Hi, @Onyeke_Chinonso_T</Text>
            <Text style={styles.sub}>Start saving now</Text>
          </View>
        </View>

        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Feather name="message-circle" size={22} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* BALANCE CARD */}
      <View style={styles.balanceCard}>
        <View style={styles.balanceRow}>
          <Text style={styles.balanceLabel}>PORTFOLIO BALANCE</Text>

          <TouchableOpacity onPress={() => setHideBalance(!hideBalance)}>
            <Feather
              name={hideBalance ? "eye-off" : "eye"}
              size={18}
              color="#fff"
            />
          </TouchableOpacity>

          <Text style={styles.history}>Transaction History</Text>
        </View>

        <Text style={styles.balanceAmount}>
          {hideBalance ? "*********" : "₦ 2,450,120.00"}
        </Text>
      </View>

      {/* TOTAL SAVINGS CARD */}
      <View style={styles.savingsCard}>
        <View style={styles.savingsLeft}>
          <View style={styles.iconBox}>
            <Feather name="feather" size={20} color="#2F4FD8" />
          </View>
          <View>
            <Text style={styles.savingsText}>Total Savings</Text>
            <Text style={styles.savingsAmount}>
              {hideBalance ? "*********" : "₦ 890,000.00"}
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.planBtn}>
          <Text style={styles.planText}>Plans</Text>
        </TouchableOpacity>
      </View>

      {/* QUICK ACTIONS */}
      <Text style={styles.sectionTitle}>QUICK ACTIONS</Text>

      <View style={styles.grid}>
        {[
          { name: "To Bank", icon: "home" },
          { name: "Withdraw", icon: "arrow-down" },
          { name: "Save", icon: "archive" },
          { name: "Invest", icon: "trending-up" },
          { name: "High Yield", icon: "bar-chart" },
          { name: "Swap", icon: "repeat" },
        ].map((item, index) => (
          <View key={index} style={styles.gridItem}>
            <View style={styles.gridIcon}>
              <Feather name={item.icon as any} size={20} color="#2F4FD8" />
            </View>
            <Text style={styles.gridText}>{item.name}</Text>
          </View>
        ))}
      </View>

      {/* TODO */}
      <Text style={styles.sectionTitle}>TO DO</Text>

      <View style={styles.todoItem}>
        <Text style={styles.todoText}>Update your profile.</Text>
      </View>

      <View style={styles.todoItem}>
        <Text style={styles.todoText}>Verify your Phone Number</Text>
      </View>
    </SafeAreaView>
  );
}const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B0B",
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  profile: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#2A2A2A",
    marginRight: 10,
  },

  greeting: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  sub: {
    color: "#aaa",
    fontSize: 12,
  },

  headerIcons: {
    justifyContent: "center",
  },

  balanceCard: {
    backgroundColor: "#2F4FD8",
    borderRadius: 18,
    padding: 20,
    marginTop: 20,
  },

  balanceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  balanceLabel: {
    color: "#C7D2FE",
    fontSize: 12,
  },

  history: {
    color: "#fff",
    marginLeft: "auto",
    fontSize: 12,
  },

  balanceAmount: {
    color: "#fff",
    fontSize: 28,
    marginTop: 15,
    fontWeight: "bold",
  },

  savingsCard: {
    backgroundColor: "#F5F7FF",
    borderRadius: 16,
    padding: 15,
    marginTop: -20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  savingsLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#E6EBFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  savingsText: {
    color: "#333",
    fontSize: 12,
  },

  savingsAmount: {
    fontSize: 18,
    fontWeight: "bold",
  },

  planBtn: {
    borderWidth: 1,
    borderColor: "#2F4FD8",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 6,
  },

  planText: {
    color: "#2F4FD8",
  },

  sectionTitle: {
    color: "#aaa",
    marginTop: 25,
    marginBottom: 10,
    fontSize: 12,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  gridItem: {
    width: "30%",
    alignItems: "center",
    marginBottom: 20,
  },

  gridIcon: {
    width: 55,
    height: 55,
    borderRadius: 12,
    backgroundColor: "#F5F7FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },

  gridText: {
    color: "#fff",
    fontSize: 12,
  },

  todoItem: {
    backgroundColor: "#1A1A1A",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },

  todoText: {
    color: "#fff",
  },
});