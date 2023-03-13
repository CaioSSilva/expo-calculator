import { useState } from "react";
import { View } from "react-native";
import Button from "./Button";
import Display from "./Display";

export default function Keyboard() {
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
      case '+':
        setFirstNumber(parseFloat(secondNumber) + parseFloat(firstNumber));
      break;
      case '-':
        setFirstNumber(parseFloat(secondNumber) - parseFloat(firstNumber));
      break;
      case '*':
        setFirstNumber(parseFloat(secondNumber) * parseFloat(firstNumber));
      break;
      case '/':
        setFirstNumber(parseFloat(secondNumber) / parseFloat(firstNumber));
      break;
      default:
        clear()
        setFirstNumber(0)
      break
    }
  };
  return (
    <>
      <Display caracters={firstNumber}/>
      <View className="flex-1 bottom-0 absolute w-screen mb-5">
        <View className="flex flex-row justify-center">
          <Button text="C" className="bg-gray-700" onPress={()=>{clear()}}/>
          <Button text="+/-" className="bg-gray-700" onPress={()=> handleOperatonClick('+/-')}/>
          <Button text="%" className="bg-gray-700" onPress={()=> handleOperatonClick('%')} />
          <Button text="÷" className="bg-blue-800" onPress={()=> handleOperatonClick('/')} />
        </View>
        <View className="flex flex-row justify-center">
          <Button text="7" onPress={()=> handleNumberClick('7')}/>
          <Button text="8" onPress={()=> handleNumberClick('8')}/>
          <Button text="9" onPress={()=> handleNumberClick('9')}/>
          <Button text="x" className="bg-blue-800" onPress={()=> handleOperatonClick('*')}/>
        </View>
        <View className="flex flex-row justify-center">
          <Button text="4" onPress={()=> handleNumberClick('4')}/>
          <Button text="5" onPress={()=> handleNumberClick('5')}/>
          <Button text="6" onPress={()=> handleNumberClick('6')}/>
          <Button text="-" className="bg-blue-800" onPress={()=> handleOperatonClick('-')}/>
        </View>
        <View className="flex flex-row justify-center">
          <Button text="1" onPress={()=> handleNumberClick('1')}/>
          <Button text="2" onPress={()=> handleNumberClick('2')}/>
          <Button text="3" onPress={()=> handleNumberClick('3')}/>
          <Button text="+" className="bg-blue-800" onPress={()=> handleOperatonClick('+')}/>
        </View>
        <View className="flex flex-row justify-center">
          <Button text="." onPress={()=> handleNumberClick('.')}/>
          <Button text="0" onPress={()=> handleNumberClick('0')}/>
          <Button text="⌫" className="bg-orange-600"  onPress={()=>{
            if(firstNumber.length > 0 ){
              setFirstNumber(firstNumber.slice(0,-1))
            }else{
              clear()
            }
          }}/>
          <Button text="=" className="bg-yellow-600"  onPress={()=> OperationResult()}/>
        </View>
      </View>
    </>
  );
}
