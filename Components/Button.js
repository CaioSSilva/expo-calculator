import { TouchableOpacity, Text } from 'react-native'

function Button({text, isDark, ...styles}) {
  return (
    <TouchableOpacity className={"w-20 h-20 m-1 rounded-3xl flex items-center justify-center " + (isDark ?  'bg-gray-800' : 'bg-[#e5e3e5]')} {...styles}>
        <Text className=" text-white text-3xl " {...styles}>{text}</Text>
    </TouchableOpacity>
  )
}
export default Button