import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import SafeScreen from "../../../components/SafeSreen";

const publishableKey =
  "pk_test_Y3JlYXRpdmUtc2hyaW1wLTgzLmNsZXJrLmFjY291bnRzLmRldiQ";

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <SafeScreen>
        <Slot />
      </SafeScreen>
      <StatusBar style="dark" />
    </ClerkProvider>
  );
}
