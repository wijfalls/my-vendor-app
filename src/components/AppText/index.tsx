import fonts from 'assets/fonts';
import React from 'react';
import {Text, StyleSheet, TextStyle, TextProps} from 'react-native';
import {FontSize} from 'utils/Constants.util';
import {Theme} from 'utils/Theme.util';

interface AppTextProps {
  weight: 'regular' | 'bold' | 'medium' | 'semiBold' | 'none';
  style?: TextStyle;
  textProps: TextProps;
  children: React.ReactNode;
  numberOfLines: number;
}

const AppText: React.FC<AppTextProps> = ({
  weight = 'regular',
  style,
  textProps,
  children,
  numberOfLines,
}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      allowFontScaling={false}
      style={[styles.text, styles[weight], style]}
      {...textProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize,
    color: Theme.text,
    fontFamily: fonts.Raleway.Regular,
  },
  medium: {
    fontFamily: fonts.Raleway.Medium,
  },
  regular: {
    fontFamily: fonts.Raleway.Regular,
  },
  bold: {
    fontFamily: fonts.Raleway.Bold,
  },
  semiBold: {
    fontFamily: fonts.Raleway.SemiBold,
  },
  none: {
    fontFamily: 'Poppins-Regular',
  },
});

export default AppText;
