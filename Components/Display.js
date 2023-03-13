import { View, Text } from 'react-native'

export default function Display({caracters}) {
  return (
    <View className="bg-zinc-900 w-screen h-40 items-end mt-36 justify-center">
        <Text className="text-white font-bold text-3xl">
            {caracters}
        </Text>
    </View>
  )
}
