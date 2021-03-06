import { StyleSheet } from 'react-native';
import { CONTENT_HORIZONTAL_PADDING, HEADER_HEIGHT } from '../../constants';

export default StyleSheet.create({
  root: {
    width: '100%',
    zIndex: 1,
    position: 'absolute',
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: HEADER_HEIGHT,
    backgroundColor: '#fff',
    paddingHorizontal: CONTENT_HORIZONTAL_PADDING,
    borderBottomWidth: 2,
    borderBottomColor: '#eee',
    position: 'relative',
    zIndex: 1,
  },
  logo: {
    fontFamily: 'Trebuchet-BoldItalic',
    fontSize: 30,
    color: 'rgb(108, 190, 3)',
  },
  button: {
    height: 40,
    width: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: 'rgb(108, 190, 3)',
  },
  burgerButtonIcon: {
    height: 18,
    width: 20
  },
});
