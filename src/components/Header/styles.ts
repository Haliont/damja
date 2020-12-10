import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#eee'
  },
  logo: {
    fontFamily: 'TrebuchetMS-Bold',
    fontSize: 30,
    color: 'rgb(108, 190, 3)',
  },
  burgerButton: {
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
