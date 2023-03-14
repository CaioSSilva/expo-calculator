import { useState } from "react";
import { StatusBar, View } from "react-native";
import Keyboard from "./Components/Keyboard";
import ThemeChange from "./Components/ThemeChange";
export default function App() {
  const [dark, setDark] = useState(false)
  return (
    <View className={"flex-1 " + (dark ? "bg-black" : "bg-[#d4d5d6]")}>
      <StatusBar />
      <ThemeChange isDark={dark} onPress={()=>setDark(!dark)}/>
      <Keyboard isDark={dark} />
    </View>
  );
}
