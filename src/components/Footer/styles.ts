import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  root: {
  },
  inner: {
  },
  content: {
    paddingVertical: 50,
    paddingHorizontal: 15,
    backgroundColor: "rgba(0, 0, 0, 0.8)"
  },
  section: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontFamily: 'TrebuchetMS-Bold',
    fontSize: 30,
    marginBottom: 14,
    color: '#fff',
  },
  sectionText: {
    fontFamily: 'TrebuchetMS',
    fontSize: 15,
    color: '#fff',
    textAlign: 'left',
  },
  aboutTextContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  contacts: {},
  contactsItem: {
    flexDirection: 'row',
    marginTop: 10,
  },
  contactsItemIconContainer: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  contactsItemIcon: {
    maxWidth: 20,
    maxHeight: 20,
  },
  contactsItemTextContainer: {},
  contactsItemText: {
    fontSize: 15,
    fontFamily: 'TrebuchetMS',
    color: '#fff',
  },
  copyrightRoot: {
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6CBE03',
  },
  copyrightText: {
    fontFamily: 'TrebuchetMS-Bold',
    fontSize: 15,
    color: '#008000',
  }
});
