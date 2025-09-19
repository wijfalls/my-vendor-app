import { StyleSheet } from 'react-native';
import { FontSize, vh, vw } from 'utils/Constants.util';
import { Theme } from 'utils/Theme.util';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // contentContainer: {
  //   position: 'absolute',
  //   zIndex: -1
  // },
  headerContainer: {
    marginLeft: vw * 5,
    justifyContent: 'flex-start',
  },
  boxContainer: {
    padding: vh * 2,
    marginBottom: vh * 2,
  },
  heading: {
    fontSize: FontSize * 1.5,
  },
  addTitle: {},
  box: {
    borderWidth: 1,
    borderColor: Theme.border,
    borderRadius: vh * 2,
    padding: vh * 2,
    paddingBottom: vh * 0.8,

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
    backgroundColor: 'transparent',
  },
  inputContainerStyle: {
    // borderRadius: vh * 1,
    // backgroundColor: Theme.white,
  },
  multilineInput: {
    height: vh * 10,
  },
  siginBtn: {
    marginTop: vh * 4,
    marginBottom: vh * 1.5,
    width: '100%',
  },
  submitBtn: {
    marginTop: vh * 1,
    // marginBottom: vh * 1.5,
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
    fontSize: FontSize * 1.8,
    color: Theme.white,
    marginLeft: vw * 2,
  },
  subTitle: {
    fontSize: FontSize * 1.2,
    color: Theme.white,
    marginLeft: vw * 2,
  },
  status: { fontSize: FontSize * 1.2, color: Theme.white },

  images: {
    height: vh * 20,
    width: '100%',
    borderRadius: vh * 2,
    marginVertical: vh * 2,
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
  listContentContainerStyle: {
    // paddingHorizontal: vw * 5,
  },
  categorySeparator: {
    width: vw * 4,
    height: 6,
  },
  categoryContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: vh * 1,
    marginVertical: vh * 1.2,
    flexDirection: 'row',
    // marginTop: vh * 1.5,
  },
  profileImage: {
    height: vh * 7,
    width: vh * 7,
    borderRadius: vh * 5,
    resizeMode: 'cover',
  },
  paddingHor: {
    marginTop: vh * 2,
    paddingHorizontal: vw * 5,
  },
  column: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  updateBtn: {
    width: '100%'
  },
  profile: {
    height: vh * 15,
    width: vh * 15,
    borderRadius: vh * 9,
    alignSelf: 'center',
    // marginBottom: vh * 2,
    marginTop: vh * 10,

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
    fontSize: vh * 4,
    alignSelf: 'center',
    color: Theme.white,
    marginBottom: vh * 5,
  },
  subName: {
    alignSelf: 'center',
    marginBottom: vh * 4,
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: Theme.border,
    marginVertical: vh * 1,
  },
  image: {
    width: vw * 100,
    height: 300,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    // zIndex: 9000,
    // position: 'absolute',

  },
});
export default styles;
