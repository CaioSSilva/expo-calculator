import { useState } from "react";
import { View } from "react-native";
import Button from "./Button";
import Display from "./Display";

export default function Keyboard({ isDark }) {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");

  const handleNumberClick = (Value) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + Value);
    }
  };

  const handleOperatonClick = (Value) => {
    setOperation(Value);
    setSecondNumber(firstNumber);
    setFirstNumber("");
  };

  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
  };

  const OperationResult = () => {
    switch (operation) {
      case "+":
        setFirstNumber(parseFloat(secondNumber) + parseFloat(firstNumber));
        break;
      case "-":
        setFirstNumber(parseFloat(secondNumber) - parseFloat(firstNumber));
        break;
      case "*":
        setFirstNumber(parseFloat(secondNumber) * parseFloat(firstNumber));
        break;
      case "/":
        setFirstNumber(parseFloat(secondNumber) / parseFloat(firstNumber));
        break;
      default:
        clear();
        setFirstNumber(0);
        break;
    }
  };
  return (
    <>
      <Display isDark={isDark} caracters={firstNumber} />
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
            text="+/-"
            isDark={isDark}
            className="bg-gray-700"
            onPress={() => handleOperatonClick("+/-")}
          />
          <Button
            text="%"
            isDark={isDark}
            className="bg-gray-700"
            onPress={() => handleOperatonClick("%")}
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
              if (firstNumber.length > 0) {
                setFirstNumber(firstNumber.slice(0, -1));
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
