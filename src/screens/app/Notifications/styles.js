import { StyleSheet } from 'react-native';
import { FontSize, vh, vw } from 'utils/Constants.util';
import { Theme } from 'utils/Theme.util';

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize * 2,
    color: Theme.textBtn,
    marginTop: vh * 2,
  },
  container: {
    // padding: vw * 5,
  },
  contentContainerStyle: {
    paddingVertical: vh * 1,
    alignItems: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: Theme.border,
  },
});

export default styles;
