import { StyleSheet } from 'react-native';
import { windowWidth } from '../../../../constants';

export default StyleSheet.create({
  root: {
    width: windowWidth,
    backgroundColor: '#202020',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(68, 68, 68)',
  },
  menuItem: {
    paddingLeft: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgb(68, 68, 68)',
  },
  menuItemInner: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuItemTextContainer: {
    paddingRight: 10,
    paddingVertical: 13,
    flex: 1,
  },
  menuItemText: {
    fontSize: 16,
    color: '#fff',
    textAlignVertical: 'center',
  },
  openSubMenuBtn: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  openSubMenuBtnLine: {
    width: 1,
    height: 24,
    backgroundColor: '#d1d1d1',
    position: 'absolute',
    top: 12,
    left: 0,
  },
  openSubMenuBtnIcon: {
    width: 24,
    height: 24,
  },
  openSubMenuBtnIconIsOpen: {
    transform: [{ rotate: '180deg' }]
  },
  subMenu: {},
});
