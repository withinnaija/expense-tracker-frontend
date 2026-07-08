import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { ClerkProvider } from "@clerk/expo";
import { Slot } from "expo-router";
import SafeScreen from "../../components/SafeSreen";

export default function RootLayout() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

  return (
    // <SafeScreen>
    //   <Stack screenOptions={{ headerShown: false }} />
    // </SafeScreen>
    //
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <SafeScreen>
        <Slot />
      </SafeScreen>
    </ClerkProvider>
  );
}
