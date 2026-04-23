import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Referral() {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Referral</Text>
      </View>

      {/* MAIN CARD */}
      <View style={styles.card}>
        <MaterialIcons name="emoji-events" size={40} color="#FFD700" />

        <Text style={styles.mainText}>
          Invite friends and earn rewards 🎉
        </Text>

        <Text style={styles.subText}>
          Share your referral link and earn points when they sign up.
        </Text>

        {/* REFERRAL CODE */}
        <View style={styles.codeBox}>
          <Text style={styles.code}>ONYEKE123</Text>
          <Ionicons name="copy-outline" size={18} color="#aaa" />
        </View>

        {/* BUTTON */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Share Invite</Text>
        </TouchableOpacity>
      </View>

      {/* EXTRA OPTIONS */}
      <View style={styles.card}>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>View Referral History</Text>
          <Ionicons name="chevron-forward" size={18} color="#888" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Referral Terms & Conditions</Text>
          <Ionicons name="chevron-forward" size={18} color="#888" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* 🎨 STYLES */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
    padding: 16,
  },

  header: {
    marginBottom: 10,
  },

  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "700",
  },

  card: {
    backgroundColor: "#121212",
    borderRadius: 14,
    padding: 16,
    marginTop: 16,
    alignItems: "center",
  },

  mainText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
    textAlign: "center",
  },

  subText: {
    color: "#888",
    fontSize: 13,
    textAlign: "center",
    marginTop: 6,
  },

  codeBox: {
    marginTop: 15,
    backgroundColor: "#1a1a1a",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  code: {
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 1,
  },

  button: {
    marginTop: 15,
    backgroundColor: "#3b5bff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },

  item: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#1f1f1f",
  },

  itemText: {
    color: "#fff",
    fontSize: 14,
  },
});