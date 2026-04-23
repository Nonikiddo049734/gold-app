import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Welcome() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      {/* Logo Circle */}
      <View style={styles.logo}>
        <Ionicons name="stats-chart" size={40} color="#4F8CFF" />
      </View>

      {/* Title */}
      <Text style={styles.title}>Welcome to the{"\n"}Gold-finance</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        To get started create an account, if you already have an account we will log you in
      </Text>

      {/* Buttons */}
      <TouchableOpacity
        style={styles.primaryBtn}
        onPress={() => router.replace("/(tabs)")}
      >
        <Text style={styles.primaryText}>Continue with Email</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.outlineBtn}>
        <Text style={styles.outlineText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.outlineBtn}>
        <Text style={styles.outlineText}>Continue with Apple</Text>
      </TouchableOpacity>

      {/* Footer */}
      <Text style={styles.footer}>Deposits insured by NDIC</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B0F",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#1C1C24",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },

  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    color: "#aaa",
    textAlign: "center",
    marginBottom: 30,
    fontSize: 14,
  },

  primaryBtn: {
    backgroundColor: "#4F8CFF",
    paddingVertical: 15,
    width: "100%",
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 15,
  },

  primaryText: {
    color: "#fff",
    fontWeight: "bold",
  },

  outlineBtn: {
    borderWidth: 1,
    borderColor: "#4F8CFF",
    paddingVertical: 15,
    width: "100%",
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 15,
  },

  outlineText: {
    color: "#4F8CFF",
    fontWeight: "bold",
  },

  footer: {
    color: "#777",
    marginTop: 20,
    fontSize: 12,
  },
});