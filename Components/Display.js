import { View, Text } from 'react-native'

export default function Display({caracters, isDark}) {
  return (
    <View className={" w-screen h-40 items-end mt-24 justify-center " + (isDark ? "bg-zinc-900": 'bg-[#dfe0e0]')}>
        <Text className={" font-bold text-3xl mr-3 " + (isDark ? 'text-white' : 'text-black')}>
            {caracters}
        </Text>
    </View>
  )
}
