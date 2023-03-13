import { TouchableOpacity, Text } from 'react-native'

function Button({text, ...styles}) {
  return (
    <TouchableOpacity className="w-20 h-20 bg-gray-800 m-1 rounded-2xl flex items-center justify-center" {...styles}>
        <Text className="text-white font-bold text-2xl">{text}</Text>
    </TouchableOpacity>
  )
}
export default Button