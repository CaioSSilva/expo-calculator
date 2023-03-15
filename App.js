import { useEffect, useState } from "react";
import { StatusBar, View } from "react-native";
import Keyboard from "./Components/Keyboard";
import ThemeChange from "./Components/ThemeChange";
import {Appearance} from 'react-native';

export default function App() {
  const [dark, setDark] = useState(false);
  let colorScheme = Appearance.getColorScheme();

  useEffect(() => {
    if (colorScheme === "dark") {
      setDark(true);
    } else {
      setDark(false);
    }
  },[]);

  return (
    <View className={"flex-1 " + (dark ? "bg-black" : "bg-[#d4d5d6]")}>
      <StatusBar
        backgroundColor={dark ? "black" : "white"}
        barStyle={dark ? "light-content" : "dark-content"}
      />
      <ThemeChange isDark={dark} onPress={() => setDark(!dark)} />
      <Keyboard isDark={dark} />
    </View>
  );
}
