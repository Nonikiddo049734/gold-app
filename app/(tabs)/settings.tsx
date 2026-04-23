import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function More() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Account</Text>
        <Ionicons name="ellipsis-vertical" size={22} color="#fff" />
      </View>

      {/* PROFILE */}
      <View style={styles.profileRow}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={22} color="#4c7cff" />
        </View>

        <Text style={styles.username}>@ONYEKE_CHINONSO</Text>

        <Ionicons name="copy-outline" size={18} color="#aaa" />
      </View>

      {/* REFERRAL CARD */}
      <TouchableOpacity style={styles.referralCard}>
        <View>
          <Text style={styles.referralTitle}>Referral</Text>
          <Text style={styles.referralSub}>
            Refer friends and earn points
          </Text>
        </View>

        <View style={styles.referralRight}>
          <MaterialIcons name="emoji-events" size={22} color="#FFD700" />
          <Ionicons name="chevron-forward" size={20} color="#fff" />
        </View>
      </TouchableOpacity>

      {/* SETTINGS */}
      <View style={styles.card}>
        {renderItem(
          <Feather name="user-plus" size={20} color="#4c7cff" />,
          "Account Settings",
          "Edit your profile and next of kin"
        )}

        {renderItem(
          <Ionicons name="shield-checkmark-outline" size={20} color="#4c7cff" />,
          "Verify Phone Number",
          "Enable OTP notifications"
        )}

        {renderItem(
          <Ionicons name="card-outline" size={20} color="#4c7cff" />,
          "KYC Verification",
          "Complete your KYC"
        )}

        {renderItem(
          <Ionicons name="chatbubble-ellipses-outline" size={20} color="#4c7cff" />,
          "Support",
          "Chat with our support agents"
        )}

        {/* BIOMETRICS */}
        <View style={styles.item}>
          <View style={styles.left}>
            <Ionicons name="finger-print" size={20} color="#4c7cff" />
            <View>
              <Text style={styles.itemTitle}>Biometrics</Text>
              <Text style={styles.itemSub}>Enable Secure Login</Text>
            </View>
          </View>

          <Switch
            value={isEnabled}
            onValueChange={() => setIsEnabled(!isEnabled)}
            thumbColor={isEnabled ? "#fff" : "#ccc"}
            trackColor={{ true: "#4c7cff", false: "#444" }}
          />
        </View>

        {renderItem(
          <Ionicons name="shield-outline" size={20} color="#4c7cff" />,
          "Security",
          "Add an extra layer of security"
        )}
      </View>
    </SafeAreaView>
  );
}
/* 🔧 ITEM */
 function renderItem(icon, title, subtitle) {
  return (
    <TouchableOpacity style={styles.item}>
      <View style={styles.left}>
        {icon}
        <View>
          <Text style={styles.itemTitle}>{title}</Text>
          <Text style={styles.itemSub}>{subtitle}</Text>
        </View>
      </View>

      <Ionicons name="chevron-forward" size={18} color="#aaa" />
    </TouchableOpacity>
  );
}

/* 🎨 STYLES */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0b0b",
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },

  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    gap: 10,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#111",
    borderWidth: 1,
    borderColor: "#4c7cff",
    justifyContent: "center",
    alignItems: "center",
  },

  username: {
    color: "#fff",
    fontSize: 16,
    flex: 1,
  },

  referralCard: {
    backgroundColor: "#2d4ed8",
    marginTop: 24,
    padding: 18,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  referralTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  referralSub: {
    color: "#dbeafe",
    fontSize: 12,
    marginTop: 4,
  },

  referralRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  card: {
    backgroundColor: "#121212",
    borderRadius: 16,
    marginTop: 24,
    paddingVertical: 6,
  },

  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: "#1f1f1f",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  itemTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },

  itemSub: {
    color: "#888",
    fontSize: 12,
    marginTop: 2,
  },
});

