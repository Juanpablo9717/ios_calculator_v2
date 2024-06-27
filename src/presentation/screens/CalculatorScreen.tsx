import React from 'react';
import {Text, View} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';
import CalculatorButton from '../components/CalculatorButton';
import {useCalculator} from '../hooks/useCalculator';

const CalculatorScreen = () => {
  const {currentNumber, buildNumber, clear, deleteOperation, toggleSign} =
    useCalculator();
  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Display data */}
      <View style={globalStyles.displayData}>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={globalStyles.mainResult}>
          {currentNumber}
        </Text>
        <Text style={globalStyles.subResult}>15</Text>
      </View>
      {/* Buttons */}
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={clear}
          label="C"
          darkText
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={toggleSign}
          label="+/-"
          darkText
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={deleteOperation}
          label="del"
          darkText
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={() => console.log('÷')}
          label="÷"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber('7')} label="7" />
        <CalculatorButton onPress={() => buildNumber('8')} label="8" />
        <CalculatorButton onPress={() => buildNumber('9')} label="9" />
        <CalculatorButton
          onPress={() => console.log('×')}
          label="×"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber('4')} label="4" />
        <CalculatorButton onPress={() => buildNumber('5')} label="5" />
        <CalculatorButton onPress={() => buildNumber('6')} label="6" />
        <CalculatorButton
          onPress={() => console.log('-')}
          label="-"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber('1')} label="1" />
        <CalculatorButton onPress={() => buildNumber('2')} label="2" />
        <CalculatorButton onPress={() => buildNumber('3')} label="3" />
        <CalculatorButton
          onPress={() => console.log('+')}
          label="+"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => buildNumber('0')}
          label="0"
          duobleSize
        />
        <CalculatorButton onPress={() => buildNumber('.')} label="." />
        <CalculatorButton
          onPress={() => console.log('=')}
          label="="
          color={colors.orange}
        />
      </View>
    </View>
  );
};

export default CalculatorScreen;
