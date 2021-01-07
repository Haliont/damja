import { StyleSheet } from 'react-native';

export const SLIDER_BORDER_WIDTH = 4;

export default StyleSheet.create({
  root: {
    width: '100%',
    alignItems: 'center',
  },
  sliderContainer: {
    borderWidth: SLIDER_BORDER_WIDTH,
    borderColor: '#fff',
    borderRadius: 2,
    elevation: 5,
    backgroundColor: '#000',
  },
});
