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

  return {currentNumber, buildNumber};
};
