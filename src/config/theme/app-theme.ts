import {StyleSheet} from 'react-native';

export const colors = {
  darkGray: '#2D2D2D',
  lightGray: '#9B9B9B',
  orange: '#FF9427',
  textPrimary: 'white',
  textSecondary: '#666666',
  background: '#000000',
  darkText: '#000000',
};

export const globalStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.background,
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
  displayData: {
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  mainResult: {
    fontSize: 70,
    color: colors.textPrimary,
    textAlign: 'right',
    marginBottom: 10,
    fontWeight: '400',
  },
  subResult: {
    color: colors.textSecondary,
    fontSize: 40,
    textAlign: 'right',
    fontWeight: '300',
  },
  button: {
    height: 80,
    width: 80,
    backgroundColor: colors.darkGray,
    marginHorizontal: 10,
    borderRadius: 100,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: '400',
    color: colors.textPrimary,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  largeButton: {
    textAlign: 'left',
    marginLeft: 20,
  },
  darkText: {
    color: colors.darkText,
  },
});
