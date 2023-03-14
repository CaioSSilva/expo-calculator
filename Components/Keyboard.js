import { useState } from "react";
import { View } from "react-native";
import Button from "./Button";
import Display from "./Display";

export default function Keyboard({ isDark }) {
  const [text, setText] = useState("")
  const [number, setNumber] = useState('')
  
  const handleNumberClick = (Value) =>{
    if(text.length < 20){
      setText(text + Value)
      setNumber(number + Value)
    }
  }

  const handleOperatonClick = (Value) =>{
    setText(text + Value)
    setNumber('')
  }
  const clear = () =>{
    setNumber('')
    setText('')
  }
  
  const OperationResult = () => {
    try {
      setText(eval(text))
    } catch (error) {
      clear()
    }
  }
  return (
    <>
      <Display isDark={isDark} caracters={text} />
      <View className="flex-1 bottom-0 absolute w-screen mb-5">
        <View className="flex flex-row justify-center">
          <Button
            text="C"
            isDark={isDark}
            className="bg-gray-700"
            onPress={() => {
              clear();
            }}
          />
          <Button
            text="^"
            isDark={isDark}
            className="bg-gray-700"
            onPress={() => handleOperatonClick("**")}
          />
          <Button
            text="%"
            isDark={isDark}
            className="bg-gray-700"
            onPress={() => handleOperatonClick("/100")}
          />
          <Button
            text="÷"
            isDark={isDark}
            className="bg-blue-800"
            onPress={() => handleOperatonClick("/")}
          />
        </View>
        <View className="flex flex-row justify-center ">
          <Button
            text="7"
            className={isDark ? 'text-white' : 'text-black'}
            isDark={isDark}
            onPress={() => handleNumberClick("7")}
          />
          <Button
            text="8"
            className={isDark ? 'text-white' : 'text-black'}
            isDark={isDark}
            onPress={() => handleNumberClick("8")}
          />
          <Button
            text="9"
            className={isDark ? 'text-white' : 'text-black'}
            isDark={isDark}
            onPress={() => handleNumberClick("9")}
          />
          <Button
            text="x"
            isDark={isDark}
            className="bg-blue-800"
            onPress={() => handleOperatonClick("*")}
          />
        </View>
        <View className="flex flex-row justify-center">
          <Button
            text="4"
            className={isDark ? 'text-white' : 'text-black'}
            isDark={isDark}
            onPress={() => handleNumberClick("4")}
          />
          <Button
            text="5"
            className={isDark ? 'text-white' : 'text-black'}
            isDark={isDark}
            onPress={() => handleNumberClick("5")}
          />
          <Button
            text="6"
            className={isDark ? 'text-white' : 'text-black'}
            isDark={isDark}
            onPress={() => handleNumberClick("6")}
          />
          <Button
            text="-"
            isDark={isDark}
            className="bg-blue-800"
            onPress={() => handleOperatonClick("-")}
          />
        </View>
        <View className="flex flex-row justify-center">
          <Button
            text="1"
            className={isDark ? 'text-white' : 'text-black'}
            isDark={isDark}
            onPress={() => handleNumberClick("1")}
          />
          <Button
            text="2"
            className={isDark ? 'text-white' : 'text-black'}
            isDark={isDark}
            onPress={() => handleNumberClick("2")}
          />
          <Button
            text="3"
            className={isDark ? 'text-white' : 'text-black'}
            isDark={isDark}
            onPress={() => handleNumberClick("3")}
          />
          <Button
            text="+"
            isDark={isDark}
            className="bg-blue-800"
            onPress={() => handleOperatonClick("+")}
          />
        </View>
        <View className="flex flex-row justify-center">
          <Button
            text="."
            className={isDark ? 'text-white' : 'text-black'}
            isDark={isDark}
            onPress={() => handleNumberClick(".")}
          />
          <Button
            text="0"
            className={isDark ? 'text-white' : 'text-black'}
            isDark={isDark}
            onPress={() => handleNumberClick("0")}
          />
          <Button
            text="⌫"
            isDark={isDark}
            className="bg-orange-600"
            onPress={() => {
              if (text.length > 0) {
                setText(text.slice(0, -1));
              } else {
                clear();
              }
            }}
          />
          <Button
            text="="
            isDark={isDark}
            className="bg-yellow-600"
            onPress={() => OperationResult()}
          />
        </View>
      </View>
    </>
  );
}
