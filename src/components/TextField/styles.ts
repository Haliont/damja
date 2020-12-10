import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  root: {},
  label: {
    marginBottom: 4,
  },
  input: {
    borderStyle: 'dotted',
    borderColor: 'rgba(0,0,0,.2)',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: '#F7F7F7',
    fontSize: 14,
    padding: 5,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  inputIsFocused: {
    borderColor: 'rgb(108, 190, 3)',
  },
  error: {},
});
