/* eslint-disable curly */
import {useState} from 'react';

export const useCalculator = () => {
  const [currentNumber, setCurrentNumber] = useState('0');

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

  const clear = () => {
    setCurrentNumber('0');
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

  return {
    // Properties
    currentNumber,

    // Methods
    clear,
    toggleSign,
    buildNumber,
    deleteOperation,
  };
};
