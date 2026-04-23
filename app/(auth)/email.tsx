import { useRouter } from "expo-router";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Email() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      <Text style={styles.label}>Email</Text>

      <TextInput
        placeholder="Enter your Email"
        placeholderTextColor="#888"
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Deposits insured by • NDIC{"\n"}Backed by CBN
      </Text>

    </View>
  );
}const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B0B",
    padding: 20,
    justifyContent: "center",
  },

  welcome: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 20,
  },

  label: {
    color: "#fff",
    marginBottom: 10,
    fontSize: 14,
  },

  input: {
    backgroundColor: "#1A1A1A",
    borderRadius: 10,
    padding: 15,
    color: "#fff",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#4F8CFF",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  forgot: {
    color: "#aaa",
    textAlign: "right",
    marginBottom: 20,
  },

  footer: {
    color: "#888",
    fontSize: 12,
    textAlign: "center",
    marginTop: 20,
  },
});