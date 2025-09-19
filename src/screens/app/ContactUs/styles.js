import { StyleSheet } from 'react-native';
import { vh, vw } from 'utils/Constants.util';
import { Theme } from 'utils/Theme.util';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: vw * 6,
  },
  innerContainer: {
    alignItems: 'center',
    paddingHorizontal: vw * 4,
    marginTop: vh * 4,
    backgroundColor: Theme.cardBG,
    borderRadius: vh * 2,
    padding: vh * 2,
    borderWidth: 0.5,
    borderColor: Theme.border,
  },
  profileImage: {
    height: vh * 15,
    width: vh * 15,
    resizeMode: 'cover',
    borderRadius: vh * 10,
    marginTop: vh * -3,
    marginBottom: vh * 2,
  },
  box: {
    borderWidth: 1,
    borderColor: Theme.border,
    borderRadius: vh * 2,
    padding: vh * 2,
    paddingBottom: vh * 0.8,

    marginTop: vh * 3,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginBottom: vh * 1.5,
  },
  textInput: {
    marginBottom: vh * 1.2,
    borderRadius: 4,
  },
  inputContainerStyle: {
    backgroundColor: Theme.white
    // borderRadius: vh * 50,
  },
  multilineInput: {
    height: vh * 20,
    borderRadius: vh * 2,
    backgroundColor: Theme.white,
  },
  halfTextInput: {
    width: '48%',
  },
  editBtn: { width: '100%', marginTop: vh * 2 },
  textBtnColor: {
    color: Theme.primary,
    fontSize: vh * 1.6,
  },
});
export default styles;
