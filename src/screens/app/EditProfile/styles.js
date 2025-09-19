import { StyleSheet } from 'react-native';
import { FontSize, vh, vw } from 'utils/Constants.util';
import { Theme } from 'utils/Theme.util';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxContainer: {
    padding: vh * 2,
  },
  addTitle: {},
  box: {
    borderWidth: 1,
    borderColor: Theme.border,
    borderRadius: vh * 2,
    padding: vh * 2,
    paddingBottom: vh * 0.8,
    backgroundColor: Theme.cardBG,
    marginTop: vh * 2,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginBottom: vh * 1.5,
  },
  divider: {
    height: vh * 0.4,
    width: vw * 66,
    backgroundColor: Theme.border,
  },
  textInput: {
    marginBottom: vh * 1.2,
  },
  inputContainerStyle: {
    // borderRadius: vh * 1,
    // backgroundColor: Theme.white,
  },
  multilineInput: {
    height: vh * 10,
  },
  siginBtn: {
    marginTop: vh * 1,
    marginBottom: vh * 1.5,
    width: '100%',
  },
  submitBtn: {
    marginTop: vh * 1,
    marginBottom: vh * 1.5,
    width: '100%',
    backgroundColor: Theme.secondary,
  },
  rowMargin: {
    marginBottom: vh * 1.5,
  },
  halfTextInput: {
    width: '48%',
  },
  title: {
    fontSize: FontSize * 2,
    color: Theme.white,
    marginLeft: vw * 5,
  },
  images: {
    height: vh * 5,
    width: vh * 5,
    resizeMode: 'cover',
  },
  imgContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
  },
  linkTextContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  linkStyle: {
    textDecorationLine: 'none',
  },
  checkSquare: {
    height: vh * 1.5,
    width: vh * 1.5,
    marginBottom: vh * 0.4,
    borderWidth: 1,
    borderColor: Theme.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryColor: {
    color: Theme.primary,
    fontSize: vh * 1.6,
    marginLeft: vw * 2,
  },
  checkIcon: {
    height: vh * 1.2,
    width: vh * 1.2,
    resizeMode: 'contain',
    tintColor: Theme.primary,
  },
  secondaryText: {
    textAlign: 'center',
    width: '80%',
    marginBottom: vh,
    color: Theme.secondary,
    fontSize: vh * 1.8,
  },
  modalText: { textAlign: 'center', width: '80%', marginBottom: vh },
  profile: {
    height: vh * 18,
    width: vh * 18,
    borderRadius: vh * 10,
    marginBottom: vh * 5
  },
  editIcon: {
    height: vh * 4.5,
    width: vh * 4.5,
    position: 'absolute',
    zIndex: 999,
    right: 5,
    top: 4
  },
  profileContainer: {
    height: vh * 18,
    width: vh * 18,
    alignSelf: 'center',
    marginBottom: vh * 4,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
  },
  tag: {
    backgroundColor: Theme.primary,
    borderRadius: vh * 10,
    paddingHorizontal: 18,
    paddingVertical: vh * 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // gap: 8,
    width: '100%'
  },
  tagText: {
    color: '#FFFFFF',
  },
  tagIcon: {
    width: 16,
    height: 16,
    tintColor: '#FFFFFF',
  },
  nameText: {
    fontSize: vh * 2,
    alignSelf: 'center',
  },
  subName: {
    alignSelf: 'center',
    marginBottom: vh * 4,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: vh,
    marginLeft: vw * 2,
  }
});
export default styles;
