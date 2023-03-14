import { TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function ThemeChange({ isDark, ...touch }) {
  return (
    <View className="absolute">
      <TouchableOpacity
        className={
          "w-10 h-10 ml-3 mt-3 rounded-full items-center justify-center " +
          (isDark ? "bg-blue-800" : "bg-orange-600")
        }
        {...touch}
      >
        {isDark ? <Feather name="sun" size={20} color="white" /> : <Feather name="moon" size={24} color="white" />}
      </TouchableOpacity>
    </View>
  );
}
