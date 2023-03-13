
import { StatusBar, View } from 'react-native';
import Keyboard from './Components/Keyboard';

export default function App() {
  return (
    <View className="flex-1 bg-black">
      <StatusBar barStyle={'default'}/>
      <Keyboard/>
    </View>
  );
}