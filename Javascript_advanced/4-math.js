#!/usr/bin/node
// create operation function 
function divideBy (firstNumber) {
    return (secondNumber) => secondNumber / firstNumber;
  }
  
  function addBy (firstNumber) {
    return (secondNumber) => secondNumber + firstNumber;
  }
  
  const addBy100 = (secondNumber) => addBy(100)(secondNumber);
  const addBy1000 = (secondNumber) => addBy(1000)(secondNumber);
  const divideBy10 = (secondNumber) => divideBy(10)(secondNumber);
  const divideBy100 = (secondNumber) => divideBy(100)(secondNumber);
