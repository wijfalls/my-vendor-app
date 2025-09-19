import { StyleSheet } from 'react-native';
import { FontSize, vh, vw } from 'utils/Constants.util';
import { Theme } from 'utils/Theme.util';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    alignItems: 'center',
    marginTop: vh * 4,
    paddingHorizontal: vw * 5,
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
  },
  inputContainerStyle: {
    borderRadius: vh * 50,
  },
  multilineInput: {
    height: vh * 10,
  },
  halfTextInput: {
    width: '48%',
  },
  editBtn: { width: vw * 85, borderRadius: vh * 50 },
  textBtnColor: {
    color: Theme.primary,
    fontSize: vh * 1.6,
  },
});
export default styles;
