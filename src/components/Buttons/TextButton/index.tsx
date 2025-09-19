import AppText from 'components/AppText';
import {FontSize} from 'utils/Constants.util';
import {Theme} from 'utils/Theme.util';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

const TextButton = ({
  containerStyle,
  titleStyle,
  onPress,
  color = Theme.textBtn,
  children,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.container, containerStyle]}>
      <AppText
        weight="semiBold"
        style={[styles.title, {color, textDecorationColor: color}, titleStyle]}>
        {children}
      </AppText>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: FontSize,
    textDecorationLine: 'underline',
  },
});
