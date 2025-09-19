import {vh, vw} from 'utils/Constants.util';
import {Theme} from 'utils/Theme.util';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const ContainerWrapper = ({style, children}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default ContainerWrapper;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.transparent,
    // width: vw * 90,
    paddingHorizontal: vw * 5,
    alignSelf: 'center',
    minHeight: vh * 53.13,
    paddingVertical: vh * 1,
  },
});
