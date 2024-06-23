import React from 'react';
import {Text, View} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';
import CalculatorButton from '../components/CalculatorButton';

const CalculatorScreen = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Display data */}
      <View style={globalStyles.displayData}>
        <Text style={globalStyles.mainResult}>1500</Text>
        <Text style={globalStyles.subResult}>15</Text>
      </View>
      {/* Buttons */}
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => console.log('C')}
          label="C"
          darkText
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={() => console.log('+/-')}
          label="+/-"
          darkText
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={() => console.log('del')}
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
        <CalculatorButton onPress={() => console.log('7')} label="7" />
        <CalculatorButton onPress={() => console.log('8')} label="8" />
        <CalculatorButton onPress={() => console.log('9')} label="9" />
        <CalculatorButton
          onPress={() => console.log('×')}
          label="×"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => console.log('4')} label="4" />
        <CalculatorButton onPress={() => console.log('5')} label="5" />
        <CalculatorButton onPress={() => console.log('6')} label="6" />
        <CalculatorButton
          onPress={() => console.log('-')}
          label="-"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => console.log('1')} label="1" />
        <CalculatorButton onPress={() => console.log('2')} label="2" />
        <CalculatorButton onPress={() => console.log('3')} label="3" />
        <CalculatorButton
          onPress={() => console.log('+')}
          label="+"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => console.log('0')}
          label="0"
          duobleSize
        />
        <CalculatorButton onPress={() => console.log('.')} label="." />
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
