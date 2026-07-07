import { Stack } from "expo-router";
import SafeScreen from "../../components/SafeSreen";
export default function RootLayout() {
  return (
    <SafeScreen>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeScreen>
  );
}
