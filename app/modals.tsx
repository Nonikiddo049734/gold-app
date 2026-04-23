import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Modal() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        This is a modal
      </Text>

      {/* ✅ Go to Tabs (Home) */}
      <Button
        title="Go to Home Screen"
        onPress={() => router.replace("/(tabs)")}
      />

      {/* Close modal */}
      <Button
        title="Close"
        onPress={() => router.back()}
      />
    </View>
  );
}