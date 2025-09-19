import React from 'react';
import {StyleSheet} from 'react-native';
import AppTextInput from '../AppTextInput';
import {vh, vw} from 'utils/Constants.util';
import {Theme} from 'utils/Theme.util';
import {Icons} from 'assets/images';

const SearchInput = ({placeholder, rightIcon, style, ...props}) => {
  return (
    <AppTextInput
      placeholder={placeholder}
      containerStyle={[styles.containerStyle, style]}
      inputContainerStyle={[
        styles.containerStyle,
        styles.inputContainerStyle,
        style,
      ]}
      leftIcon={rightIcon ?? Icons.Search}
      {...props}
    />
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: vh * 1,
    backgroundColor: Theme.white,
    width: vw * 90,
    alignSelf: 'center',
    marginTop: vh * -1,
  },
  inputContainerStyle: {
    backgroundColor: Theme.cardBG,
  },
});
