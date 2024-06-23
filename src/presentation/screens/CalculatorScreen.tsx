import React from 'react';
import {Text, View, Pressable} from 'react-native';
import {globalStyles} from '../../config/theme/app-theme';

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
        <Pressable style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>1</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CalculatorScreen;
