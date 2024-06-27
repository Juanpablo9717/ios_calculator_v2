/* eslint-disable curly */
import {useRef, useState} from 'react';

enum Operator {
  add,
  subtract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const lasOperation = useRef<Operator>();

  const buildNumber = (newNumber: string) => {
    if (currentNumber.includes('.') && newNumber === '.') return;

    if (currentNumber.startsWith('0') || currentNumber.startsWith('-0')) {
      // Add a decimal point, you can only have one
      if (newNumber === '.') {
        return setCurrentNumber(currentNumber + newNumber);
      }

      // Evaluate if it is another 0 and there is a dot
      if (newNumber === '0' && currentNumber.includes('.')) {
        return setCurrentNumber(currentNumber + newNumber);
      }

      // Evaluate if it is different to zero, and there is no dot and it is the first number
      if (newNumber !== '0' && !currentNumber.includes('.')) {
        return setCurrentNumber(newNumber);
      }

      // Avoid 00000000000
      if (newNumber === '0' && !currentNumber.includes('.')) {
        return;
      }
      return setCurrentNumber(currentNumber + newNumber);
    }
    setCurrentNumber(currentNumber + newNumber);
  };

  const clean = () => {
    setCurrentNumber('0');
    setPrevNumber('0');
  };

  const deleteOperation = () => {
    if (currentNumber === '0') return;

    if (currentNumber.includes('-') && currentNumber.length === 2) {
      return setCurrentNumber('0');
    }

    if (currentNumber.length > 1) {
      return setCurrentNumber(
        currentNumber.substring(0, currentNumber.length - 1),
      );
    }
    setCurrentNumber('0');
  };

  const toggleSign = () => {
    if (currentNumber.includes('-')) {
      return setCurrentNumber(currentNumber.replace('-', ''));
    }

    setCurrentNumber('-' + currentNumber);
  };

  const setLastNumber = () => {
    if (currentNumber.endsWith('.')) {
      setPrevNumber(currentNumber.slice(0, -1));
    } else {
      setPrevNumber(currentNumber);
    }
    setCurrentNumber('0');
  };

  const divideOperation = () => {
    setLastNumber();
    lasOperation.current = Operator.divide;
  };

  const subtractOperation = () => {
    setLastNumber();
    lasOperation.current = Operator.subtract;
  };

  const addOperation = () => {
    setLastNumber();
    lasOperation.current = Operator.add;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lasOperation.current = Operator.multiply;
  };

  return {
    // Properties
    currentNumber,
    prevNumber,

    // Methods
    clean,
    toggleSign,
    buildNumber,
    deleteOperation,
    divideOperation,
    subtractOperation,
    addOperation,
    multiplyOperation,
  };
};
