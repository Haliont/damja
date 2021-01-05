import { StyleSheet } from 'react-native';

const IMAGE_HEIGHT = 446;

export default StyleSheet.create({
  root: {
    width: '100%',
    alignItems: 'center',
  },
  sliderContainer: {
    maxWidth: 410,
    height: IMAGE_HEIGHT,
    borderWidth: 4,
    borderColor: '#fff',
    borderRadius: 2,
    elevation: 5,
  },
  slide: {
    flex: 1,
    height: IMAGE_HEIGHT,
    backgroundColor: '#000',
  },
  slideImg: {
    width: '100%',
    height: IMAGE_HEIGHT,
  },
});
