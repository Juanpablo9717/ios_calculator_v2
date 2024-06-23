import React from 'react';
import {Pressable, Text} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';

interface Props {
  label: string;
  color?: string;
  duobleSize?: boolean;
  darkText?: boolean;
}

const CalculatorButton = ({
  label,
  duobleSize = false,
  color = colors.darkGray,
  darkText,
}: Props) => {
  return (
    <Pressable
      style={({pressed}) => ({
        ...globalStyles.button,
        opacity: pressed ? 0.8 : 1,
        backgroundColor: color,
        width: duobleSize ? 180 : 80,
      })}>
      <Text
        style={[
          globalStyles.buttonText,
          duobleSize && globalStyles.largeButton,
          darkText && globalStyles.darkText,
        ]}>
        {label}
      </Text>
    </Pressable>
  );
};

export default CalculatorButton;
