import React from 'react';
import {StyleSheet, View} from 'react-native';
import {vh} from 'utils/Constants.util';
import {Theme} from 'utils/Theme.util';

const WrapperWithHeader = ({children, headerContainerStyle}) => {
  return (
    <View style={[styles.container, headerContainerStyle]}>
      <View style={styles.innerContainer}>{children}</View>
    </View>
  );
};

export default WrapperWithHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.primary,
    paddingTop: vh * 3,
  },
  innerContainer: {
    flex: 1,
    // borderTopLeftRadius: vh * 3,
    // borderTopRightRadius: vh * 3,
    backgroundColor: Theme.white,
  },
});
