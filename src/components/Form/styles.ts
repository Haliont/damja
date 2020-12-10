import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  root: {
    marginTop: 40,
  },
  title: {
    fontSize: 32,
    fontFamily: 'TrebuchetMS-Bold',
    color: 'rgb(108, 190, 3)',
  },
  content: {
    marginTop: 26,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 20,
  },
  submitButton: {
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: '#6CBE03',
  },
  submitButtonText: {
    fontFamily: 'TrebuchetMS',
    fontSize: 13,
    color: '#fff',
  },
});
