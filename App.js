import { useState } from "react";
import { Image, StatusBar, Switch, View } from "react-native";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";
import Keyboard from "./Components/Keyboard";
import MoonW from './assets/moon-white.png'
import MoonB from './assets/moon-black.png'
import SunW from './assets/sun-white.png'
import SunB from './assets/sun-black.png'
export default function App() {
  const [dark, setDark] = useState(false);
  return (
    <View className={"flex-1 " + (dark ? "bg-black" : "bg-[#d4d5d6]")}>
      <View className="absolute flex flex-row items-center justify-center">
        <Image source={dark ? SunW : SunB} className="w-5 h-5"/>
        <Switch
          value={dark}
          onValueChange={() => {
            setDark(!dark);
          }}
          trackColor={{ true: "rgb(30,64,175)" }}
          thumbColor={isEnabled ? "white" : "dark"}
        />
        <Image source={dark ? MoonW : MoonB} className="w-4 h-4"/>
      </View>
      <StatusBar />
      <Keyboard isDark={dark} />
    </View>
  );
}
