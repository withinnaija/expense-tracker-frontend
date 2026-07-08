import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS } from "../constants/colors";

const SafeSreen = ({ children }) => {
  const insect = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: insect.top,
        flex: 1,
        backgroungColor: COLORS.background,
      }}
    >
      {children}
    </View>
  );
};

export default SafeSreen;
