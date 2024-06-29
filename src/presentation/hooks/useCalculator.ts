/* eslint-disable curly */
import {useEffect, useRef, useState} from 'react';

enum Operator {
  add = '+',
  subtract = '-',
  multiply = '×',
  divide = '÷',
}

export const useCalculator = () => {
  const [formula, setFormula] = useState('');
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
    setFormula('');
    lasOperation.current = undefined;
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

  const calculateResult = () => {
    const result = calculateSubResult();

    lasOperation.current = undefined;
    setFormula(`${result}`);
    setPrevNumber('0');
  };

  const calculateSubResult = (): number => {
    const [firstValue, operation, secondValue] = formula.split(' ');

    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (isNaN(num2)) return num1;

    switch (operation) {
      case Operator.add:
        return num1 + num2;
      case Operator.divide:
        return num1 / num2;
      case Operator.multiply:
        return num1 * num2;
      case Operator.subtract:
        return num1 - num2;
      default:
        throw new Error('Operation not implemented');
    }
  };

  useEffect(() => {
    if (lasOperation.current) {
      const firstFormulaPart = formula.split(' ').at(0);
      setFormula(
        `${firstFormulaPart} ${lasOperation.current} ${currentNumber}`,
      );
    } else {
      setFormula(currentNumber);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentNumber]);

  return {
    // Properties
    currentNumber,
    prevNumber,
    formula,

    // Methods
    clean,
    toggleSign,
    buildNumber,
    addOperation,
    calculateResult,
    deleteOperation,
    divideOperation,
    subtractOperation,
    multiplyOperation,
  };
};
